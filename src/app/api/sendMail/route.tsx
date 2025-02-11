import { Resend } from 'resend';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ message: 'All fields are required' }, { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: 'contact@nikhilsingh.com.np', // Your verified domain email
            to: process.env.RECEIVER_EMAIL,  // Your Gmail
            subject: `New Contact Form Message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return Response.json({ message: 'Email sent successfully!', data }, { status: 200 });
    } catch (error) {
        console.error('Email sending error:', error);
        return Response.json({ message: 'Failed to send email' }, { status: 500 });
    }
}
