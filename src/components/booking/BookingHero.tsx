'use client';

import { Calendar, Clock, MapPin } from 'lucide-react';

export default function BookingHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary py-16 md:py-20">
      <div className="absolute inset-0 bg-[url('/images/hero/medical-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Book Your Appointment
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule your visit with KQ Health professionals. Choose your preferred date, time, and service.
          </p>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Calendar className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-semibold">Flexible Scheduling</p>
              <p className="text-sm text-white/80">Choose your preferred date</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-semibold">Quick Response</p>
              <p className="text-sm text-white/80">Confirmation within 24hrs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <MapPin className="w-8 h-8 mb-2 mx-auto" />
              <p className="font-semibold">Multiple Locations</p>
              <p className="text-sm text-white/80">Nairobi & JKIA clinics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
