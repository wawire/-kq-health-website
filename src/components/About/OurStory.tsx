// components/About/OurStory.tsx
'use client';

import { motion } from 'framer-motion';
import { Building, Heart, Plane, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface StoryStep {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const storySteps: StoryStep[] = [
  {
    year: '1999',
    title: 'Aviation Beginnings',
    description:
      'Founded under Kenya Airways to support employee wellness and aviation medical needs',
    icon: <Plane className="w-6 h-6" />,
    color: 'var(--color-primary)',
  },
  {
    year: '2005',
    title: 'Medical Excellence',
    description: 'Achieved ICAO certification, becoming trusted aviation medical authority',
    icon: <Heart className="w-6 h-6" />,
    color: 'var(--color-secondary)',
  },
  {
    year: '2012',
    title: 'Community Expansion',
    description: 'Extended beyond aviation with Pride Centre Level 3 comprehensive healthcare',
    icon: <Building className="w-6 h-6" />,
    color: 'var(--color-accent)',
  },
  {
    year: 'Today',
    title: 'Trusted Healthcare Partner',
    description: 'Serving aviation industry and broader community with integrity and excellence',
    icon: <Users className="w-6 h-6" />,
    color: 'var(--color-success)',
  },
];

const OurStory: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/kq-medical-journey-bg.jpg"
          alt="KQ Medical journey background"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-[var(--color-primary)] font-medium font-heading tracking-wide">
            OUR JOURNEY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mt-2 mb-6 font-brand">
            Our Story
          </h2>
          <p className="text-lg text-[var(--color-foreground-muted)] max-w-2xl mx-auto font-body leading-relaxed">
            From aviation medical assessments to comprehensive wellness care, we serve with
            professionalism and integrity.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Steps */}
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line - Goes through center of icons */}
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] via-[var(--color-accent)] to-[var(--color-success)] hidden md:block z-0"></div>

            {storySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Icon Circle - Positioned to intersect with line */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 bg-white border-4 group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10"
                  style={{ borderColor: step.color }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div
                    className="text-sm font-bold font-heading tracking-wide"
                    style={{ color: step.color }}
                  >
                    {step.year}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] font-heading leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-foreground-muted)] font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Timeline Connector */}
                {index < storySteps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-8 mb-8">
                    <div className="w-0.5 h-12" style={{ backgroundColor: step.color }}></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        ></motion.div>
      </div>
    </section>
  );
};

export default OurStory;
