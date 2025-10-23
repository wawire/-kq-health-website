import { Metadata } from 'next';
import { Plane, Shield, Syringe, FileText, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Travel Health Advisory',
  description: 'Expert travel health consultations, vaccinations, and medical advice for international travelers with KQ Health',
  keywords: ['travel health', 'travel vaccinations', 'pre-travel consultation', 'yellow fever', 'travel medicine', 'KQ Health'],
};

export default function TravelHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero/medical-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Plane className="w-5 h-5" />
              <span className="text-sm font-medium">Professional Travel Medicine</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Travel Health Advisory Services
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive pre-travel medical consultations, vaccinations, and health advice to keep you safe wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Book Consultation
              </Button>
              <Button href="/contact" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Contact Us
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
                Our Travel Health Services
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Expert medical guidance for safe and healthy international travel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Pre-Travel Consultation</h3>
                <p className="text-foreground-muted">
                  Comprehensive health assessment and personalized travel advice based on your destination, medical history, and itinerary.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Syringe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Travel Vaccinations</h3>
                <p className="text-foreground-muted">
                  Yellow fever, typhoid, hepatitis, rabies, and all required vaccinations with WHO-approved certificates.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Malaria Prevention</h3>
                <p className="text-foreground-muted">
                  Expert advice on malaria prophylaxis, mosquito protection, and destination-specific preventive measures.
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Country-Specific Advice</h3>
                <p className="text-foreground-muted">
                  Up-to-date health information for your destination including disease outbreaks and entry requirements.
                </p>
              </div>

              {/* Service Card 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Travel Health Kit</h3>
                <p className="text-foreground-muted">
                  Personalized medical kit recommendations including essential medications and first aid supplies.
                </p>
              </div>

              {/* Service Card 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Post-Travel Care</h3>
                <p className="text-foreground-muted">
                  Follow-up consultations and treatment for any health concerns after returning from your travels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccinations Offered */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Vaccinations We Offer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Yellow Fever (with WHO certificate)',
                'Typhoid',
                'Hepatitis A & B',
                'Rabies',
                'Meningococcal Meningitis',
                'Japanese Encephalitis',
                'Cholera',
                'Polio (booster)',
                'MMR (Measles, Mumps, Rubella)',
                'Tetanus/Diphtheria',
                'COVID-19',
                'Influenza',
              ].map((vaccine, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{vaccine}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Visit */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              When Should You Visit?
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Timing is Important
              </h3>
              <p className="text-foreground-muted mb-4">
                We recommend scheduling your travel health consultation <strong>4-6 weeks before your departure</strong> to allow time for:
              </p>
              <ul className="space-y-2 text-foreground-muted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Multi-dose vaccine series to be completed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Vaccines to take effect (usually 2-4 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Procurement of prescription medications if needed</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-sm text-yellow-900">
                <strong>Last-Minute Travel?</strong> Even if you&apos;re traveling within a few days, we can still provide valuable advice and some vaccinations. Contact us immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready for Safe Travels?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Book your travel health consultation today and travel with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Book Appointment
              </Button>
              <Button href="tel:+254741210065" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Call +254 741 210065
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
