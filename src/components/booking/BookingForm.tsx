'use client';

import { useState, FormEvent } from 'react';
import { Calendar, Clock, User, Mail, Phone, MapPin, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/button';

interface FormData {
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
  medicalHistory: string;
  insurance: string;
}

interface FormErrors {
  [key: string]: string;
}

const services = [
  'General Consultation',
  'Travel Health Advisory',
  'Medical Tourism Consultation',
  'Corporate Health Assessment',
  'Special Needs Assistance',
  'Follow-up Appointment',
  'Vaccination Services',
  'Health Certificate',
  'Pre-Travel Medical Check',
  'Other',
];

const clinics = [
  { value: 'pride-center', label: 'Pride Center Clinic - Nairobi (6 AM - 6 PM)' },
  { value: 'jkia', label: 'JKIA Clinic - Airport (24/7)' },
  { value: 'online', label: 'Online Consultation' },
];

const timeSlots = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM',
];

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    service: '',
    clinic: '',
    preferredDate: '',
    preferredTime: '',
    reason: '',
    medicalHistory: '',
    insurance: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required fields validation
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone validation (Kenyan format)
    const phoneRegex = /^(\+254|0)[17]\d{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Invalid phone number (use Kenyan format)';
    }

    if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.clinic) newErrors.clinic = 'Please select a clinic';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
    if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!formData.reason.trim()) newErrors.reason = 'Reason for visit is required';

    // Date validation - must be in the future
    if (formData.preferredDate) {
      const selectedDate = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.preferredDate = 'Please select a future date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          service: '',
          clinic: '',
          preferredDate: '',
          preferredTime: '',
          reason: '',
          medicalHistory: '',
          insurance: '',
        });

        // Scroll to success message
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Booking error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Appointment Request Received!</h3>
                <p className="text-green-800">
                  Thank you for booking with KQ Health. We&apos;ve received your appointment request and will confirm your booking within 24 hours via email or phone.
                </p>
                <p className="text-green-700 text-sm mt-2">
                  Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Booking Error</h3>
                <p className="text-red-800">
                  We encountered an error processing your appointment request. Please try again or contact us directly at <a href="tel:+254741210065" className="underline">+254 741 210065</a>.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
              Appointment Information
            </h2>
            <p className="text-foreground-muted mb-8">
              Please fill in all required fields marked with *
            </p>

            {/* Personal Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold font-heading mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+254 741 210065"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-foreground mb-2">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    max={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                </div>

                <div>
                  <label htmlFor="insurance" className="block text-sm font-medium text-foreground mb-2">
                    Insurance Provider (Optional)
                  </label>
                  <input
                    type="text"
                    id="insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="AAR, Britam, NHIF, etc."
                  />
                </div>
              </div>
            </div>

            {/* Appointment Details */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold font-heading mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Appointment Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="clinic" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Clinic *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="clinic"
                      name="clinic"
                      value={formData.clinic}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.clinic ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a clinic</option>
                      {clinics.map((clinic) => (
                        <option key={clinic.value} value={clinic.value}>
                          {clinic.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.clinic && <p className="text-red-500 text-sm mt-1">{errors.clinic}</p>}
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-foreground mb-2">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold font-heading mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Medical Information
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-2">
                    Reason for Visit *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                      errors.reason ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Please briefly describe the reason for your visit..."
                  />
                  {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
                </div>

                <div>
                  <label htmlFor="medicalHistory" className="block text-sm font-medium text-foreground mb-2">
                    Relevant Medical History (Optional)
                  </label>
                  <textarea
                    id="medicalHistory"
                    name="medicalHistory"
                    value={formData.medicalHistory}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Any allergies, medications, or conditions we should know about..."
                  />
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Please note:</strong> This is an appointment request. You will receive a confirmation within 24 hours. For urgent medical needs, please call <a href="tel:+254741210065" className="underline font-semibold">+254 741 210065</a>.
              </p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="flex-1 py-4 text-lg"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Appointment Request'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (confirm('Are you sure you want to clear the form?')) {
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      dateOfBirth: '',
                      service: '',
                      clinic: '',
                      preferredDate: '',
                      preferredTime: '',
                      reason: '',
                      medicalHistory: '',
                      insurance: '',
                    });
                    setErrors({});
                  }
                }}
                className="px-8 py-4"
              >
                Clear Form
              </Button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
            <p className="text-sm text-foreground-muted mb-4">
              If you have any questions or need assistance with booking, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm">
              <a href="tel:+254741210065" className="flex items-center gap-2 text-primary hover:text-primary-dark">
                <Phone className="w-4 h-4" />
                +254 741 210065 (24/7)
              </a>
              <a href="mailto:doctors.kq@kenya-airways.com" className="flex items-center gap-2 text-primary hover:text-primary-dark">
                <Mail className="w-4 h-4" />
                doctors.kq@kenya-airways.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
