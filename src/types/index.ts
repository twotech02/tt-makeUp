export interface ServiceItem {
  id: string;
  name: string;
  category: 'bridal' | 'glam' | 'editorial' | 'skin-ritual';
  price: number;
  originalPrice?: number;
  duration: string;
  image: string;
  description: string;
  features: string[];
  tones: string[];
  finish: string;
  recommendedFor: string;
  artistId?: string;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  specialty: string;
  signatureLook: string;
  image: string;
  instagram: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: string;
  clientType: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  skinConcerns: string[];
  techniquesUsed: string[];
  productsFeatured: string[];
  artistName: string;
  longevity: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BookingData {
  serviceId: string;
  serviceName: string;
  artistId: string;
  artistName: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  occasion: string;
  skinNotes: string;
  addOns: string[];
}
