import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Client } from 'pg';

export async function POST(request) {
  try {
    // Parse FormData from main contact form
    const formData = await request.formData();
    console.log('Form data received:', Array.from(formData.entries()));
    
    // Extract all form fields
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const phone = formData.get('phone') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    console.log('Extracted fields:', { firstName, lastName, phone, email, message });

    // Validation
    if (!firstName || !lastName || !phone || !message) {
      console.log('Validation failed');
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Simple email content
    const emailHTML = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL,
      subject: 'New Contact Form Submission - meyersplumbing.net',
      html: emailHTML,
    };

    console.log('Sending email...');
    
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    // Save to database
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
        firstName,
        lastName,
        phone,
        email,
        message,
        submittedAt: new Date().toISOString()
      };

      await client.query(
        'INSERT INTO form_submissions (client_id, data) VALUES ($1, $2)',
        [process.env.ACD_CLIENT_ID, JSON.stringify(formData)]
      );
      console.log('Form data saved to database');
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Continue execution - don't fail if email was sent
    } finally {
      await client.end();
    }

    // Return success
    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email', details: error.message },
      { status: 500 }
    );
  }
}