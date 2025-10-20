// components/Contact/CTABanner.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Heart, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CTABanner: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 bg-[var(--color-primary)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, var(--color-primary-light)/30 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, var(--color-secondary)/20 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Header */}
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-5 h-5 text-white" />
            <span className="text-sm font-medium text-white/80 font-heading tracking-wide">
              YOUR HEALTH IS OUR PRIORITY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-brand leading-tight">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            Contact our medical team today for professional healthcare services, travel clearances,
            or emergency medical assistance. We're here to help 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+254734104747"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-white text-[var(--color-primary)] hover:bg-[var(--color-gray-50)] font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading min-w-[200px]"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
              <span className="text-sm opacity-80">24/7</span>
            </a>

            <Link
              href="/book-appointment"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading min-w-[200px]"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-bold text-white mb-1 font-heading">Emergency Hotline</div>
              <div className="text-sm text-white/80 font-body">+254 734 104 747</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white mb-1 font-heading">General Inquiries</div>
              <div className="text-sm text-white/80 font-body">+254 711 024 747</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-white mb-1 font-heading">Medical Team</div>
              <div className="text-sm text-white/80 font-body">Doctors.KQ@kenya-airways.com</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
