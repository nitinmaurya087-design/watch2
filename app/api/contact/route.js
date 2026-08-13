import { NextResponse } from 'next/server';

export async function POST(request) {
  const data = await request.json();
  const { name, email, message } = data;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: 'Please provide name, email and message.' },
      { status: 400 }
    );
  }

  const contactEmail = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!contactEmail || !apiKey) {
    return NextResponse.json(
      { fallback: true, message: 'Email service not configured.' },
      { status: 501 }
    );
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: `Portfolio <${contactEmail}>`,
        to: contactEmail,
        subject: `New message from ${name}`,
        html: `<strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><p>${message}</p>`
      })
    });

    if (!response.ok) {
      throw new Error('Email service error');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to send message at this time.' },
      { status: 500 }
    );
  }
}
