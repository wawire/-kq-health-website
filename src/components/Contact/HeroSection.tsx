// components/Contact/HeroSection.tsx
'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact/kq-medical-contact-hero.jpg"
          alt="KQ Medical contact and support"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-brand leading-tight">
              Get in Touch with KQ Medical
            </h1>
            <p className="text-lg text-white/90 mb-8 font-body leading-relaxed">
              We&apos;re here to help with your medical travel needs, health clearances, and
              emergency services. Reach out to our professional medical team today.
            </p>

            {/* Quick Contact Options */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254734104747"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/254705474747"
                className="inline-flex items-center space-x-3 px-6 py-3 bg-[var(--color-success)] hover:bg-[var(--color-success)]/90 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-xs text-white/60 font-body italic">
        Insert Image Here: [KQ Medical team ready to assist patients with professional healthcare
        support]
      </div>
    </section>
  );
};

export default HeroSection;
