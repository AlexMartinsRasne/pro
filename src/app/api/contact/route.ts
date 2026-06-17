import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const formEndpoint = process.env.FORM_ENDPOINT;
    const contactEmail = process.env.CONTACT_EMAIL || 'falconxxx475@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'no-reply@falcon-portfolio.example.com';

    if (!sendgridApiKey && !formEndpoint) {
      return NextResponse.json(
        {
          error:
            'Email provider is not configured. Set SENDGRID_API_KEY or FORM_ENDPOINT.',
        },
        { status: 500 }
      );
    }

    let response: Response;

    if (sendgridApiKey) {
      const sendgridBody = {
        personalizations: [
          {
            to: [{ email: contactEmail }],
            subject: `New portfolio contact from ${name}`,
          },
        ],
        from: {
          email: fromEmail,
          name: 'Portfolio Contact Form',
        },
        reply_to: {
          email,
          name,
        },
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          },
        ],
      };

      response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${sendgridApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendgridBody),
      });
    } else {
      response = await fetch(formEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio contact from ${name}`,
          _replyto: email,
        }),
      });
    }

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: 'Failed to send email.', details: errorText },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unexpected server error.', details: String(error) },
      { status: 500 }
    );
  }
}
