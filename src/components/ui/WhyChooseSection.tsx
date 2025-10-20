'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Plane, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Advantage {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
}

const advantages: Advantage[] = [
  {
    id: 1,
    icon: <Plane className="w-5 h-5" />,
    title: 'Aviation + Medical Excellence',
    description: 'Kenya Airways standards meet comprehensive healthcare',
    stat: '25+ Years',
  },
  {
    id: 2,
    icon: <Clock className="w-5 h-5" />,
    title: '24/7 Emergency at JKIA',
    description: 'Immediate response with air medical evacuation',
    stat: '<8min Response',
  },
  {
    id: 3,
    icon: <Shield className="w-5 h-5" />,
    title: 'ICAO Certified Facilities',
    description: 'Level 2 & 3 healthcare with aviation compliance',
    stat: '99.8% Success',
  },
  {
    id: 4,
    icon: <MapPin className="w-5 h-5" />,
    title: 'Strategic Airport Locations',
    description: 'JKIA clinic and Pride Centre accessibility',
    stat: '150K+ Served',
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/about/kq-health-team.jpg"
          alt="KQ Health medical team"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white font-heading">
                WHY CHOOSE KQ HEALTH
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-brand mb-4 leading-tight">
              Aviation-Grade Healthcare
            </h2>
            <p className="text-base sm:text-lg text-white/90 font-body leading-relaxed mb-8">
              The unique advantage of Kenya Airways operational excellence applied to comprehensive
              medical care.
            </p>
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 font-heading"
              >
                <span>Learn Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group flex items-center space-x-4"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <span className="text-white">{advantage.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-white font-heading text-base group-hover:text-[var(--color-accent)] transition-colors duration-200">
                        {advantage.title}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-accent)] font-brand flex-shrink-0 ml-4">
                        {advantage.stat}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 font-body">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
