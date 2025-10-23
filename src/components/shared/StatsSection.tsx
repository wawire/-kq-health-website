'use client';

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StatItem {
  number: string;
  label: string;
  icon: ReactNode;
  suffix?: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  title?: string;
  subtitle?: string;
  darkMode?: boolean;
}

export default function StatsSection({ stats, title, subtitle, darkMode = false }: StatsSectionProps) {
  return (
    <section className={`py-16 md:py-20 ${darkMode ? 'bg-gradient-to-br from-primary to-primary-dark text-white' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {(title || subtitle) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className={`text-3xl md:text-4xl font-bold font-heading mb-4 ${darkMode ? 'text-white' : 'text-foreground'}`}>
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-lg ${darkMode ? 'text-white/80' : 'text-foreground-muted'}`}>
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <div className={`${darkMode ? 'text-white' : 'text-primary'}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-4xl md:text-5xl font-bold font-heading mb-2 ${darkMode ? 'text-white' : 'text-primary'}`}>
                  {stat.number}{stat.suffix}
                </div>
                <div className={`text-sm md:text-base ${darkMode ? 'text-white/80' : 'text-foreground-muted'}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
