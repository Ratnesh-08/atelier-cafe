export interface FAQItem {
  question: string;
  answer: string;
  category: 'Reservations' | 'Dining' | 'Private Events' | 'Coffee & Sourcing';
}

export const FAQs: FAQItem[] = [
  {
    category: 'Reservations',
    question: 'Do you accept walk-ins or are reservations required?',
    answer: 'We reserve 30% of our indoor and outdoor seating for walk-in guests on a first-come, first-served basis. However, during weekend brunch hours (9 AM – 2 PM), wait times can exceed one hour. We highly recommend booking a reservation through our online portal to guarantee your table.'
  },
  {
    category: 'Reservations',
    question: 'What is your cancellation policy for reserved tables?',
    answer: 'Reservations can be canceled or rescheduled free of charge up to 12 hours before your booking time. For special experiences (like the Siphon Tasting Counter) or parties larger than six, cancellations made less than 12 hours in advance may incur a small holding fee.'
  },
  {
    category: 'Dining',
    question: 'Is there a dress code at L\'Atelier?',
    answer: 'We do not enforce a strict formal dress code, but we ask our guests to dress in smart casual or elegant attire. We find that our guests appreciate dressing up slightly to match the refined, tranquil atmosphere of the space.'
  },
  {
    category: 'Dining',
    question: 'How do you accommodate dietary restrictions and allergies?',
    answer: 'Our menu features clear labels for Vegan, Vegetarian, Dairy-Free, and Gluten-Free selections. Please inform your server of any severe allergies before ordering; our culinary team takes extreme precautions to avoid cross-contamination in the kitchen.'
  },
  {
    category: 'Coffee & Sourcing',
    question: 'Can I purchase your single-origin beans to brew at home?',
    answer: 'Yes. We package our seasonal single-origin roasts in sealed, light-proof bags with degas valves. Each bag includes details about the farm, elevation, process method, and roasting date. Speak with your barista or visit our retail counter to see what is currently in season.'
  },
  {
    category: 'Private Events',
    question: 'Do you host private events, workshops, or photoshoots?',
    answer: 'L\'Atelier is available for private events, brand launches, and editorial photoshoots on select evenings after closing. We also host monthly coffee masterclasses and tea appreciation workshops. Please visit our Private Events page or contact events@lateliercafe.com for details.'
  }
];
