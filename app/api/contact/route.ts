import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, message }: ContactForm = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

   
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
 
  
   await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email,
  subject: "Thanks for Reaching Out!",
  text: `Hi ${name},

Thank you for reaching out to StriveUp Solutions Pvt. Ltd. We have received your message and our team will review it shortly. You can expect a response from us as soon as possible.

We appreciate your interest and look forward to connecting with you.

Best regards,
StriveUp Solutions Pvt. Ltd. 
`
});


    return NextResponse.json({ success: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
