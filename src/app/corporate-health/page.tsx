import { Metadata } from 'next';
import { Users, Briefcase, Activity, Shield, Heart, TrendingUp, FileText, CheckCircle2, Calendar } from 'lucide-react';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Corporate Health Solutions',
  description: 'Comprehensive workplace health programs and employee wellness solutions with KQ Health - Invest in your workforce health',
  keywords: ['corporate health', 'employee wellness', 'occupational health', 'workplace health', 'KQ Health', 'Kenya Airways'],
};

export default function CorporateHealthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-primary py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/images/hero/medical-pattern.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">Employee Health & Wellness</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Corporate Health Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Comprehensive workplace health programs designed to improve employee wellness, productivity, and organizational performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Get Started
              </Button>
              <Button href="/contact" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                Request Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
                Why Invest in Employee Health?
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Healthy employees are productive employees. Our corporate health programs deliver measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Increased Productivity</h3>
                <p className="text-sm text-foreground-muted">
                  Up to 25% improvement in workplace productivity
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Reduced Absenteeism</h3>
                <p className="text-sm text-foreground-muted">
                  Significant decrease in sick days and medical leave
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Employee Satisfaction</h3>
                <p className="text-sm text-foreground-muted">
                  Higher morale and retention rates
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md text-center border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold font-heading mb-2">Lower Healthcare Costs</h3>
                <p className="text-sm text-foreground-muted">
                  Preventive care reduces long-term medical expenses
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Our Corporate Health Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Executive Health Assessments</h3>
                <p className="text-foreground-muted mb-4">
                  Comprehensive health screenings for senior management and key employees.
                </p>
                <ul className="space-y-2">
                  {[
                    'Full medical examination',
                    'Advanced diagnostic tests',
                    'Cardiac health screening',
                    'Cancer screening panels',
                    'Personalized health reports',
                    'Lifestyle counseling',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Employee Health Screening</h3>
                <p className="text-foreground-muted mb-4">
                  Regular health checks and wellness assessments for all staff levels.
                </p>
                <ul className="space-y-2">
                  {[
                    'Annual medical check-ups',
                    'BMI and vital signs monitoring',
                    'Blood tests and urinalysis',
                    'Vision and hearing tests',
                    'Occupational health assessments',
                    'Health risk evaluations',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Occupational Health Services</h3>
                <p className="text-foreground-muted mb-4">
                  Workplace safety and occupational health compliance programs.
                </p>
                <ul className="space-y-2">
                  {[
                    'Pre-employment medicals',
                    'Fitness-for-duty assessments',
                    'Workplace hazard evaluations',
                    'Ergonomic assessments',
                    'Injury management',
                    'Return-to-work programs',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Wellness Programs</h3>
                <p className="text-foreground-muted mb-4">
                  Proactive health promotion and disease prevention initiatives.
                </p>
                <ul className="space-y-2">
                  {[
                    'Health education workshops',
                    'Chronic disease management',
                    'Mental health support',
                    'Nutrition counseling',
                    'Fitness programs',
                    'Stress management sessions',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">On-Site Medical Services</h3>
                <p className="text-foreground-muted mb-4">
                  Dedicated medical support at your workplace for immediate care.
                </p>
                <ul className="space-y-2">
                  {[
                    'On-site clinic setup',
                    'Resident medical officer',
                    'First aid training',
                    'Emergency response planning',
                    'Vaccination campaigns',
                    'Health surveillance',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-heading mb-3">Health Analytics & Reporting</h3>
                <p className="text-foreground-muted mb-4">
                  Data-driven insights on workforce health trends and outcomes.
                </p>
                <ul className="space-y-2">
                  {[
                    'Health metrics tracking',
                    'Absenteeism analysis',
                    'Program effectiveness reports',
                    'Cost-benefit analysis',
                    'Compliance documentation',
                    'Trend identification',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                Tailored Solutions for Your Organization
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Every organization is unique. We design customized corporate health programs that align with your company culture, industry requirements, and budget.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">Flexible Plans</h3>
                  <p className="text-sm text-white/80">Scalable programs for companies of all sizes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">Industry-Specific</h3>
                  <p className="text-sm text-white/80">Solutions tailored to your sector&apos;s needs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="font-semibold mb-2">Measurable ROI</h3>
                  <p className="text-sm text-white/80">Track program success with detailed analytics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
              Getting Started is Easy
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Initial Consultation',
                  description: 'Meet with our team to discuss your organization\'s health goals and requirements.',
                },
                {
                  step: '2',
                  title: 'Needs Assessment',
                  description: 'We analyze your workforce demographics, health risks, and organizational objectives.',
                },
                {
                  step: '3',
                  title: 'Custom Program Design',
                  description: 'Receive a tailored health program proposal with services, timeline, and pricing.',
                },
                {
                  step: '4',
                  title: 'Implementation',
                  description: 'We launch your program with minimal disruption to daily operations.',
                },
                {
                  step: '5',
                  title: 'Ongoing Management',
                  description: 'Continuous support, monitoring, and program optimization based on results.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-heading mb-1">{item.title}</h3>
                    <p className="text-foreground-muted text-sm">{item.description}</p>
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
              Invest in Your Workforce Health
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Partner with KQ Health to create a healthier, more productive workplace. Contact us for a customized proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-appointment" size="lg" variant="accent">
                Request Consultation
              </Button>
              <Button href="mailto:doctors.kq@kenya-airways.com" size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                Email: doctors.kq@kenya-airways.com
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Call us at <a href="tel:+254741210065" className="underline font-semibold">+254 741 210065</a> to speak with our corporate health team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
