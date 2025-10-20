'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface SuccessStory {
  id: number;
  category: string;
  title: string;
  quote: string;
  patientName: string;
  patientTitle: string;
  image: string;
  href: string;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    category: 'Emergency Response',
    title: 'Life-Saving Air Evacuation',
    quote:
      "KQ Health's emergency team saved my life with their swift response and professional care during my medical evacuation from Mombasa.",
    patientName: 'Sarah Mitchell',
    patientTitle: 'International Business Executive',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
    href: '/stories/emergency-response',
  },
  {
    id: 2,
    category: 'Travel Health',
    title: 'Seamless Travel Clearance',
    quote:
      'Professional service for my MEDIF clearance. Made international travel possible despite my medical condition.',
    patientName: 'Dr. James Ochieng',
    patientTitle: 'Medical Researcher',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center',
    href: '/stories/travel-health',
  },
  {
    id: 3,
    category: 'Corporate Health',
    title: 'Thrive365 Success',
    quote:
      "Our team's health and productivity improved significantly with KQ Health's corporate wellness program.",
    patientName: 'Maria Santos',
    patientTitle: 'HR Director',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&h=600&fit=crop&crop=center',
    href: '/stories/corporate-health',
  },
  {
    id: 4,
    category: 'Medical Tourism',
    title: 'International Treatment',
    quote:
      'Excellent coordination for my medical treatment abroad. Every detail was handled professionally.',
    patientName: 'Ahmed Al-Rashid',
    patientTitle: 'Business Owner',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
    href: '/stories/medical-tourism',
  },
  {
    id: 5,
    category: 'Family Care',
    title: 'Pediatric Specialist Care',
    quote:
      'Exceptional care for our daughter. The pediatric team at Pride Centre exceeded our expectations.',
    patientName: 'Jennifer & Mark Thompson',
    patientTitle: 'Parents',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=center',
    href: '/stories/family-care',
  },
];

const PatientSuccessSection: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut', // Fixed: Use string instead of array
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="mb-6">
              <div className="w-8 h-1 bg-red-500 rounded-full mb-3" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-brand text-gray-900">
                Wings to Heal Success Stories
              </h2>
            </div>
          </motion.div>

          {/* Stories Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Featured Large Card - LEFT SIDE (takes up almost half) */}
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] lg:col-span-2 h-[400px]"
            >
              <a href={successStories[0].href} className="block h-full">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={successStories[0].image}
                    alt={`${successStories[0].patientName} - ${successStories[0].category}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Category Badge with red line on top */}
                <div className="absolute top-4 left-4">
                  <div className="w-6 h-0.5 bg-red-500 rounded-full mb-2" />
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium font-heading">
                    {successStories[0].category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-2 font-heading leading-tight">
                    {successStories[0].title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-white group-hover:text-red-400 transition-colors duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>

            {/* Smaller Cards - RIGHT SIDE 2x2 Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {successStories.slice(1, 5).map((story, index) => (
                <motion.div
                  key={story.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] h-[190px]"
                >
                  <a href={story.href} className="block h-full">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={story.image}
                        alt={`${story.patientName} - ${story.category}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Category Badge with red line on top */}
                    <div className="absolute top-3 left-3">
                      <div className="w-5 h-0.5 bg-red-500 rounded-full mb-2" />
                      <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium font-heading">
                        {story.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-sm font-bold text-white mb-1 font-heading leading-tight line-clamp-2">
                        {story.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div></div>
                        <div className="flex items-center text-white group-hover:text-red-400 transition-colors duration-300">
                          <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          {/* <motion.div variants={itemVariants} className="text-center mt-8">
            <a
              href="/stories"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              style={{
                boxShadow: '0 4px 14px 0 rgba(220, 38, 38, 0.39)',
              }}
            >
              <span>View All Success Stories</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default PatientSuccessSection;
