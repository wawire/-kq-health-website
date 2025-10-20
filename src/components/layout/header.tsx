'use client';

import Button from '@/components/ui/button';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Navigation from './navigation';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle portal mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle body scroll lock
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  // Mobile Menu Component (to be portaled)
  const MobileMenu = () => (
    <div
      className="fixed inset-0 lg:hidden"
      style={{ zIndex: 1040 }} // Use explicit z-index instead of Tailwind classes
      aria-modal="true"
      role="dialog"
      aria-label="Mobile navigation menu"
      onKeyDown={handleKeyDown}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        onClick={toggleMobileMenu}
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
        style={{ zIndex: 1050 }} // Ensure panel is above backdrop
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
          <div className="flex items-center">
            <Image
              src="/images/kq-health-logo.svg"
              alt="KQ Health"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </div>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-gray-500 hover:text-primary transition-all duration-300"
            aria-label="Close mobile menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className="px-6 py-8 space-y-6">
          <Navigation isMobile />

          {/* Mobile CTA */}
          <div className="pt-8 border-t border-gray-100">
            <Button
              variant="primary"
              href="/book-appointment"
              className="w-full justify-center py-3"
              aria-label="Book medical appointment"
            >
              Book Appointment
            </Button>
          </div>

          {/* Quick Contact */}
          <div className="pt-8 space-y-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-secondary font-heading uppercase tracking-wide">
              Quick Contact
            </h3>

            <a
              href="tel:+254741210065"
              className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primary transition-colors duration-300 group"
              aria-label="Call KQ Health emergency line"
            >
              <div className="p-2 bg-gray-50 rounded-md group-hover:bg-primary/5 transition-colors duration-300">
                <Phone className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium">+254741210065</span>
                <div className="text-xs text-gray-500">Emergency & General</div>
              </div>
            </a>

            <a
              href="mailto:doctors.kq@kenya-airways.com"
              className="flex items-center space-x-3 text-sm text-gray-600 hover:text-primary transition-colors duration-300 group"
              aria-label="Email KQ Health"
            >
              <div className="p-2 bg-gray-50 rounded-md group-hover:bg-primary/5 transition-colors duration-300">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <span className="font-medium">Email Us</span>
                <div className="text-xs text-gray-500">doctors.kq@kenya-airways.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-secondary text-white py-3">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <a
                href="tel:+254741210065"
                className="flex items-center space-x-2 hover:text-white/80 transition-all duration-300 group"
                aria-label="Call KQ Health"
              >
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">+254741210065</span>
              </a>

              <a
                href="mailto:doctors.kq@kenya-airways.com"
                className="flex items-center space-x-2 hover:text-white/80 transition-all duration-300 group"
                aria-label="Email KQ Health"
              >
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="font-medium">doctors.kq@kenya-airways.com</span>
              </a>

              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-xs font-medium">
                <span className="text-accent">●</span> Emergency & JKIA Clinic: 24/7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-50'
        } ${className}`}
        style={{ zIndex: 40 }} // Explicit z-index for sticky header
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 lg:h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="KQ Health Home">
              <div className="relative">
                <Image
                  src="/images/kq-health-logo.svg"
                  alt="KQ Health - Medical Excellence"
                  width={280}
                  height={100}
                  className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation + CTA */}
            <div className="hidden lg:flex items-center space-x-10">
              <Navigation />
              <Button
                variant="primary"
                href="/book-appointment"
                className="text-sm font-medium px-6 py-2.5"
                aria-label="Book medical appointment"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative inline-flex items-center justify-center p-3 rounded-lg text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </span>
                <span
                  className={`absolute inset-0 transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                  }`}
                >
                  <X className="h-6 w-6" />
                </span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Portal Mobile Menu - Rendered outside normal document flow */}
      {isMobileMenuOpen && mounted && createPortal(<MobileMenu />, document.body)}
    </>
  );
};

export default Header;
