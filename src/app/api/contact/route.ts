import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { ContactFormData } from '@/types'

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5 // Max 5 requests per 15 minutes

  const record = rateLimitMap.get(ip)
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }
  
  if (record.count >= maxRequests) {
    return true
  }
  
  record.count++
  return false
}

function validateContactData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  }
  
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email is required')
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.push('Please provide a valid email address')
    }
  }
  
  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  }
  
  return { isValid: errors.length === 0, errors }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Check rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { isValid, errors } = validateContactData(body)
    
    if (!isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      )
    }

    const { name, email, message }: ContactFormData = body

    // Create nodemailer transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Alternative: SendGrid configuration (commented out)
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: process.env.CONTACT_EMAIL || 'muriukidismas9@gmail.com',
      from: process.env.SMTP_USER, // Must be verified sender in SendGrid
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    await sgMail.send(msg)
    */

    // Email configuration
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'muriukidismas9@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #14b8a6;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            This message was sent from your portfolio contact form at dismas.dev
          </p>
        </div>
      `,
      replyTo: email, // Allow easy reply to the sender
    }

    // Send email
    await transporter.sendMail(mailOptions)

    // Log successful submission (remove in production or use proper logging)
    console.log(`Contact form submission from ${name} (${email})`)

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later or contact me directly.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
