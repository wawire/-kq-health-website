// components/About/ContactCTA.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-primary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-brand">
            Ready to Experience World-Class Healthcare?
          </h2>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            Join thousands of patients who trust KQ Medical for their healthcare needs. Contact us
            today or book your appointment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>

            <Link
              href="/book-appointment"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="font-body">+254 734 104 747</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="font-body">Doctors.KQ@kenya-airways.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
