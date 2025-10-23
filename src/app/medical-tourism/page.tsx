import { Metadata } from 'next';
import { Building2, Plane, HeartPulse, Users, Shield, Ambulance, Globe, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Medical Tourism & Air Medical Services',
  description: 'Professional medical tourism coordination and air ambulance services with KQ Health - Safe medical travel across Africa and beyond',
  keywords: ['medical tourism', 'air ambulance', 'medical evacuation', 'medical travel', 'KQ Health', 'Kenya Airways'],
};

export default function MedicalTourismPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-primary to-primary-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero/medical-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">World-Class Medical Travel</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Medical Tourism & Air Medical Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Seamless coordination of medical travel, expert care facilitation, and professional air ambulance services across Africa and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Request Consultation
              </Button>
              <Button href="tel:+254741210065" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                24/7 Emergency: +254 741 210065
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Comprehensive Medical Travel Solutions
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                From planning to execution, we ensure safe and comfortable medical travel experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Medical Tourism */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">Medical Tourism</h3>
                <p className="text-foreground-muted mb-6">
                  Complete coordination of medical travel for treatments and procedures at world-class facilities.
                </p>
                <ul className="space-y-3">
                  {[
                    'Treatment facility selection and booking',
                    'Specialist doctor coordination',
                    'Flight arrangements and medical escort',
                    'Accommodation and ground transport',
                    'Pre and post-treatment support',
                    'Medical records translation',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Air Medical Services */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                  <Ambulance className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">Air Ambulance Services</h3>
                <p className="text-foreground-muted mb-6">
                  Professional medical evacuation and repatriation services with qualified medical teams.
                </p>
                <ul className="space-y-3">
                  {[
                    'Emergency medical evacuation',
                    'Scheduled medical repatriation',
                    'Qualified medical escort on commercial flights',
                    'Fully equipped air ambulance aircraft',
                    'Bed-to-bed service',
                    '24/7 emergency response',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Why Choose KQ Health for Medical Travel?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Kenya Airways Network</h3>
                <p className="text-sm text-foreground-muted">
                  Access to extensive flight network across Africa and beyond
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Medical Expertise</h3>
                <p className="text-sm text-foreground-muted">
                  Qualified medical professionals and certified air ambulance staff
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Safety First</h3>
                <p className="text-sm text-foreground-muted">
                  Highest safety standards and fully equipped medical aircraft
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold font-heading mb-2">24/7 Support</h3>
                <p className="text-sm text-foreground-muted">
                  Round-the-clock assistance and emergency response capability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Procedures */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Medical Tourism Services
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-xl font-semibold font-heading mb-6">Popular Treatment Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Cardiac Surgery & Procedures',
                  'Orthopedic Surgery',
                  'Cancer Treatment & Oncology',
                  'Organ Transplants',
                  'Neurosurgery',
                  'Cosmetic & Plastic Surgery',
                  'Dental Procedures',
                  'Eye Surgery (LASIK, Cataract)',
                  'Fertility Treatments',
                  'Bariatric Surgery',
                  'Joint Replacement',
                  'Diagnostic Imaging & Tests',
                ].map((procedure, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-foreground">{procedure}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="text-sm text-blue-900">
                <strong>Note:</strong> We work with accredited medical facilities across Africa, India, Turkey, UAE, and Europe. All partner hospitals maintain international quality standards and certifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              How It Works
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Contact us with your medical needs and treatment requirements. We\'ll review your case and medical records.',
                },
                {
                  step: '2',
                  title: 'Treatment Planning',
                  description: 'We identify suitable facilities, coordinate with specialists, and provide detailed treatment plans and cost estimates.',
                },
                {
                  step: '3',
                  title: 'Travel Arrangements',
                  description: 'We handle all logistics including flights, medical visas, accommodation, and ground transportation.',
                },
                {
                  step: '4',
                  title: 'Medical Care',
                  description: 'You receive treatment at the selected facility with our continuous support and coordination.',
                },
                {
                  step: '5',
                  title: 'Post-Treatment Support',
                  description: 'Follow-up care coordination, medical records management, and ongoing support after your return.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6 bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-heading mb-2">{item.title}</h3>
                    <p className="text-foreground-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Medical Travel Assistance?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact our medical tourism team for personalized consultation and comprehensive travel coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Request Consultation
              </Button>
              <Button href="mailto:doctors.kq@kenya-airways.com" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                Email Us
              </Button>
            </div>

            <div className="mt-8 p-4 bg-red-500/20 border border-red-300/30 rounded-lg">
              <p className="text-sm font-semibold flex items-center justify-center gap-2">
                <Ambulance className="w-5 h-5" />
                Emergency Air Ambulance: +254 741 210065 (24/7)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
