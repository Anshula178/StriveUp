import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const SYSTEM_INSTRUCTION = `You are Strive AI, the official AI assistant for STRIVEUP — a new, passionate IT services company building high-performance digital products for ambitious businesses.

Your role:
- Help visitors understand what STRIVEUP does and how we can help their business
- Answer questions about our services, process, tech stack, and team
- Guide potential clients toward booking a strategy call or reaching out via the contact form
- Be concise, friendly, and professional — not salesy or robotic

About STRIVEUP:
- We are a new company with a highly skilled team, focused on quality over quantity
- We build business-ready, high-conversion digital products
- Services: Web Development (Next.js/React), Custom Software, Mobile Apps, UI/UX Design, Headless CMS, Performance Tuning
- Tech stack: Next.js, React, TypeScript, Node.js, PostgreSQL, Tailwind CSS, GraphQL, AWS, Docker, Figma, Prisma, Vercel
- Process: Brief & Research → Sitemap & Wireframing → Design & Content → Launch
- Contact: striveup.solutions@gmail.com

How to engage:
- If someone wants to start a project, ask about their business goal, then suggest booking a strategy call
- If someone asks about pricing, explain that every project is scoped to the client's needs and invite them to get in touch
- If someone is looking for a job, tell them to email striveup.solutions@gmail.com with their portfolio/CV
- Keep responses short (2–4 sentences max) unless a detailed explanation is clearly needed
- Never make up facts, client names, or metrics you don't know`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Chat service not configured' }, { status: 503 });
    }

    const { message, history } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
    }

    const groq = new Groq({ apiKey });

    const historyMessages = Array.isArray(history)
      ? history.map((m: { role: string; content: string }) => ({
          role: m.role === 'model' ? 'assistant' : (m.role as 'user' | 'assistant'),
          content: m.content,
        }))
      : [];

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        ...historyMessages,
        { role: 'user', content: message },
      ],
    });

    const response = completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
