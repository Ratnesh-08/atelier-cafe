import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

const reservationSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(8, 'Please enter a valid phone number.'),
  guests: z.string().min(1, 'Please select the number of guests.'),
  date: z.string().min(1, 'Please select a booking date.'),
  time: z.string().min(1, 'Please select a booking time.'),
  seating: z.enum(['Indoor Lounge', 'Garden Terrace', 'Chef\'s Siphon Counter'] as const),
  requests: z.string().optional()
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

export default function Reservations() {
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<ReservationFormValues | null>(null);
  const [refId, setRefId] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      seating: 'Indoor Lounge'
    }
  });

  const onSubmit = (data: ReservationFormValues) => {
    setLoading(true);
    // Simulate booking process
    setTimeout(() => {
      setLoading(false);
      setSuccessData(data);
      // Generate luxury booking reference ID
      const randomId = 'LAT-' + Math.floor(1000 + Math.random() * 9000) + '-' + String.fromCharCode(65 + Math.floor(Math.random() * 26));
      setRefId(randomId);
    }, 1500);
  };

  const handleCloseModal = () => {
    setSuccessData(null);
    reset();
  };

  const timeSlots = [
    '08:00 AM', '09:30 AM', '11:00 AM', '12:30 PM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '08:00 PM'
  ];

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Table Reservations | Private Dining | L'Atelier Café" 
        description="Book your table in advance for morning slow coffee, afternoon tea, and evening culinary tastings at L'Atelier." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          A Seat Prepared for You
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          Make a Reservation
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Book your table in advance. For special culinary events or private gatherings exceeding eight guests, please contact our concierge team directly.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Main Reservation Layout */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Details & Map */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-28">
            
            {/* Opening Hours */}
            <div className="space-y-4 p-8 border border-[#5A3E2B]/10 rounded-sm bg-[#F8F5F1]">
              <h3 className="font-serif text-2xl text-[#5A3E2B]">Hours & Locations</h3>
              <div className="editorial-line my-3"></div>
              
              <div className="space-y-4 text-xs font-sans text-[#1B1B1B]/80 leading-relaxed">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B08A57] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1B1B1B] uppercase tracking-wider text-[10px] mb-1">Hours of Operation</p>
                    <p>Monday – Friday: 7:00 AM – 8:00 PM</p>
                    <p>Saturday – Sunday: 8:00 AM – 9:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08A57] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1B1B1B] uppercase tracking-wider text-[10px] mb-1">Our Location</p>
                    <p>42 Rue de l'Odéon, 75006 Paris, France</p>
                    <p className="text-[10px] text-[#B08A57] mt-1">Valet parking is available at the entrance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#B08A57] shrink-0" />
                  <div>
                    <p className="font-semibold text-[#1B1B1B] uppercase tracking-wider text-[10px] mb-1">Private Gatherings</p>
                    <p>For bookings of 8+ guests or corporate buyouts, please email events@lateliercafe.com.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Minimal Map Placeholder */}
            <div className="relative aspect-[16/10] bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 rounded-sm overflow-hidden flex items-center justify-center p-6 text-center">
              <div className="space-y-2 z-10">
                <MapPin className="w-8 h-8 text-[#B08A57] mx-auto" />
                <h3 className="font-serif text-lg text-[#1B1B1B]">Atelier Neighborhood Map</h3>
                <p className="text-[10px] text-[#1B1B1B]/70 max-w-xs mx-auto leading-relaxed">
                  Located near the historic Jardin du Luxembourg. Convenient metro stops at Odéon (Lines 4 & 10).
                </p>
              </div>
              {/* Subtle background graphic line grid representing a map */}
              <div className="absolute inset-0 bg-[radial-gradient(#5a3e2b_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
            </div>

          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7 bg-[#F8F5F1] border border-[#5A3E2B]/10 p-8 lg:p-12 rounded-sm shadow-[0_12px_45px_rgba(90,62,43,0.02)]">
            <h3 className="font-serif text-3xl text-[#1B1B1B] mb-6">Reservation Details</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name field */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Sterling Hayden"
                  aria-required="true"
                  {...register('name')}
                  className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                />
                {errors.name && (
                  <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email and Phone group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. name@domain.com"
                    aria-required="true"
                    {...register('email')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. +33 6 12 34 56"
                    aria-required="true"
                    {...register('phone')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  />
                  {errors.phone && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Guests and Date group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="guests">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    aria-required="true"
                    {...register('guests')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  >
                    <option value="">Select Guests</option>
                    <option value="1 Guest">1 Guest</option>
                    <option value="2 Guests">2 Guests</option>
                    <option value="3 Guests">3 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="5 Guests">5 Guests</option>
                    <option value="6 Guests">6 Guests</option>
                    <option value="7 Guests">7 Guests</option>
                    <option value="8 Guests">8 Guests (Large Party)</option>
                  </select>
                  {errors.guests && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.guests.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="date">
                    Reservation Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    aria-required="true"
                    {...register('date')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  />
                  {errors.date && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.date.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Time Slots Selection */}
              <fieldset>
                <legend className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-3">
                  Preferred Time Slot
                </legend>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <label 
                      key={slot}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={slot}
                        aria-label={`Time slot ${slot}`}
                        {...register('time')}
                        className="peer sr-only"
                      />
                      <div className="border border-[#5A3E2B]/15 peer-checked:border-[#5A3E2B] peer-checked:bg-[#5A3E2B] peer-checked:text-[#F8F5F1] text-[#1B1B1B]/80 text-[10px] font-semibold tracking-wider text-center py-2.5 rounded-sm hover:border-[#5A3E2B]/50 transition-colors">
                        {slot}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.time && (
                  <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.time.message}
                  </p>
                )}
              </fieldset>

              {/* Seating preference radio boxes */}
              <fieldset>
                <legend className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-3">
                  Seating Experience
                </legend>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Indoor Lounge', desc: 'Warm oak wood & library calm' },
                    { name: 'Garden Terrace', desc: 'Fresh air & courtyard light' },
                    { name: 'Chef\'s Siphon Counter', desc: 'Roasting view & direct pairing' }
                  ].map((seatingOption) => (
                    <label 
                      key={seatingOption.name}
                      className="cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={seatingOption.name}
                        aria-label={seatingOption.name}
                        {...register('seating')}
                        className="peer sr-only"
                      />
                      <div className="p-4 border border-[#5A3E2B]/15 peer-checked:border-[#5A3E2B] peer-checked:bg-[#5A3E2B]/5 rounded-sm flex flex-col justify-center h-full hover:border-[#5A3E2B]/40 transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#1B1B1B]">{seatingOption.name}</span>
                        <span className="text-[9px] text-[#1B1B1B]/70 mt-1 leading-snug">{seatingOption.desc}</span>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.seating && (
                  <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.seating.message}
                  </p>
                )}
              </fieldset>

              {/* Special Requests */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="requests">
                  Special Requests or Dietary Requirements
                </label>
                <textarea
                  id="requests"
                  rows={3}
                  placeholder="e.g. Nut allergies, wheelchair access requested, anniversary celebration."
                  {...register('requests')}
                  className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#5A3E2B] hover:bg-[#B08A57] text-[#F8F5F1] py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  'Confirm Reservation'
                )}
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Confirmation Success Modal */}
      <AnimatePresence>
        {successData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1B1B1B]/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F8F5F1] text-[#1B1B1B] p-8 lg:p-12 rounded-sm max-w-md w-full shadow-2xl border border-[#5A3E2B]/10 text-center space-y-6"
            >
              <div className="w-12 h-12 bg-[#B08A57]/10 rounded-full flex items-center justify-center mx-auto text-[#B08A57]">
                <CheckCircle className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-[9px] tracking-widest text-[#B08A57] uppercase font-bold">
                  Reservation Dispatched
                </span>
                <h3 className="font-serif text-3xl text-[#1B1B1B]">Table Confirmed</h3>
              </div>

              <div className="editorial-line"></div>

              {/* Receipt details */}
              <div className="text-left space-y-3 bg-[#1B1B1B]/5 p-5 rounded-xs text-xs font-sans text-[#1B1B1B]/80">
                <p className="flex justify-between">
                  <span className="text-[#1B1B1B]/60 uppercase text-[9px] tracking-wider font-semibold">Reference ID:</span>
                  <span className="font-mono font-bold text-[#5A3E2B]">{refId}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#1B1B1B]/60 uppercase text-[9px] tracking-wider font-semibold">Guest:</span>
                  <span className="font-medium">{successData.name}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#1B1B1B]/60 uppercase text-[9px] tracking-wider font-semibold">Party Size:</span>
                  <span className="font-medium">{successData.guests}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#1B1B1B]/60 uppercase text-[9px] tracking-wider font-semibold">Date & Time:</span>
                  <span className="font-medium">{successData.date} at {successData.time}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-[#1B1B1B]/60 uppercase text-[9px] tracking-wider font-semibold">Seating:</span>
                  <span className="font-medium">{successData.seating}</span>
                </p>
              </div>

              <p className="text-[11px] text-[#1B1B1B]/60 leading-relaxed max-w-xs mx-auto">
                A calendar invitation and SMS confirmation link have been dispatched. We look forward to hosting you at the Atelier.
              </p>

              <button
                onClick={handleCloseModal}
                className="w-full bg-[#5A3E2B] hover:bg-[#B08A57] text-[#F8F5F1] py-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 rounded-sm"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
