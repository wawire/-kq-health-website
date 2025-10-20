// pages/about.tsx
'use client';

import HeroSection from '@/components/About/HeroSection';
import MissionVisionValues from '@/components/About/MissionVisionValues';
import WhoWeAre from '@/components/About/WhoWeAre';
import WhyChooseUs from '@/components/About/WhyChooseUs';
import Head from 'next/head';
import React from 'react';

import ContactCTA from '@/components/About/ContactCTA';
import OurStory from '../../components/About/OurStory';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About KQ Medical | Aviation Healthcare Excellence</title>
        <meta
          name="description"
          content="Learn about KQ Medical, Kenya Airways' specialized healthcare provider with 25+ years of experience delivering world-class medical services and aviation safety standards."
        />
        <link rel="canonical" href="https://health.kenya-airways.com/about" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About KQ Medical',
              description:
                "Learn about KQ Medical's mission, vision, values and 25+ years of healthcare excellence",
              url: 'https://health.kenya-airways.com/about',
            }),
          }}
        />
      </Head>
      <main className="min-h-screen">
        <HeroSection />
        <MissionVisionValues />
        <WhoWeAre />
        <OurStory />
        <WhyChooseUs />
        <ContactCTA />
      </main>
    </>
  );
};

export default AboutPage;
