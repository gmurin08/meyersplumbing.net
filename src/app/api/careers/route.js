import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Client } from 'pg';

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.name || !data.phone || !data.email || !data.experience) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT == 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHTML = `
      <h2>New Job Application - Careers Page</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Years of Experience:</strong> ${data.experience}</p>
      ${data.message ? `
      <p><strong>About the Applicant:</strong></p>
      <p>${data.message}</p>
      ` : ''}
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    const textContent = `
New Job Application - Careers Page

Applicant Details:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Years of Experience: ${data.experience}

${data.message ? `About the Applicant:\n${data.message}` : ''}

Submitted: ${new Date().toLocaleString()}
---
M. Meyers Plumbing
    `.trim();

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: [process.env.CONTACT_EMAIL, 'gmurin@gmail.com'].filter(Boolean).join(','),
      subject: 'New Job Application - meyersplumbing.net',
      text: textContent,
      html: emailHTML,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Careers form email sent:', info.messageId);

    const client = new Client({
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      user: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      port: 5432,
      ssl: { rejectUnauthorized: false }
    });

    try {
      await client.connect();

      const formData = {
        type: 'career_application',
        name: data.name,
        phone: data.phone,
        email: data.email,
        experience: data.experience,
        message: data.message || null,
        submittedAt: new Date().toISOString()
      };

      await client.query(
        'INSERT INTO form_submissions (client_id, data) VALUES ($1, $2)',
        [process.env.ACD_CLIENT_ID, JSON.stringify(formData)]
      );
      console.log('Careers form data saved to database');
    } catch (dbError) {
      console.error('Database save error:', dbError);
    } finally {
      await client.end();
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Careers form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application', details: error.message },
      { status: 500 }
    );
  }
}
