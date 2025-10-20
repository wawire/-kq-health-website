// components/About/MissionVisionValues.tsx
'use client';

import { motion } from 'framer-motion';
import { Award, Eye, Heart, Shield, Target, Users } from 'lucide-react';
import React from 'react';

interface ValueItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety',
    description:
      'Ensuring the highest standards in healthcare and aviation medicine with rigorous protocols and continuous monitoring.',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Compassion',
    description:
      'Treating every patient with respect, dignity, and understanding, providing care that goes beyond medical treatment.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence',
    description:
      'Striving for continuous improvement and innovation in healthcare delivery, maintaining world-class standards.',
  },
];

const MissionVisionValues: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[var(--color-background-muted)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[var(--color-secondary)]/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-[var(--color-secondary)]" />
            <span className="text-sm font-medium text-[var(--color-secondary)] font-heading">
              OUR FOUNDATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] font-brand">
            Mission, Vision & Values
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-[var(--color-gray-200)]"
            style={{
              boxShadow: 'var(--shadow-base)',
            }}
          >
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4 font-heading">
              Our Mission
            </h3>
            <p className="text-[var(--color-foreground-muted)] font-body leading-relaxed">
              To provide high-quality, reliable medical care that prioritizes safety, accessibility,
              and patient-centered outcomes. We deliver healthcare services that meet international
              aviation standards while remaining compassionate and accessible to all.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-[var(--color-gray-200)]"
            style={{
              boxShadow: 'var(--shadow-base)',
            }}
          >
            <div className="w-12 h-12 bg-[var(--color-secondary)]/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4 font-heading">
              Our Vision
            </h3>
            <p className="text-[var(--color-foreground-muted)] font-body leading-relaxed">
              To be the leading provider of aviation-aligned healthcare services in Africa,
              recognized for innovation and excellence. We aspire to set the gold standard for
              medical care that bridges aviation safety with comprehensive wellness.
            </p>
          </motion.div>

          {/* Values Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-primary)]/5 rounded-2xl p-8 border border-[var(--color-accent)]/20"
          >
            <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold text-[var(--color-foreground)] mb-4 font-heading">
              Our Values
            </h3>
            <p className="text-[var(--color-foreground-muted)] font-body leading-relaxed mb-4">
              Three core principles guide everything we do:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                <span className="text-sm font-medium text-[var(--color-foreground)] font-heading">
                  Safety First
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                <span className="text-sm font-medium text-[var(--color-foreground)] font-heading">
                  Compassionate Care
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full"></div>
                <span className="text-sm font-medium text-[var(--color-foreground)] font-heading">
                  Continuous Excellence
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Detail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-[var(--color-primary)]">{value.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--color-foreground)] mb-3 font-heading">
                  {value.title}
                </h4>
                <p className="text-[var(--color-foreground-muted)] font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
