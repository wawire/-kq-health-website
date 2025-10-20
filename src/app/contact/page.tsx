// pages/contact.tsx
'use client';

import BusinessHours from '@/components/Contact/BusinessHours';
import ContactDetails from '@/components/Contact/ContactDetails';
import ContactForm from '@/components/Contact/ContactForm';
import EmergencyNotice from '@/components/Contact/EmergencyNotice';
import HeroSection from '@/components/Contact/HeroSection';
import UsefulLinks from '@/components/Contact/UsefulLinks';
import Head from 'next/head';
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact KQ Medical | Get in Touch | Kenya Airways Medical Services</title>
        <meta
          name="description"
          content="Contact KQ Medical for medical clearance, travel health services, and emergency medical assistance. 24/7 support at +254 734 104 747 or Doctors.KQ@kenya-airways.com"
        />
        <link rel="canonical" href="https://health.kenya-airways.com/contact" />
      </Head>

      <main className="min-h-screen">
        <HeroSection />
        <div className="grid lg:grid-cols-2 gap-16 py-16 container mx-auto px-4 sm:px-6">
          <ContactForm />
          <BusinessHours />
        </div>
        <ContactDetails />
        <EmergencyNotice />
        <UsefulLinks />
      </main>
    </>
  );
};

export default ContactPage;
