// components/Contact/EmergencyNotice.tsx
'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Phone } from 'lucide-react';
import React from 'react';

const EmergencyNotice: React.FC = () => {
  return (
    <section className="py-12 bg-[var(--color-error)]/5 border-y border-[var(--color-error)]/20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-[var(--color-error)]" />
            <h3 className="text-xl font-bold text-[var(--color-error)] font-heading">
              Emergency Medical Situations
            </h3>
          </div>

          <div className="bg-white rounded-xl p-6 border-l-4 border-[var(--color-error)]">
            <p className="text-[var(--color-foreground)] font-body leading-relaxed mb-4">
              <strong>
                For life-threatening emergencies, call 999 immediately or contact your local
                emergency services.
              </strong>
            </p>
            <p className="text-[var(--color-foreground-muted)] font-body text-sm leading-relaxed mb-6">
              KQ Medical provides medical travel assistance and healthcare services, but we are not
              a substitute for emergency medical services. For urgent medical situations requiring
              immediate attention, always contact local emergency services first.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:999"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--color-error)] hover:bg-[var(--color-error)]/90 text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Emergency: 999</span>
              </a>

              <a
                href="tel:+254734104747"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-lg transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>KQ Medical: +254 734 104 747</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyNotice;
