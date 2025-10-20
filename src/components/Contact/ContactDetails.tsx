// components/Contact/ContactDetails.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import React from 'react';

interface ContactMethod {
  icon: React.ReactNode;
  type: string;
  value: string;
  description: string;
  href: string;
  primary?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    icon: <Phone className="w-5 h-5" />,
    type: '24-Hour Emergency Hotline',
    value: '+254 734 104 747',
    description: 'Round-the-clock medical assistance and emergencies',
    href: 'tel:+254734104747',
    primary: true,
  },
  {
    icon: <Phone className="w-5 h-5" />,
    type: 'General Inquiries',
    value: '+254 711 024 747',
    description: 'Appointments, consultations, and general information',
    href: 'tel:+254711024747',
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    type: 'WhatsApp',
    value: '+254 705 474 747',
    description: 'Quick messaging and appointment booking',
    href: 'https://wa.me/254705474747',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    type: 'Medical Team Email',
    value: 'Doctors.KQ@kenya-airways.com',
    description: 'Medical clearances, MEDIF forms, and professional inquiries',
    href: 'mailto:Doctors.KQ@kenya-airways.com',
  },
];

const ContactDetails: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-background-muted)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-[var(--color-primary)] font-medium font-heading tracking-wide">
            CONTACT INFORMATION
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mt-2 font-brand">
            Multiple Ways to Reach Us
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 font-heading">
              Contact Methods
            </h3>
            <div className="space-y-6">
              {contactMethods.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`block p-6 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    contact.primary
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]'
                      : 'bg-white text-[var(--color-foreground)] border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                        contact.primary ? 'bg-white/20' : 'bg-[var(--color-primary)]/10'
                      }`}
                    >
                      <span
                        className={contact.primary ? 'text-white' : 'text-[var(--color-primary)]'}
                      >
                        {contact.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div
                        className={`font-bold text-base mb-1 ${
                          contact.primary ? 'text-white' : 'text-[var(--color-foreground)]'
                        } font-heading`}
                      >
                        {contact.value}
                      </div>
                      <div
                        className={`text-sm font-medium mb-2 ${
                          contact.primary ? 'text-white/80' : 'text-[var(--color-primary)]'
                        } font-heading`}
                      >
                        {contact.type}
                      </div>
                      <div
                        className={`text-sm ${
                          contact.primary ? 'text-white/80' : 'text-[var(--color-foreground-muted)]'
                        } font-body`}
                      >
                        {contact.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Pride Center Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 font-heading">
              Kenya Airways Pride Centre Location
            </h3>

            {/* Full Google Map */}
            <div className="rounded-xl overflow-hidden border border-[var(--color-gray-200)] h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7234567890123!2d36.9166642!3d-1.3126977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13acb778006b%3A0x5c36c2803b635a6a!2sKenya%20Airways%20Pride%20Clinic!5e0!3m2!1sen!2ske!4v1640995200000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kenya Airways Pride Centre Location"
              />
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-xl p-6 mt-4 border border-[var(--color-gray-200)]">
              <h4 className="font-bold text-[var(--color-foreground)] mb-2 font-heading">
                Kenya Airways Pride Centre
              </h4>
              <div className="text-sm text-[var(--color-secondary)] mb-3 font-heading">
                Level 3 Healthcare Facility
              </div>
              <div className="text-sm text-[var(--color-foreground-muted)] mb-3 font-body">
                Mombasa Road, Nairobi
              </div>
              <div className="text-sm font-medium text-[var(--color-foreground)] font-body">
                Operating Hours: 6:00 AM - 6:00 PM Daily
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
