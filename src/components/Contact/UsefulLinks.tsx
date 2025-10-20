// components/Contact/UsefulLinks.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Globe, Plane } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface LinkCategory {
  title: string;
  icon: React.ReactNode;
  links: {
    name: string;
    description: string;
    href: string;
    external?: boolean;
    download?: boolean;
  }[];
}

const linkCategories: LinkCategory[] = [
  {
    title: 'Medical Forms & Documents',
    icon: <FileText className="w-5 h-5" />,
    links: [
      {
        name: 'MEDIF Form (Medical Information)',
        description: 'Required for medical clearance to fly - submit 24 hours before travel',
        href: '/forms/medif-form.pdf',
        download: true,
      },
      {
        name: 'US Service Animal Transportation Form',
        description: 'Required for flights to/from United States with service animals',
        href: '/forms/us-dot-service-animal-form.pdf',
        download: true,
      },
      {
        name: 'Travel Health Certificate Template',
        description: 'Template for medical certificates and health documentation',
        href: '/forms/travel-health-certificate.pdf',
        download: true,
      },
    ],
  },
  {
    title: 'Travel Resources',
    icon: <Plane className="w-5 h-5" />,
    links: [
      {
        name: 'Travel Health Requirements',
        description: 'Country-specific health requirements and travel advisories',
        href: '/resources/travel-requirements',
      },
      {
        name: 'Travel Insurance Information',
        description: 'Recommended travel insurance providers and coverage options',
        href: '/resources/travel-insurance',
      },
      {
        name: 'Vaccination Schedule',
        description: 'Required and recommended vaccinations by destination',
        href: '/resources/vaccinations',
      },
      {
        name: 'Medical Device Guidelines',
        description: 'IATA guidelines for traveling with medical equipment',
        href: '/resources/medical-devices',
      },
    ],
  },
  {
    title: 'External Resources',
    icon: <Globe className="w-5 h-5" />,
    links: [
      {
        name: 'Kenya Airways Main Website',
        description: 'Flight bookings, schedules, and airline services',
        href: 'https://www.kenya-airways.com',
        external: true,
      },
      {
        name: 'US DOT Aviation Consumer Protection',
        description: 'Rights and protections for air travelers with disabilities',
        href: 'https://www.transportation.gov/airconsumer',
        external: true,
      },
      {
        name: 'WHO Travel Health Guidelines',
        description: 'International health regulations and travel advice',
        href: 'https://www.who.int/ith/en/',
        external: true,
      },
      {
        name: 'Kenya Ministry of Health',
        description: 'Local health regulations and medical facility standards',
        href: 'https://www.health.go.ke',
        external: true,
      },
    ],
  },
];

const UsefulLinks: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm text-[var(--color-secondary)] font-medium font-heading tracking-wide">
            HELPFUL RESOURCES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mt-2 mb-4 font-brand">
            Useful Links & Resources
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-foreground-muted)] max-w-2xl mx-auto font-body leading-relaxed">
            Access important forms and helpful resources for your medical travel needs.
          </p>
        </motion.div>

        {/* Changed grid to 3 columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {linkCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="bg-[var(--color-background-muted)] rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--color-primary)]">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-foreground)] font-heading">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="group block p-4 bg-white rounded-lg border border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors duration-200 font-heading text-sm">
                            {link.name}
                          </h4>
                          {link.download && (
                            <Download className="w-4 h-4 text-[var(--color-secondary)]" />
                          )}
                          {link.external && (
                            <ExternalLink className="w-4 h-4 text-[var(--color-secondary)]" />
                          )}
                        </div>
                        <p className="text-sm text-[var(--color-foreground-muted)] font-body leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulLinks;
