import { Metadata } from 'next';
import { HeartPulse, Users, Accessibility, Baby, Plane, Shield, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Medical & Special Needs Assistance',
  description: 'Personalized medical support and specialized assistance programs for passengers with special needs - KQ Health',
  keywords: ['special needs', 'medical assistance', 'wheelchair service', 'elderly care', 'disability support', 'KQ Health'],
};

export default function MedicalSpecialNeedsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-secondary-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero/medical-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <HeartPulse className="w-5 h-5" />
              <span className="text-sm font-medium">Compassionate Care</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Medical & Special Needs Assistance
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Personalized medical support and specialized assistance programs to ensure safe, comfortable travel for all passengers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Request Assistance
              </Button>
              <Button href="tel:+254741210065" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                Call 24/7: +254 741 210065
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Who We Serve
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                We provide specialized care and support for passengers with diverse medical and mobility needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Accessibility className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Mobility Challenges</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Wheelchair users</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Limited mobility passengers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Stretcher cases</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Patients with casts/braces</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Medical Conditions</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Chronic illness management</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Post-surgery recovery</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Oxygen therapy requirements</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Diabetic passengers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Special Populations</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Elderly travelers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Pregnant passengers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Unaccompanied minors (medical)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Cognitive/developmental needs</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Baby className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Infants & Children</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Premature infants</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Children with special needs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Medical equipment assistance</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Incubator transport</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Visual & Hearing</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Visually impaired travelers</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Deaf or hard of hearing</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Service animal accommodation</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Communication assistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Plane className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Medical Equipment</h3>
                <ul className="space-y-2 text-foreground-muted">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>CPAP/BiPAP machines</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Portable oxygen concentrators</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Medication refrigeration</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Mobility aids transport</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Our Special Assistance Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold font-heading mb-4">Pre-Travel Support</h3>
                <ul className="space-y-3">
                  {[
                    'Medical clearance and fitness-to-fly assessments',
                    'Special meal arrangements (dietary requirements)',
                    'Wheelchair and mobility aid reservations',
                    'Medical equipment approval and documentation',
                    'Oxygen therapy coordination',
                    'Seat assignment for comfort and accessibility',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold font-heading mb-4">At the Airport</h3>
                <ul className="space-y-3">
                  {[
                    'Meet and assist services',
                    'Priority check-in and boarding',
                    'Wheelchair assistance through terminal',
                    'Security screening support',
                    'Dedicated waiting areas',
                    'Medical staff on standby',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold font-heading mb-4">During Flight</h3>
                <ul className="space-y-3">
                  {[
                    'Medical escort when required',
                    'In-flight medical care and monitoring',
                    'Assistance with mobility and personal needs',
                    'Medication administration support',
                    'Special seating arrangements',
                    'Emergency medical response capability',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-semibold font-heading mb-4">Post-Arrival</h3>
                <ul className="space-y-3">
                  {[
                    'Deplaning assistance',
                    'Wheelchair support to arrivals',
                    'Connection flight coordination',
                    'Ground transportation assistance',
                    'Medical equipment retrieval',
                    'Onward care facility coordination',
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

      {/* How to Request */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              How to Request Assistance
            </h2>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-3">Important: Advance Notice Required</h3>
                  <p className="text-foreground-muted mb-4">
                    For the best service and to ensure all necessary arrangements are in place, please request special assistance:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>At least 48 hours before departure</strong> for wheelchair assistance and basic mobility support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>At least 7 days before departure</strong> for medical equipment, oxygen, or medical escort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>At least 14 days before departure</strong> for stretcher cases or complex medical needs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-semibold font-heading">Contact Us Early</h3>
                </div>
                <p className="text-foreground-muted ml-13">
                  Call our special assistance team at <a href="tel:+254741210065" className="text-primary font-semibold">+254 741 210065</a> or email <a href="mailto:doctors.kq@kenya-airways.com" className="text-primary font-semibold">doctors.kq@kenya-airways.com</a>
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-semibold font-heading">Provide Medical Information</h3>
                </div>
                <p className="text-foreground-muted ml-13">
                  Share details about your condition, mobility limitations, and any special requirements. Medical documentation may be required for certain services.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-semibold font-heading">Complete MEDIF Form (If Required)</h3>
                </div>
                <p className="text-foreground-muted ml-13">
                  For certain medical conditions, you may need to complete a Medical Information Form (MEDIF) signed by your doctor.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-semibold font-heading">Receive Confirmation</h3>
                </div>
                <p className="text-foreground-muted ml-13">
                  We&apos;ll confirm your assistance requirements and provide pre-travel instructions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h3 className="text-lg font-semibold font-heading">Travel with Confidence</h3>
                </div>
                <p className="text-foreground-muted ml-13">
                  Our team will be ready to provide the assistance you need throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              We&apos;re Here to Help
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our dedicated special assistance team is available 24/7 to ensure your safe and comfortable travel experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Request Assistance
              </Button>
              <Button href="tel:+254741210065" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                <Phone className="w-5 h-5 mr-2" />
                Call +254 741 210065
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Email: <a href="mailto:doctors.kq@kenya-airways.com" className="underline">doctors.kq@kenya-airways.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
