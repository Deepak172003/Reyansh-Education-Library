import { asset } from "../utils/asset";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Membership", to: "/membership" },
  { label: "Facilities", to: "/facilities" },
  { label: "Gallery", to: "/gallery" },
  { label: "Timings", to: "/#hours" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export const facilities = [
  {
    name: "Study Cabins",
    icon: "table",
    description: "Separate, partitioned study cabins — each with its own charging point.",
  },
  {
    name: "Air-Conditioned Space",
    icon: "ac",
    description: "The whole reading room stays fully air-conditioned through the day.",
  },
  {
    name: "High-Speed Wi-Fi",
    icon: "wifi",
    description: "Free, reliable broadband for research, mock tests and online classes.",
  },
  {
    name: "Computer Facility",
    icon: "computer",
    description: "Shared terminals for typing, form filling and quick research.",
  },
  {
    name: "Group Discussion Room",
    icon: "discussion",
    description: "A separate room for group study and discussion, away from the silent zone.",
  },
  {
    name: "Lunch Area",
    icon: "lunch",
    description: "A dedicated space to eat, so meals never disturb the reading room.",
  },
  {
    name: "Newspapers & Magazines",
    icon: "news",
    description: "Daily Hindi and English papers, plus current-affairs magazines.",
  },
  {
    name: "Drinking Water",
    icon: "drop",
    description: "RO-filtered drinking water available at all times.",
  },
  {
    name: "Spacious Parking",
    icon: "parking",
    description: "Covered and outdoor two-wheeler parking right at the building.",
  },
  {
    name: "CCTV Security",
    icon: "shield",
    description: "The reading rooms are monitored for everyone's safety and peace of mind.",
  },
];

export type MembershipPlan = {
  name: string;
  time: string;
  hours: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Morning Shift",
    time: "7:00 AM – 2:00 PM",
    hours: "7 hrs / day",
    price: "₹500",
    period: "per month",
    features: [
      "Continuous AC study hall access",
      "Charging point at your own cabin",
      "Great for early-morning focus",
    ],
  },
  {
    name: "Evening Shift",
    time: "2:00 PM – 10:00 PM",
    hours: "8 hrs / day",
    price: "₹600",
    period: "per month",
    features: [
      "Continuous AC study hall access",
      "Ideal alongside college or a job",
      "Same reserved cabin every day",
    ],
    popular: true,
  },
  {
    name: "Full Day",
    time: "7:00 AM – 10:00 PM",
    hours: "15 hrs / day",
    price: "₹900",
    period: "per month",
    features: [
      "Full opening-hours access, both shifts",
      "Best value for full-time aspirants",
      "Priority on group discussion room",
    ],
  },
];

export const membershipBenefits = [
  { label: "A reserved study cabin with its own charging point", icon: "seat" },
  { label: "Choose a morning, evening, or full-day shift", icon: "bookmark" },
  { label: "Free Wi-Fi and access to the discussion room", icon: "plug" },
  { label: "Member rates on printing and photocopying", icon: "printer" },
];

export const howToJoin = [
  { step: 1, title: "Fill the form", description: "Complete the membership form online or at the front desk." },
  { step: 2, title: "Verify your ID", description: "Bring one government ID and a passport-size photograph." },
  { step: 3, title: "Choose a shift", description: "Pick morning, evening, or full-day, and pay at the desk." },
  { step: 4, title: "Take your seat", description: "Collect your membership card and take your seat the same day." },
];

export const galleryImages = [
  { src: asset("/gallery/exterior-signboard-wide.webp"), caption: "Entrance signboard, 2nd floor" },
  { src: asset("/gallery/reading-room-1.webp"), caption: "Reading room with AC seating" },
  { src: asset("/gallery/reception-desk.webp"), caption: "Reception desk" },
  { src: asset("/gallery/reading-room-2.webp"), caption: "Reading room, wood-floor section" },
  { src: asset("/gallery/entrance-door.webp"), caption: "Entrance — silence, please" },
  { src: asset("/gallery/study-carrels.webp"), caption: "Individual study carrels" },
  { src: asset("/gallery/reading-room-3.webp"), caption: "Reading room, bright section" },
  { src: asset("/gallery/waiting-area.webp"), caption: "Waiting area" },
  { src: asset("/gallery/computer-desks.webp"), caption: "Computer terminals" },
  { src: asset("/gallery/covered-parking .webp"), caption: "Covered parking corridor" },
  { src: asset("/gallery/outdoor-parking.webp"), caption: "Outdoor two-wheeler parking" },
  { src: asset("/gallery/reading-room-4.webp"), caption: "Reading room, main hall" },
];

export const testimonials = [
  {
    name: "Ankit Kumar",
    role: "SSC CGL Aspirant",
    quote:
      "I've been studying here for over a year. The silence is real — nobody talks, phones stay on silent, and my cabin is exactly where I left it every morning.",
    rating: 5,
  },
  {
    name: "Priya Sinha",
    role: "NEET Aspirant",
    quote:
      "Coming from a hostel with no proper study space, this library changed my whole routine. AC, clean water, and a proper cabin for my books — everything is sorted.",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    role: "Banking Exam Aspirant",
    quote:
      "I take the evening shift after college and it's exactly as quiet and disciplined as the morning batch. Having a fixed shift keeps my whole routine consistent.",
    rating: 5,
  },
  {
    name: "Sneha Kumari",
    role: "UPSC Aspirant",
    quote:
      "The staff know every member by name and keep the same cabin set aside for me. It sounds small, but it makes a real difference during long preparation cycles.",
    rating: 5,
  },
  {
    name: "Deepak Mahato",
    role: "CUET Aspirant",
    quote:
      "Wi-Fi is fast enough for online mock tests, and the charging point at my cabin means I never have to leave my seat to hunt for a socket.",
    rating: 4,
  },
  {
    name: "Muskan Kumari",
    role: "Railway Exam Aspirant",
    quote:
      "I switched from a library nearby and the difference is night and day — proper lighting, comfortable chairs, and genuinely disciplined.",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What are your opening hours?",
    answer:
      "The library is open every day of the week from 7:00 AM to 10:00 PM. You can choose a morning shift, an evening shift, or a full-day plan that covers the whole window.",
  },
  {
    question: "Do I need to book a seat in advance?",
    answer:
      "Members get a fixed study cabin for the length of their membership, so no daily booking is needed. New members should message us on WhatsApp or visit the desk to check current availability before joining.",
  },
  {
    question: "What documents do I need to become a member?",
    answer:
      "One government-issued photo ID (Aadhaar, voter ID, or similar) and a passport-size photograph. Bring both when you visit to complete the membership form.",
  },
  {
    question: "Is food allowed inside the reading room?",
    answer:
      "Food and drinks aren't allowed at the study cabins to keep the space clean and distraction-free. We have a separate lunch area for meals and short breaks.",
  },
  {
    question: "Can I discuss or study in a group?",
    answer:
      "The main reading room is a strict silent zone. For group study or discussion, we have a dedicated group discussion room so it doesn't disturb anyone reading solo.",
  },
  {
    question: "Is Wi-Fi included with membership?",
    answer:
      "Yes — high-speed Wi-Fi is free for all members, along with a charging point at your own cabin.",
  },
  {
    question: "How do I pay, and can I switch shifts later?",
    answer:
      "Payment is collected at the desk when you join or renew. If your routine changes, you can switch between morning, evening, and full-day plans from your next renewal.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, there's covered two-wheeler parking right at the building plus an outdoor overflow area, both free for members.",
  },
];

export const aboutDescription = {
  intro:
    "Reyansha Library began as a single reading room attached to a coaching centre in Bokaro Steel City. Today it's a full-time reading facility serving students preparing for competitive exams alongside school and college coursework, and working professionals who need a quiet desk and good light.",
  lead:
    "Reyansha Library is a modern, well-equipped study library in Chas, Bokaro, near Lifeline Hospital — built for a peaceful, distraction-free environment for students, competitive-exam aspirants and working professionals.",
  closing:
    "Whether you're preparing for competitive exams, government exams, academic studies or professional goals, Reyansha Library gives you a dedicated, comfortable space to stay focused and productive.",
};

// Headline numbers shown on the homepage. Keep these accurate — update the
// values here (not in the page components) as real membership/seat counts change.
export const stats = {
  hours: "7 AM – 10 PM",
  hoursLabel: "Open every day",
  seats: 120,
  seatsLabel: "Reading-room seats",
  shifts: 3,
  shiftsLabel: "Flexible shifts",
  members: 1400,
  membersLabel: "Study members",
  daysOpen: 7,
  daysOpenLabel: "Days open a week",
  hoursDaily: 15,
  hoursDailyLabel: "Hours open daily",
};

export const contactDetails = {
  address:
    "Golden Hut, Bye Pass Rd, near Lifeline Hospital, Chas, Bokaro Steel City, Jharkhand 827013",
  // Displayed phone numbers, as shown on the library's own signage.
  phone: "94319 68777",
  phoneSecondary: "95724 70707",
  email: "library@reyansheducation.in",
  whatsapp: "94319 68777",
  // Digits only, with country code, no spaces or symbols — this is what wa.me / tel: links need.
  whatsappDigits: "919431968777",
  phoneDigits: "919431968777",
  hours: "Open all 7 days, 7:00 AM – 10:00 PM",
  mapsEmbedQuery:
    "Golden Hut, Bye Pass Rd, near Lifeline Hospital, Chas, Bokaro Steel City, Jharkhand 827013",
  directionsUrl:
    "https://www.google.com/maps/dir//REYANSHA+LIBRARY,+Golden+Hut,+Bye+Pass+Rd,+near+Lifeline+Hospital,+near+Life+Line+Hospital,+Chas,+Bokaro+Steel+City,+Jharkhand+827013/@23.6674677,86.1191224,10122m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39f4232d513196ef:0x334eea5470ad1a0d!2m2!1d86.1657237!2d23.6346087",
};
