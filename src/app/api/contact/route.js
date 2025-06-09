import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type');
    let data = {};

    if (contentType?.includes('application/json')) {
      // Handle JSON data (compact form)
      const jsonData = await request.json();
      data = {
        firstName: jsonData.name ? jsonData.name.split(' ')[0] : '',
        lastName: jsonData.name ? jsonData.name.split(' ').slice(1).join(' ') : '',
        phone: jsonData.phone,
        email: jsonData.email,
        serviceType: 'General Inquiry',
        message: jsonData.details || jsonData.message,
        preferredTime: 'No preference',
      };
    } else {
      // Handle FormData (main contact form)
      const formData = await request.formData();
      data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        serviceType: formData.get('serviceType'),
        message: formData.get('message'),
        preferredTime: formData.get('preferredTime'),
      };
    }

    // Basic validation
    if (!data.firstName || !data.phone || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    console.log(data)
    // // Create transporter
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // });

    // // Email content
    // const mailOptions = {
    //   from: process.env.SMTP_FROM,
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New Contact Form Submission - ${data.serviceType || 'General Inquiry'}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
    //     <p><strong>Service Type:</strong> ${data.serviceType || 'Not specified'}</p>
    //     <p><strong>Preferred Contact Time:</strong> ${data.preferredTime || 'No preference'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${data.message}</p>
    //     <hr>
    //     <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
    //   `,
    // };

    // // Send email
    // await transporter.sendMail(mailOptions);

    // // Redirect to thank you page or back to contact with success
     return NextResponse.redirect('/contact?success=true');

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.redirect('/contact?error=true');
  }
}