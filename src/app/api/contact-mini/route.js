import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse JSON data from compact form
    const data = await request.json();
    console.log('Mini contact form data:', data);

    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Simple email content
    const emailHTML = `
      <h2>Quick Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      ${data.details ? `
      <p><strong>Project Details:</strong></p>
      <p>${data.details}</p>
      ` : ''}
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    // Create plain text version
    const textContent = `
Quick Contact Form Submission

Contact Details:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Submitted: ${new Date().toLocaleString()}

${data.details ? `Project Details:\n${data.details}` : ''}

---
Meyer's Plumbing
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: 'Quick Contact Form - Meyer\'s Plumbing',
      text: textContent,
      html: emailHTML,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Mini form email sent:', info.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Mini contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}