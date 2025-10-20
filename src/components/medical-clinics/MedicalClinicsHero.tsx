import { Award, Heart, Shield } from 'lucide-react';
import React from 'react';

/**
 * Kenya Airways Medical Clinics Hero Section - Services Page
 *
 * @component
 */

const MedicalClinicsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-white text-sm font-medium mb-6 border border-white/30 font-heading">
            <Heart size={16} className="mr-2 text-green-300" />
            Kenya's Premier Medical Facilities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-heading">
            Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-brand">
              Medical Care
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed font-body max-w-2xl">
            Where aviation expertise meets healthcare innovation. Experience world-class medical
            services at our state-of-the-art facilities across Kenya.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-body">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-green-300" />
              <span className="font-medium">WHO Accredited Facilities</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} className="text-yellow-300" />
              <span className="font-medium">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-green-300" />
              <span className="font-medium">24/7 Emergency Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalClinicsHero;
