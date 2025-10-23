# KQ Health Appointment Booking System

## Overview

A comprehensive appointment booking system for KQ Health that allows patients to schedule medical appointments online. The system includes form validation, multiple service options, clinic selection, and automated confirmation handling.

## Features

### Patient-Facing Features
- **Personal Information Collection**
  - First name, last name
  - Email address with validation
  - Phone number (Kenyan format: +254 or 07/01)
  - Date of birth
  - Insurance provider (optional)

- **Appointment Details**
  - Service selection (10+ medical services)
  - Clinic location selection
    - Pride Center Clinic - Nairobi (6 AM - 6 PM)
    - JKIA Clinic - Airport (24/7)
    - Online Consultation
  - Preferred date (future dates only)
  - Preferred time slots (30-minute intervals from 8:00 AM - 5:30 PM)

- **Medical Information**
  - Reason for visit (required)
  - Medical history (optional)

- **User Experience**
  - Real-time form validation
  - Clear error messages
  - Success/error feedback
  - Appointment reference number generation
  - Responsive design (mobile-friendly)
  - Accessibility features

### Available Services
1. General Consultation
2. Travel Health Advisory
3. Medical Tourism Consultation
4. Corporate Health Assessment
5. Special Needs Assistance
6. Follow-up Appointment
7. Vaccination Services
8. Health Certificate
9. Pre-Travel Medical Check
10. Other

## Technical Implementation

### File Structure
```
src/
├── app/
│   ├── book-appointment/
│   │   └── page.tsx                 # Booking page
│   └── api/
│       └── appointments/
│           └── route.ts             # API endpoint
└── components/
    └── booking/
        ├── BookingHero.tsx          # Hero section
        └── BookingForm.tsx          # Main form component
```

### API Endpoint

**POST** `/api/appointments`

**Request Body:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required, valid email)",
  "phone": "string (required, Kenyan format)",
  "dateOfBirth": "string (required, ISO date)",
  "service": "string (required)",
  "clinic": "string (required)",
  "preferredDate": "string (required, future date)",
  "preferredTime": "string (required)",
  "reason": "string (required)",
  "medicalHistory": "string (optional)",
  "insurance": "string (optional)"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Appointment request received successfully",
  "reference": "APT-1234567890-ABC123"
}
```

**Error Response (400/500):**
```json
{
  "error": "Error message description"
}
```

### Validation Rules

#### Email
- Format: `user@domain.com`
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

#### Phone Number
- Kenyan format only
- Patterns: `+254 7XXXXXXXX` or `07XXXXXXXX` or `+254 1XXXXXXXX` or `01XXXXXXXX`
- Regex: `/^(\+254|0)[17]\d{8}$/`

#### Date
- Preferred date must be in the future
- Date of birth must be in the past

#### Required Fields
- All fields marked with * are required
- Form validates on submit and provides field-specific error messages

## Integration Points

### Email Service (To Be Implemented)

The system is ready for email integration. To add email notifications:

1. **Install an email service** (choose one):
   ```bash
   npm install resend
   # or
   npm install @sendgrid/mail
   # or
   npm install nodemailer
   ```

2. **Add environment variables** to `.env.local`:
   ```env
   # For Resend
   RESEND_API_KEY=your_api_key

   # For SendGrid
   SENDGRID_API_KEY=your_api_key

   # For Nodemailer (SMTP)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@domain.com
   SMTP_PASSWORD=your_password
   ```

3. **Update the API route** (`src/app/api/appointments/route.ts`):
   ```typescript
   // Example using Resend
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   async function sendAppointmentConfirmation(data: AppointmentData, reference: string) {
     await resend.emails.send({
       from: 'KQ Health <noreply@kqhealth.com>',
       to: data.email,
       subject: 'Appointment Request Received',
       html: generateConfirmationEmail(data, reference)
     });

     // Also send to clinic
     await resend.emails.send({
       from: 'KQ Health <noreply@kqhealth.com>',
       to: 'doctors.kq@kenya-airways.com',
       subject: 'New Appointment Request',
       html: generateClinicNotification(data, reference)
     });
   }
   ```

### Database Integration (Recommended)

For production use, integrate with a database to store appointments:

**Options:**
- PostgreSQL (via Vercel Postgres or Supabase)
- MongoDB (via MongoDB Atlas)
- Firebase Firestore
- Prisma ORM

**Example Schema:**
```sql
CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  reference VARCHAR(50) UNIQUE NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  date_of_birth DATE NOT NULL,
  service VARCHAR(100) NOT NULL,
  clinic VARCHAR(100) NOT NULL,
  preferred_date DATE NOT NULL,
  preferred_time VARCHAR(20) NOT NULL,
  reason TEXT NOT NULL,
  medical_history TEXT,
  insurance VARCHAR(100),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Calendar Integration (Optional)

Integrate with calendar services:
- **Google Calendar API** - Automatically create calendar events
- **Microsoft Outlook** - For corporate environments
- **Custom booking system** - Check availability in real-time

## Usage

### For Patients

1. Navigate to `/book-appointment` or click "Book Appointment" in the navigation
2. Fill in all required fields (marked with *)
3. Select preferred date, time, and clinic
4. Provide reason for visit and any relevant medical history
5. Submit the form
6. Receive confirmation with appointment reference number
7. Expect confirmation call/email within 24 hours

### For Administrators

**Current Implementation:**
- Appointments are logged to console
- Reference numbers are generated automatically
- Email templates are pre-configured

**Production Setup Needed:**
1. Set up email service (Resend/SendGrid/etc.)
2. Configure database for appointment storage
3. Create admin dashboard to view/manage appointments
4. Set up automated confirmation emails
5. Implement calendar integration
6. Add SMS notifications (optional, using Twilio)

## Testing

### Local Testing

```bash
# Start development server
npm run dev

# Visit the booking page
open http://localhost:3000/book-appointment

# Test form validation
# - Try submitting with empty fields
# - Enter invalid email format
# - Enter invalid phone number
# - Select past date
# - Check all error messages display correctly

# Test successful submission
# - Fill all required fields correctly
# - Check console for logged appointment data
# - Verify success message displays
# - Check form resets after submission
```

### API Testing with curl

```bash
# Test successful appointment booking
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "+254741210065",
    "dateOfBirth": "1990-01-01",
    "service": "General Consultation",
    "clinic": "pride-center",
    "preferredDate": "2025-11-01",
    "preferredTime": "10:00 AM",
    "reason": "Regular checkup",
    "insurance": "AAR"
  }'

# Test validation error (missing field)
curl -X POST http://localhost:3000/api/appointments \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "email": "invalid-email"
  }'
```

## Future Enhancements

### Phase 2 Features
- [ ] Real-time availability checking
- [ ] Appointment rescheduling
- [ ] Appointment cancellation
- [ ] Patient portal for viewing appointment history
- [ ] Doctor selection
- [ ] Online payment integration
- [ ] Video consultation integration
- [ ] SMS reminders (Twilio/Africa's Talking)
- [ ] Multi-language support
- [ ] Recurring appointments

### Phase 3 Features
- [ ] Waitlist management
- [ ] Insurance verification
- [ ] Medical records upload
- [ ] Prescription refill requests
- [ ] Lab results viewing
- [ ] Telemedicine integration
- [ ] Mobile app (React Native)

## Security Considerations

### Current Implementation
- Client-side form validation
- Server-side validation in API route
- Input sanitization
- Error handling

### Production Requirements
- [ ] Add rate limiting (prevent spam)
- [ ] Implement CAPTCHA (prevent bots)
- [ ] Add CSRF protection
- [ ] Encrypt sensitive data in database
- [ ] Implement proper authentication for admin access
- [ ] Add audit logging
- [ ] GDPR/data privacy compliance
- [ ] HIPAA compliance (if applicable)

## Support

### Contact Information
- **Emergency (24/7):** +254 741 210065
- **Email:** doctors.kq@kenya-airways.com
- **Location:** Kenya Airways Head Office, Nairobi

### For Technical Issues
- Check browser console for errors
- Verify all required fields are filled
- Ensure phone number is in Kenyan format
- Ensure date is in the future
- Clear browser cache and try again
- Contact technical support if issues persist

## Deployment Notes

### Vercel Deployment
The appointment system is fully compatible with Vercel deployment:
- API routes are serverless functions
- Static pages are pre-rendered
- Environment variables for email services
- Automatic HTTPS
- Global CDN distribution

### Environment Variables Needed (Production)
```env
# Email Service
RESEND_API_KEY=your_key_here
# or
SENDGRID_API_KEY=your_key_here

# Database (if using)
DATABASE_URL=your_connection_string

# Optional
NEXT_PUBLIC_SITE_URL=https://kqhealth.com
CAPTCHA_SECRET_KEY=your_key_here
```

## License

© 2024 Kenya Airways Health Division. All rights reserved.
