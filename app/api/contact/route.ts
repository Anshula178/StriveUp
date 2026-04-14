import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, projectType, message } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailReceiver = process.env.EMAIL_RECEIVER;

    if (emailUser && emailPass && emailReceiver) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: `"STRIVEUP Contact" <${emailUser}>`,
        to: emailReceiver,
        replyTo: email,
        subject: `New enquiry — ${projectType || 'General'} from ${firstName}${lastName ? ' ' + lastName : ''}`,
        text: `Name: ${firstName}${lastName ? ' ' + lastName : ''}\nEmail: ${email}\nProject Type: ${projectType || 'Not specified'}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <h2 style="color:#111">New Contact Form Submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:130px">Name</td><td style="padding:8px 0;font-weight:600">${firstName}${lastName ? ' ' + lastName : ''}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">${projectType || 'Not specified'}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
            <p style="color:#666;margin-bottom:4px">Message</p>
            <p style="white-space:pre-wrap;background:#f9f9f9;padding:12px;border-radius:6px">${message}</p>
          </div>
        `,
      });
    } else {
      console.log('Contact form submission (email not configured):', {
        firstName, lastName, email, projectType, message,
      });
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
