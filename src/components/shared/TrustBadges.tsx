'use client';

import { Shield, Award, CheckCircle, Globe } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: 'WHO Approved',
      subtitle: 'Yellow Fever Center',
    },
    {
      icon: Award,
      title: 'ISO Certified',
      subtitle: 'Quality Standards',
    },
    {
      icon: CheckCircle,
      title: '15+ Years',
      subtitle: 'Excellence in Service',
    },
    {
      icon: Globe,
      title: '40+ Countries',
      subtitle: 'Global Coverage',
    },
  ];

  return (
    <section className="py-12 border-y border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
            {badges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{badge.title}</div>
                  <div className="text-xs text-foreground-muted">{badge.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
