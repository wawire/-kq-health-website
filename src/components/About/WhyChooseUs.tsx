// components/About/WhyChooseUs.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Clock, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const advantages: Advantage[] = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'ICAO Certified',
    description: 'Official aviation medical authority with international standards',
    stat: 'Level 2 & 3 Facilities',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: '24/7 Emergency',
    description: 'Round-the-clock medical response at JKIA airport',
    stat: '<8min Response',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: '25+ Years Experience',
    description: 'Proven track record in aviation healthcare excellence',
    stat: '99.8% Success Rate',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Trusted by Thousands',
    description: 'Serving passengers, crew, and corporate clients',
    stat: '150K+ Patients',
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/services/corporate.jpg"
                alt="KQ Medical healthcare excellence"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <span className="text-sm text-[var(--color-primary)] font-medium font-heading tracking-wide">
                WHY CHOOSE KQ MEDICAL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mt-2 mb-4 font-brand leading-tight">
                Aviation-Grade Healthcare
              </h2>
              <p className="text-lg text-[var(--color-foreground-muted)] font-body">
                The unique advantage of Kenya Airways operational excellence applied to
                comprehensive medical care.
              </p>
            </div>

            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--color-primary)]">{advantage.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[var(--color-foreground)] font-heading">
                        {advantage.title}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-primary)] font-brand">
                        {advantage.stat}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--color-foreground-muted)] font-body">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
