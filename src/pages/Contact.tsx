import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldAlert, CheckSquare, Sparkles, Navigation } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';
import SEO from '../components/SEO';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name (minimum 2 letters).'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(1, 'Please choose a subject.'),
  message: z.string().min(10, 'Please write a message of at least 10 characters.')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: 'General Inquiry'
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    setLoading(true);
    console.log('Contact inquiry received:', data);
    // Simulate contact submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      reset();
      // Hide success notification after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-[#F8F5F1] text-[#1B1B1B] pt-32 min-h-screen">
      <SEO 
        title="Contact & Locations | Paris & Tokyo | L'Atelier Café" 
        description="Reach out to the concierge team at L'Atelier Café for private table bookings, media inquiries, or coffee wholesale." 
      />
      
      {/* Editorial Header */}
      <section className="max-w-4xl mx-auto px-6 text-center py-12 lg:py-16 space-y-4">
        <span className="text-[10px] tracking-[0.4em] text-[#B08A57] uppercase font-semibold block">
          Connect with the Concierge
        </span>
        <h1 className="font-serif text-4xl lg:text-6xl font-light tracking-wide text-[#1B1B1B]">
          Contact & Location
        </h1>
        <p className="text-sm font-sans text-[#1B1B1B]/70 max-w-lg mx-auto leading-relaxed">
          Questions about menu details, direct bean ordering, private group dining, or media requests? Reach out and we will respond promptly.
        </p>
        <div className="w-12 h-[1px] bg-[#B08A57] mx-auto mt-6"></div>
      </section>

      {/* Grid Layout Contact info & Form */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-3xl text-[#1B1B1B]">Atelier Coordinates</h2>
            <p className="text-xs font-sans text-[#1B1B1B]/70 leading-relaxed">
              If you are in Paris, drop by our flagship cafe at Saint-Germain-des-Prés. We are situated near historic publishing houses and galleries.
            </p>

            <div className="editorial-line"></div>

            <div className="space-y-6 text-xs font-sans text-[#1B1B1B]/80 leading-relaxed">
              
              <div className="flex gap-4">
                <MapPin className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1B1B1B] uppercase tracking-wider text-[9px] mb-1">Our Address</p>
                  <p>42 Rue de l'Odéon, 75006 Paris, France</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1B1B1B] uppercase tracking-wider text-[9px] mb-1">Concierge Line</p>
                  <p>+33 (0) 1 43 25 12 12</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1B1B1B] uppercase tracking-wider text-[9px] mb-1">Electronic Mail</p>
                  <p>info@lateliercafe.com (General)</p>
                  <p>events@lateliercafe.com (Private Bookings)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1B1B1B] uppercase tracking-wider text-[9px] mb-1">Business Hours</p>
                  <p>Monday – Friday: 7:00 AM – 8:00 PM</p>
                  <p>Saturday – Sunday: 8:00 AM – 9:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Sparkles className="w-4 h-4 text-[#B08A57] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#1B1B1B] uppercase tracking-wider text-[9px] mb-1">Parking & Valet</p>
                  <p>Valet service is operated from 9:00 AM to 6:00 PM daily. Public underground parking is available at Parking Indigo Paris Saint-Germain-des-Prés (300m away).</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F8F5F1] border border-[#5A3E2B]/10 p-8 lg:p-12 rounded-sm shadow-[0_12px_45px_rgba(90,62,43,0.02)]">
            <h2 className="font-serif text-3xl text-[#1B1B1B] mb-6">Send an Inquiry</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* Name and Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="c-name">
                    Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    placeholder="Sterling Hayden"
                    aria-required="true"
                    {...register('name')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  />
                  {errors.name && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="c-email">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    placeholder="name@domain.com"
                    aria-required="true"
                    {...register('email')}
                    className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                  />
                  {errors.email && (
                    <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Selection */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="c-subject">
                  Subject
                </label>
                <select
                  id="c-subject"
                  aria-required="true"
                  {...register('subject')}
                  className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Private Event Booking">Private Event Booking</option>
                  <option value="Coffee Wholesale & Sourcing">Coffee Wholesale & Sourcing</option>
                  <option value="Careers / Internships">Careers / Internships</option>
                  <option value="Media & Press">Media & Press</option>
                </select>
              </div>

              {/* Message field */}
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-[#1B1B1B]/70 mb-2" htmlFor="c-message">
                  Message Details
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  placeholder="Tell us what you are looking for..."
                  aria-required="true"
                  {...register('message')}
                  className="w-full bg-[#1B1B1B]/5 border border-[#5A3E2B]/10 focus:border-[#5A3E2B] text-sm text-[#1B1B1B] px-4 py-3.5 focus:ring-0 focus:outline-none rounded-sm transition-colors"
                />
                {errors.message && (
                  <p role="alert" className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    {errors.message.message}
                  </p>
                )}
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
                  'Submit Inquiry'
                )}
              </button>

              {/* Success Feedback Alert toast */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-green-50 text-green-800 border border-green-200 text-xs font-sans rounded-sm flex items-center gap-3 mt-4"
                  >
                    <CheckSquare className="w-5 h-5 text-green-600 shrink-0" />
                    <div>
                      <p className="font-semibold">Message Dispatched Successfully</p>
                      <p className="text-[10px] text-green-700/80 mt-0.5">Thank you. The Atelier concierge has received your mail. We will respond within 12 hours.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </div>

        </div>
      </section>

      {/* Full-width Map visual container */}
      <section className="h-[450px] w-full bg-[#1B1B1B] border-y border-[#5A3E2B]/10 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#b08a57_1px,transparent_1px)] [background-size:24px_24px] opacity-15"></div>
        <div className="z-10 text-center text-[#F8F5F1] space-y-4 px-6 max-w-md">
          <Navigation className="w-8 h-8 text-[#B08A57] mx-auto animate-pulse" />
          <h2 className="font-serif text-3xl font-light">Interactive Maps Integration</h2>
          <p className="text-xs font-sans text-[#F8F5F1]/70 leading-relaxed">
            Upon production deployment, this container can be bound to Google Maps SDK or Mapbox API using coordinates 48.85244° N, 2.33857° E.
          </p>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />

    </div>
  );
}
