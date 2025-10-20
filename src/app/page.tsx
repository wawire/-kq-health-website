import HeroSlider from '@/components/ui/HeroSlider';
import TrustCredibilitySection from '@/components/ui/TrustCredibilitySection';
import ContactLocationsSection from '../components/ui/ContactLocationsSection';
import PatientSuccessSection from '../components/ui/PatientSuccessSection';
import WhyChooseSection from '../components/ui/WhyChooseSection';

const KQHealthHomepage = () => {
  return (
    <main className="font-body">
      <HeroSlider />
      <TrustCredibilitySection />
      <WhyChooseSection />
      <PatientSuccessSection />
      <ContactLocationsSection />
    </main>
  );
};

export default KQHealthHomepage;
