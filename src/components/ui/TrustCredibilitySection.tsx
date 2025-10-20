'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Building2, Heart, MapPin, Plane, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ServicePillar {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  keyFeature: string;
  image: string;
  href: string;
}

const servicePillars: ServicePillar[] = [
  {
    id: 1,
    icon: <Plane className="w-5 h-5" />,
    title: 'Medical Tourism & Air Medical',
    description:
      'Emergency air ambulance, medical evacuation, and passenger medical clearance services.',
    keyFeature: '24/7 Emergency Response',
    image: '/images/services/air-medical.jpg',
    href: '/services/air-medical',
  },
  {
    id: 2,
    icon: <Building2 className="w-5 h-5" />,
    title: 'KQ Medical Clinics',
    description:
      'JKIA Level 2 aviation medical services and Pride Centre Level 3 comprehensive care.',
    keyFeature: 'Airport & City Locations',
    image: '/images/services/clinics.jpg',
    href: '/services/clinics',
  },
  {
    id: 3,
    icon: <Users className="w-5 h-5" />,
    title: 'Corporate Health Solutions',
    description: 'Thrive365 employee programs, occupational health, and OSHA compliance services.',
    keyFeature: 'Enterprise Wellness',
    image: '/images/services/corporate.jpg',
    href: '/services/corporate',
  },
  {
    id: 4,
    icon: <MapPin className="w-5 h-5" />,
    title: 'Travel Health Advisory',
    description: 'AI-powered consultations, travel vaccinations, and digital health certificates.',
    keyFeature: '#AskDrSafari AI',
    image: '/images/services/travel-health.jpg',
    href: '/services/travel-health',
  },
];

const ServiceHighlightsSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut', // Fixed: Use string instead of array
      },
    },
  };

  return (
    <section className="relative py-[var(--space-12)] sm:py-[var(--space-16)] bg-[var(--color-background-muted)]">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, var(--color-primary)/5 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, var(--color-secondary)/5 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-[var(--space-4)] sm:px-[var(--space-6)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Compact Header */}
          <motion.div variants={itemVariants} className="text-center mb-[var(--space-10)]">
            <div className="inline-flex items-center space-x-2 px-[var(--space-3)] py-1.5 bg-[var(--color-primary)]/10 rounded-[var(--radius-2xl)] mb-[var(--space-3)]">
              <Heart className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-xs font-medium text-[var(--color-primary)] font-heading tracking-wide">
                WINGS TO WELLNESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-[var(--space-3)] font-brand">
              Four Pillars of Healthcare Excellence
            </h2>
            <p className="text-base text-[var(--color-foreground-muted)] max-w-2xl mx-auto font-body">
              Aviation-grade medical services across emergency response, clinical care, corporate
              wellness, and travel health.
            </p>
          </motion.div>

          {/* Streamlined Service Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)] sm:gap-[var(--space-6)] mb-[var(--space-8)]"
          >
            {servicePillars.map((service) => (
              <motion.div
                key={service.id}
                className="group relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={service.href} className="block">
                  <div className="bg-white rounded-[var(--radius-lg)] p-[var(--space-5)] border border-[var(--color-gray-200)] transition-all duration-[var(--transition-base)] group-hover:border-[var(--color-primary)]/30 group-hover:shadow-md h-full">
                    {/* Icon & Image */}
                    <div className="relative mb-[var(--space-4)]">
                      <div className="relative w-full h-32 rounded-[var(--radius-base)] overflow-hidden mb-[var(--space-3)]">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-[var(--transition-base)] group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* <div className="flex items-center justify-between">
                        <div className="flex items-center justify-center w-8 h-8 bg-[var(--color-primary)]/10 rounded-[var(--radius-base)] group-hover:bg-[var(--color-primary)]/15 transition-colors duration-[var(--transition-base)]">
                          <span className="text-[var(--color-primary)]">{service.icon}</span>
                        </div>
                        <span className="text-xs font-medium text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2 py-1 rounded-[var(--radius-sm)] font-heading">
                          {service.keyFeature}
                        </span>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[var(--color-foreground)] mb-2 font-brand group-hover:text-[var(--color-primary)] transition-colors duration-[var(--transition-base)] leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[var(--color-foreground-muted)] mb-[var(--space-3)] font-body leading-relaxed">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center space-x-2 text-[var(--color-primary)] group-hover:text-[var(--color-primary-dark)] font-medium text-sm font-heading transition-colors duration-[var(--transition-base)]">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 transition-transform duration-[var(--transition-base)] group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Compact Digital Innovation & CTA Row */}
          {/* <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row gap-[var(--space-4)] items-center"
          > */}
          {/* Digital Innovation */}
          {/* <div className="flex-1 bg-gradient-to-r from-[var(--color-secondary)]/10 to-[var(--color-primary)]/10 rounded-[var(--radius-lg)] p-[var(--space-5)] border border-[var(--color-secondary)]/20">
              <div className="flex items-center space-x-3 mb-2">
                <Phone className="w-5 h-5 text-[var(--color-secondary)]" />
                <span className="font-bold text-[var(--color-foreground)] font-heading">
                  #AskDrSafari AI
                </span>
              </div>
              <p className="text-sm text-[var(--color-foreground-muted)] font-body mb-3">
                Virtual consultations and KQ Travel Buddy app for seamless health management.
              </p>
              <Link
                href="/services/digital-health"
                className="inline-flex items-center space-x-2 text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] font-medium text-sm font-heading transition-colors duration-[var(--transition-base)]"
              >
                <Globe2 className="w-4 h-4" />
                <span>Try Digital Tools</span>
              </Link>
            </div> */}

          {/* Main CTA */}
          {/* <div className="flex-shrink-0">
              <Link
                href="/services"
                className="inline-flex items-center space-x-3 px-[var(--space-6)] py-[var(--space-3)] bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-[var(--radius-lg)] transition-all duration-[var(--transition-base)] transform hover:scale-105 font-heading shadow-lg"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div> */}
          {/* </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlightsSection;
