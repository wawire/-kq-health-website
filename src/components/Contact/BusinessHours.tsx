// components/Contact/BusinessHours.tsx
'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, MapPin } from 'lucide-react';
import React from 'react';

interface BusinessHour {
  location: string;
  type: string;
  address: string;
  hours: string;
  services: string[];
  emergency: boolean;
  phone?: string;
}

const businessHours: BusinessHour[] = [
  {
    location: 'JKIA Medical Clinic',
    type: 'Level 2 Healthcare Facility',
    address: 'Terminal 1A, JKIA',
    hours: '24/7 Emergency Services',
    services: [
      'Emergency Medical Care',
      'Aviation Medical Exams',
      'Travel Health Clearance',
      'Medical Evacuations',
    ],
    emergency: true,
    phone: '+254 734 104 747',
  },
  {
    location: 'Pride Centre Clinic',
    type: 'Level 3 Healthcare Facility',
    address: 'Mombasa Road, Nairobi',
    hours: '6:00 AM - 6:00 PM Daily',
    services: [
      'General Outpatient Care',
      'Specialist Consultations',
      'Corporate Health Services',
      'Wellness Programs',
    ],
    emergency: false,
    phone: '+254 711 024 747',
  },
];

const BusinessHours: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="bg-white rounded-2xl p-8 border border-[var(--color-gray-200)]"
        style={{ boxShadow: 'var(--shadow-base)' }}
      >
        <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-6 font-heading">
          Business Hours & Locations
        </h3>

        <div className="space-y-6">
          {businessHours.map((location, index) => (
            <div
              key={index}
              className="border-b border-[var(--color-gray-200)] last:border-b-0 pb-6 last:pb-0"
            >
              {/* Location Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-bold text-[var(--color-foreground)] font-heading mb-1">
                    {location.location}
                  </h4>
                  <div className="text-sm text-[var(--color-secondary)] font-medium font-heading mb-2">
                    {location.type}
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-[var(--color-foreground-muted)] mb-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="font-body">{location.address}</span>
                  </div>
                </div>

                {location.emergency && (
                  <div className="flex-shrink-0 bg-[var(--color-primary)]/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-[var(--color-primary)] font-heading">
                      24/7
                    </span>
                  </div>
                )}
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-[var(--color-primary)]/10 rounded-lg">
                  <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                </div>
                <div>
                  <div
                    className={`font-bold ${
                      location.emergency
                        ? 'text-[var(--color-primary)]'
                        : 'text-[var(--color-foreground)]'
                    } font-heading`}
                  >
                    {location.hours}
                  </div>
                  {location.phone && (
                    <div className="text-sm text-[var(--color-foreground-muted)] font-body">
                      {location.phone}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-6 pt-6 border-t border-[var(--color-gray-200)]">
          <div className="bg-[var(--color-secondary)]/5 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-bold text-[var(--color-foreground)] mb-2 font-heading text-sm">
                  Important Notes:
                </h5>
                <div className="space-y-1 text-sm text-[var(--color-foreground-muted)] font-body">
                  <p>• Medical clearance requires 48-hour advance booking</p>
                  <p>• MEDIF forms must be submitted at least 24 hours before travel</p>
                  <p>• Fast-track assessment available at JKIA within one working day</p>
                  <p>• All medical equipment requires pre-approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessHours;
