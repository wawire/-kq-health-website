'use client';
import { Clock, Facebook, Instagram, Linkedin, MapPin, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const currentYear = new Date().getFullYear();

  const usefulSites = [
    { label: 'Kenya Airways Official Website', href: 'https://www.kenya-airways.com/en' },
    { label: 'Jambo Jet', href: 'https://www.jambojet.com/en-us' },
    { label: 'KQ Pride Centre', href: '/pride-centre' },
    { label: 'KQ Cargo', href: 'https://cargo.kenya-airways.com' },
    { label: 'KQ Corporate', href: 'https://corporate.kenya-airways.com' },
    { label: 'Fahari Aviation', href: 'https://fahariaviation.com/en' },
  ];

  const usefulLinks = [
    { label: 'General Medicine', href: '/services/general-medicine' },
    { label: 'Aviation Medicine', href: '/services/aviation-medicine' },
    { label: 'Health Checkups', href: '/services/health-checkups' },
    { label: 'Emergency Care', href: '/services/emergency-care' },
    { label: 'Specialist Consultations', href: '/services/specialists' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Medical Disclaimer', href: '/legal/medical-disclaimer' },
    { label: 'Accessibility', href: '/legal/accessibility' },
  ];

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/kqmedical/',
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      label: 'X',
      href: 'https://x.com/kqmedical',
      icon: <X className="h-4 w-4" />,
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/officialkqhealth/',
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/kq-health/',
      icon: <Linkedin className="h-4 w-4" />,
    },
  ];

  return (
    <footer className={`bg-slate-900 text-white relative ${className}`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center">
              <Image
                src="/images/kq-health-logo-white.svg"
                alt="KQ Health - Medical Excellence"
                width={160}
                height={64}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              At the forefront of healthcare innovation, we design and deliver advanced medical
              services that redefine what&apos;s possible in patient care, wellness, and medical
              excellence.
            </p>
          </div>

          {/* Column 2: Useful Sites */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide relative pb-2">
              KQ Group Brands
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-600"></div>
            </h3>
            <ul className="space-y-2">
              {usefulSites.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block leading-relaxed"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide relative pb-2">
              Useful Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-600"></div>
            </h3>
            <ul className="space-y-2">
              {usefulLinks.map(service => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm block leading-relaxed"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide relative pb-2">
              Contact Us
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-600"></div>
            </h3>

            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <div className="flex items-start space-x-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div className="leading-relaxed">
                    <div className="text-gray-300 font-medium mb-1">Address:</div>
                    <div>Kenya Airways Head Office</div>
                    <div>Airport North Road, Embakasi</div>
                    <div>P.O Box: 19002 - 00501</div>
                    <div>Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5: Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide relative pb-2">
              Hours
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-red-600"></div>
            </h3>

            <div className="text-gray-400 text-sm">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="leading-relaxed">
                  <div className="text-gray-300 font-medium mb-1">Clinic Hours:</div>
                  <div className="mb-1">Pride Clinic: 6:00 AM - 6:00 PM</div>
                  <div className="mb-2">JKIA Clinic: 24 Hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright with Logo */}
            <div className="flex items-center space-x-3">
              {/* Enhanced logo visibility without size changes */}
              {/* <div className="relative">
          <Image
            src="/images/kq-white-logo.svg"
            alt="KQ Logo"
            width={32}
            height={32}
            className="h-8 w-8 brightness-125 contrast-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] transition-all duration-300"
            priority
          />

          <div className="absolute inset-0 bg-white/10 rounded-full blur-md -z-10 scale-150"></div>
        </div> */}
              <div className="text-xs sm:text-sm text-gray-400">
                © {currentYear} Kenya Airways PLC Group. All rights reserved.
              </div>
            </div>

            {/* Links and Social - unchanged */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6">
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {legalLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-1">
                <span className="text-xs sm:text-sm text-gray-400 mr-2">Follow Us:</span>
                <div className="flex space-x-2">
                  {socialLinks.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-gray-800 hover:bg-red-600 transition-colors duration-200 rounded"
                      aria-label={`Follow us on ${social.label}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
