import { Metadata } from 'next';
import BookingHero from '@/components/booking/BookingHero';
import BookingForm from '@/components/booking/BookingForm';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description: 'Schedule your medical appointment with KQ Health - Professional healthcare services by Kenya Airways',
  keywords: ['book appointment', 'medical appointment', 'KQ Health booking', 'Kenya Airways healthcare'],
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen">
      <BookingHero />
      <BookingForm />
    </div>
  );
}
