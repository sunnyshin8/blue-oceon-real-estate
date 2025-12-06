import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, propertyType, location, budget, message } = body

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Email to admin
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'blueoceanbuildingsolutions@gmail.com',
      subject: `New register as partner: ${name}`,
      html: `
        <h2>New Property register as partner</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'No additional message'}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'register as partner email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('register as partner form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
