import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactNotificationTemplate } from '@/app/components/email-templete';

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail: string = process.env.RECEIVER_EMAIL!
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const response = await resend.emails.send({
      to: receiverEmail ,
      from: 'contact@nikhilsingh.com.np',
      subject: `Message From ${name}`,
      react: (
        <ContactNotificationTemplate
          Name={name}
          email={email}
          message={message}
        />
      ),
    });

    return NextResponse.json({ message: 'Email sent', response }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}
