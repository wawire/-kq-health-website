// components/About/WhoWeAre.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Heart, Shield } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--color-primary)]/10 rounded-full mb-6">
              <Heart className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-primary)] font-heading">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-6 font-brand leading-tight">
              Specialized Healthcare Under Kenya Airways
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[var(--color-foreground-muted)] font-body leading-relaxed">
              <p>
                KQ Medical is a specialized healthcare provider under{' '}
                <strong className="text-[var(--color-foreground)]">Kenya Airways</strong>, dedicated
                to delivering world-class medical and wellness services across the aviation industry
                and beyond.
              </p>

              <p>
                Our mission is to combine aviation safety standards with trusted healthcare
                expertise to ensure the wellbeing of patients, staff, and partners. We serve as the
                medical backbone supporting Kenya Airways&apos; operations while extending our
                services to the broader community.
              </p>

              <p>
                From aviation medical assessments and emergency response to comprehensive wellness
                programs, we maintain the same commitment to excellence that defines Kenya
                Airways&apos; reputation worldwide.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[var(--color-gray-200)]">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] font-brand">25+</div>
                <div className="text-sm text-[var(--color-foreground-muted)] font-body">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] font-brand">
                  150K+
                </div>
                <div className="text-sm text-[var(--color-foreground-muted)] font-body">
                  Patients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--color-primary)] font-brand">
                  24/7
                </div>
                <div className="text-sm text-[var(--color-foreground-muted)] font-body">
                  Emergency Care
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/services/clinics.jpg"
                alt="KQ Medical modern healthcare facility"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-[var(--color-gray-200)]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[var(--color-success)]/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[var(--color-success)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-foreground)] font-heading">
                    ICAO Certified
                  </div>
                  <div className="text-xs text-[var(--color-foreground-muted)] font-body">
                    Aviation Medical
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-[var(--color-gray-200)]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[var(--color-foreground)] font-heading">
                    Level 2 & 3
                  </div>
                  <div className="text-xs text-[var(--color-foreground-muted)] font-body">
                    Healthcare Facilities
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
