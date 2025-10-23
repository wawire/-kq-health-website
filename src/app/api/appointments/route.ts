import { NextRequest, NextResponse } from 'next/server';

interface AppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  service: string;
  clinic: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  medicalHistory?: string;
  insurance?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: AppointmentData = await request.json();

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'service', 'clinic', 'preferredDate', 'preferredTime', 'reason'];
    for (const field of requiredFields) {
      if (!data[field as keyof AppointmentData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Phone validation (Kenyan format)
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    if (!phoneRegex.test(data.phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Generate appointment reference
    const reference = `APT-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;

    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email to patient
    // 3. Send notification email to clinic
    // 4. Integrate with calendar/scheduling system

    // For now, log the appointment (in production, save to database)
    console.log('New appointment request:', {
      reference,
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (in production, use a service like SendGrid, Resend, or AWS SES)
    await sendAppointmentConfirmation(data, reference);

    return NextResponse.json({
      success: true,
      message: 'Appointment request received successfully',
      reference,
    });
  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process appointment request' },
      { status: 500 }
    );
  }
}

// Simulated email function (replace with actual email service in production)
async function sendAppointmentConfirmation(data: AppointmentData, reference: string) {
  // In production, implement email sending logic here
  // Example using popular services:

  // Using Resend:
  // await resend.emails.send({
  //   from: 'KQ Health <noreply@kqhealth.com>',
  //   to: data.email,
  //   subject: 'Appointment Request Received',
  //   html: generateConfirmationEmail(data, reference)
  // });

  // Using SendGrid:
  // await sgMail.send({
  //   to: data.email,
  //   from: 'noreply@kqhealth.com',
  //   subject: 'Appointment Request Received',
  //   html: generateConfirmationEmail(data, reference)
  // });

  // For now, just log
  console.log(`Email would be sent to: ${data.email} with reference: ${reference}`);

  // Generate email content for logging
  const emailHtml = generateConfirmationEmail(data, reference);
  console.log('Email content generated:', emailHtml.substring(0, 100) + '...');

  return Promise.resolve();
}

// Helper function to generate email HTML (you can expand this)
function generateConfirmationEmail(data: AppointmentData, reference: string): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Appointment Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #e30613; color: white; padding: 20px; text-align: center;">
            <h1>KQ Health</h1>
          </div>

          <div style="padding: 20px; background-color: #f9f9f9;">
            <h2>Appointment Request Received</h2>
            <p>Dear ${data.firstName} ${data.lastName},</p>

            <p>Thank you for booking an appointment with KQ Health. We have received your request and will confirm your appointment within 24 hours.</p>

            <div style="background-color: white; padding: 15px; margin: 20px 0; border-left: 4px solid #e30613;">
              <h3>Appointment Details</h3>
              <p><strong>Reference:</strong> ${reference}</p>
              <p><strong>Service:</strong> ${data.service}</p>
              <p><strong>Clinic:</strong> ${data.clinic}</p>
              <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
            </div>

            <p>If you need immediate assistance or have urgent medical needs, please call us at <strong>+254 741 210065</strong> (available 24/7).</p>

            <p>Best regards,<br>KQ Health Team<br>Kenya Airways Medical Services</p>
          </div>

          <div style="text-align: center; padding: 20px; font-size: 12px; color: #666;">
            <p>This is an automated message. Please do not reply to this email.</p>
            <p>For inquiries, contact us at doctors.kq@kenya-airways.com</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
