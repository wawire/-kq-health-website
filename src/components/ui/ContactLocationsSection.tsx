'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle,
  Calendar,
  Clock,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Location {
  id: number;
  name: string;
  type: string;
  address: string;
  hours: string;
  services: string[];
  image: string;
  emergency: boolean;
}

interface ContactMethod {
  id: number;
  icon: React.ReactNode;
  type: string;
  value: string;
  description: string;
  href: string;
  primary?: boolean;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'JKIA Medical Clinic',
    type: 'Level 2 Healthcare Facility',
    address: 'Jomo Kenyatta International Airport, Terminal 1A',
    hours: '24/7 Emergency Services',
    services: [
      'Emergency Medical Care',
      'Aviation Medical Examinations',
      'Travel Health Clearance',
      'Air Medical Evacuation',
    ],
    image: '/images/locations/jkia-clinic.jpg',
    emergency: true,
  },
  {
    id: 2,
    name: 'Pride Centre Clinic',
    type: 'Level 3 Healthcare Facility',
    address: 'Mombasa Road, Nairobi',
    hours: '6:00 AM - 6:00 PM Daily',
    services: [
      'General Outpatient Care',
      'Specialist Consultations',
      'Corporate Health Services',
      'Wellness Programs',
    ],
    image: '/images/locations/pride-centre.jpg',
    emergency: false,
  },
];

const contactMethods: ContactMethod[] = [
  {
    id: 1,
    icon: <Phone className="w-5 h-5" />,
    type: 'Emergency Hotline',
    value: '+254 734 104 747',
    description: '24/7 Emergency medical response',
    href: 'tel:+254734104747',
    primary: true,
  },
  {
    id: 2,
    icon: <Phone className="w-5 h-5" />,
    type: 'Mobile',
    value: '+254 711 024 747',
    description: 'General inquiries and appointments',
    href: 'tel:+254711024747',
  },
  {
    id: 3,
    icon: <MessageCircle className="w-5 h-5" />,
    type: 'WhatsApp',
    value: '+254 705 474 747',
    description: 'Quick consultation and booking',
    href: 'https://wa.me/+254741210065',
  },
  {
    id: 4,
    icon: <Mail className="w-5 h-5" />,
    type: 'Email',
    value: 'Doctors.KQ@kenya-airways.com',
    description: 'Medical team direct contact',
    href: 'mailto:Doctors.KQ@kenya-airways.com',
  },
];

const ContactLocationsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 bg-[var(--color-background-muted)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-[var(--radius-2xl)] mb-4">
              <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-sm font-medium text-[var(--color-primary)] font-heading tracking-wide">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-4 font-brand leading-tight">
              Contact & Locations
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-foreground-muted)] max-w-2xl mx-auto font-body leading-relaxed">
              Reach our medical team or visit our facilities for comprehensive healthcare services.
            </p>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-[var(--color-primary)]/10 border-l-4 border-[var(--color-primary)] rounded-r-lg p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2 font-heading">
                    Important Booking Information
                  </h3>
                  <p className="text-[var(--color-foreground-muted)] text-sm sm:text-base font-body leading-relaxed mb-3">
                    Advance booking reservation is required up to 48 hours before departure for all
                    travel-related medical services.
                  </p>
                  <div className="flex items-center space-x-2 text-sm text-[var(--color-primary)] font-medium">
                    <Calendar className="w-4 h-4" />
                    <span>Book 48 hours in advance</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
          >
            {contactMethods.map((contact) => (
              <motion.div key={contact.id} variants={itemVariants} className="group">
                <Link
                  href={contact.href}
                  className={`block p-6 rounded-xl border transition-all duration-200 hover:shadow-md ${
                    contact.primary
                      ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]'
                      : 'bg-white text-[var(--color-foreground)] border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/30'
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                      contact.primary ? 'bg-white/20' : 'bg-[var(--color-primary)]/10'
                    }`}
                  >
                    <span
                      className={contact.primary ? 'text-white' : 'text-[var(--color-primary)]'}
                    >
                      {contact.icon}
                    </span>
                  </div>
                  <div
                    className={`text-sm font-medium mb-1 ${
                      contact.primary ? 'text-white/80' : 'text-[var(--color-foreground-muted)]'
                    } font-heading`}
                  >
                    {contact.type}
                  </div>
                  <div
                    className={`font-bold text-base mb-2 ${
                      contact.primary ? 'text-white' : 'text-[var(--color-foreground)]'
                    } font-heading`}
                  >
                    {contact.value}
                  </div>
                  <div
                    className={`text-sm ${
                      contact.primary ? 'text-white/80' : 'text-[var(--color-foreground-muted)]'
                    } font-body`}
                  >
                    {contact.description}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Locations */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="bg-white rounded-xl overflow-hidden border border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/30 transition-colors duration-200"
                style={{
                  boxShadow: 'var(--shadow-base)',
                }}
              >
                {/* Location Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  {location.emergency && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 bg-[var(--color-primary)] text-white text-sm font-medium rounded-full font-heading">
                        24/7 Emergency
                      </span>
                    </div>
                  )}
                </div>

                {/* Location Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-foreground)] font-heading leading-tight">
                        {location.name}
                      </h3>
                      <div className="text-sm text-[var(--color-secondary)] font-medium font-heading">
                        {location.type}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--color-foreground-muted)] font-body">
                        {location.address}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <span
                        className={`text-sm font-medium font-body ${
                          location.emergency
                            ? 'text-[var(--color-primary)]'
                            : 'text-[var(--color-foreground-muted)]'
                        }`}
                      >
                        {location.hours}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[var(--color-gray-200)]">
                    <h4 className="text-sm font-medium text-[var(--color-foreground)] mb-2 font-heading">
                      Key Services:
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {location.services.slice(0, 4).map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full flex-shrink-0" />
                          <span className="text-sm text-[var(--color-foreground-muted)] font-body">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Special Requirements Notice */}
          <motion.div variants={itemVariants}>
            <div className="bg-[var(--color-secondary)]/5 border border-[var(--color-secondary)]/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-foreground)] mb-2 font-heading">
                    Special Requirements for U.S. Flights
                  </h3>
                  <p className="text-[var(--color-foreground-muted)] text-sm sm:text-base font-body leading-relaxed mb-4">
                    For flights to and from the U.S., you must provide a completed U.S. Department
                    of Transportation Service Animal Air Transportation Form.
                  </p>
                  <Link
                    href="/forms/us-service-animal"
                    className="inline-flex items-center space-x-2 text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] font-medium text-sm font-heading transition-colors duration-200"
                  >
                    <Plane className="w-4 h-4" />
                    <span>Download Form</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactLocationsSection;
