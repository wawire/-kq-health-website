import { Metadata } from 'next';
import { Plane, Shield, Syringe, FileText, MapPin, Clock, CheckCircle2, AlertCircle, Users, Globe, Heart, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/button';
import StatsSection from '@/components/shared/StatsSection';
import Testimonials from '@/components/shared/Testimonials';
import ImageCard from '@/components/shared/ImageCard';
import TrustBadges from '@/components/shared/TrustBadges';

export const metadata: Metadata = {
  title: 'Travel Health Advisory',
  description: 'Expert travel health consultations, vaccinations, and medical advice for international travelers with KQ Health',
  keywords: ['travel health', 'travel vaccinations', 'pre-travel consultation', 'yellow fever', 'travel medicine', 'KQ Health'],
};

export default function TravelHealthPage() {
  const stats = [
    { number: '50,000', suffix: '+', label: 'Travelers Vaccinated', icon: <Users className="w-8 h-8" /> },
    { number: '40', suffix: '+', label: 'Countries Covered', icon: <Globe className="w-8 h-8" /> },
    { number: '98', suffix: '%', label: 'Satisfaction Rate', icon: <Heart className="w-8 h-8" /> },
    { number: '24/7', label: 'Emergency Support', icon: <Clock className="w-8 h-8" /> },
  ];

  const testimonials = [
    {
      quote: 'The travel health consultation was thorough and professional. Got all my vaccinations done in one visit. Highly recommend!',
      author: 'Sarah Mwangi',
      role: 'Frequent Business Traveler',
      rating: 5,
    },
    {
      quote: 'Excellent service! The team provided detailed advice for my trip to West Africa. Yellow fever certificate was ready immediately.',
      author: 'John Kamau',
      role: 'NGO Worker',
      rating: 5,
    },
    {
      quote: 'Very knowledgeable staff. They helped me understand all the health risks and prepared me well for my backpacking trip across Asia.',
      author: 'Mary Ochieng',
      role: 'Adventure Traveler',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Image */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-secondary/85 z-10" />
          {/* Placeholder for actual travel/medical image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Plane className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Travel Medicine</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6">
              Travel Health Advisory Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Comprehensive pre-travel medical consultations, vaccinations, and health advice to keep you safe wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/book-appointment" size="xl" variant="accent">
                Book Consultation Now
              </Button>
              <Button href="tel:+254741210065" size="xl" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                Call +254 741 210065
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold">50,000+</div>
                <div className="text-sm text-white/80">Travelers Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold">12+</div>
                <div className="text-sm text-white/80">Vaccine Types</div>
              </div>
              <div>
                <div className="text-3xl font-bold">WHO</div>
                <div className="text-sm text-white/80">Certified Center</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Statistics Section */}
      <StatsSection
        stats={stats}
        title="Trusted by Thousands of Travelers"
        subtitle="Our commitment to excellence in travel health"
        darkMode={true}
      />

      {/* Enhanced Services with Images */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Comprehensive Travel Health Services
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Everything you need for safe and healthy international travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ImageCard
                title="Pre-Travel Consultation"
                description="Comprehensive health assessment and personalized travel advice based on your destination, medical history, and itinerary."
                icon={<FileText className="w-8 h-8" />}
                image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                buttonText="Learn More"
                buttonHref="/book-appointment"
                delay={0}
              />
              <ImageCard
                title="Travel Vaccinations"
                description="Yellow fever, typhoid, hepatitis, rabies, and all required vaccinations with WHO-approved certificates issued on-site."
                icon={<Syringe className="w-8 h-8" />}
                image="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?q=80&w=2074"
                buttonText="View Vaccines"
                buttonHref="/book-appointment"
                delay={0.1}
              />
              <ImageCard
                title="Malaria Prevention"
                description="Expert advice on malaria prophylaxis, mosquito protection, and destination-specific preventive measures."
                icon={<Shield className="w-8 h-8" />}
                image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079"
                buttonText="Get Advice"
                buttonHref="/book-appointment"
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Image + Text Layout */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080"
                    alt="Medical Consultation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="text-white text-sm font-semibold">WHO-Certified Yellow Fever Center</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Why Choose KQ Health for Travel Medicine?
                </h2>
                <p className="text-lg text-foreground-muted mb-6">
                  As Kenya Airways&apos; official health division, we understand the unique needs of international travelers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'WHO-approved Yellow Fever vaccination center',
                    'Experienced travel medicine specialists',
                    'Same-day certificate issuance',
                    'Comprehensive destination-specific advice',
                    'All vaccines available in stock',
                    'Convenient location at JKIA and Nairobi',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/book-appointment" size="lg" variant="primary">
                  Schedule Your Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccinations Grid with Visual Appeal */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              Vaccinations We Offer
            </h2>
            <p className="text-center text-foreground-muted mb-12">
              Complete range of travel vaccines with WHO-certified documentation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Yellow Fever', certified: true, popular: true },
                { name: 'Typhoid', popular: true },
                { name: 'Hepatitis A & B', popular: true },
                { name: 'Rabies' },
                { name: 'Meningococcal Meningitis' },
                { name: 'Japanese Encephalitis' },
                { name: 'Cholera' },
                { name: 'Polio (booster)' },
                { name: 'MMR (Measles, Mumps, Rubella)' },
                { name: 'Tetanus/Diphtheria' },
                { name: 'COVID-19' },
                { name: 'Influenza' },
              ].map((vaccine, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                    vaccine.popular
                      ? 'bg-primary/5 border-primary/30 hover:border-primary'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${vaccine.popular ? 'text-primary' : 'text-green-600'}`} />
                  <div className="flex-1">
                    <span className={`font-medium ${vaccine.popular ? 'text-primary' : 'text-foreground'}`}>
                      {vaccine.name}
                    </span>
                    {vaccine.certified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                        WHO Cert
                      </span>
                    )}
                    {vaccine.popular && !vaccine.certified && (
                      <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline - When to Visit */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-4">
              Plan Your Visit Timeline
            </h2>
            <p className="text-center text-foreground-muted mb-12">
              Timing is crucial for effective travel health preparation
            </p>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

              <div className="space-y-8">
                {[
                  {
                    weeks: '6-8 weeks',
                    title: 'Ideal Planning Window',
                    description: 'Perfect timing for multi-dose vaccine series and complete preparation',
                    color: 'bg-green-500',
                  },
                  {
                    weeks: '4-6 weeks',
                    title: 'Recommended Minimum',
                    description: 'Allows vaccines to take effect and time for prescription medications',
                    color: 'bg-blue-500',
                  },
                  {
                    weeks: '2-4 weeks',
                    title: 'Still Beneficial',
                    description: 'Single-dose vaccines and essential health advice still valuable',
                    color: 'bg-yellow-500',
                  },
                  {
                    weeks: 'Last Minute',
                    title: 'Limited Options',
                    description: 'Basic vaccines and emergency consultation still available',
                    color: 'bg-orange-500',
                  },
                ].map((phase, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    {/* Timeline Dot */}
                    <div className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg z-10`}>
                      {index + 1}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="text-sm font-semibold text-primary">{phase.weeks} Before Travel</span>
                      </div>
                      <h3 className="text-xl font-bold font-heading mb-2">{phase.title}</h3>
                      <p className="text-foreground-muted">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-md border-2 border-primary/20">
              <AlertCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Last-Minute Travel?</h3>
              <p className="text-foreground-muted mb-4">
                Even if you&apos;re traveling within a few days, we can still provide valuable advice and some vaccinations.
              </p>
              <Button href="tel:+254741210065" variant="primary" size="lg">
                Call Now: +254 741 210065
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={testimonials}
        title="What Our Travelers Say"
        subtitle="Real experiences from satisfied patients"
      />

      {/* Final CTA with Image Background */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90 z-10" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Plane className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Ready for Safe Travels?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your travel health consultation today and travel with confidence knowing you&apos;re fully protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="xl" variant="accent">
                Book Your Appointment
              </Button>
              <Button href="/contact" size="xl" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm">
                Contact Our Team
              </Button>
            </div>
            <p className="mt-8 text-white/70">
              Emergency consultations available 24/7 | Call +254 741 210065
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
