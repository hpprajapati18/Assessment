import { Category, Product, Staff, Van, Retailer } from './types';
import { ShieldCheck, Users, Coins, Clock } from 'lucide-react';

export const BUSINESS_NAME = "Vivekanand Marketing";
export const WHATSAPP_NUMBER = "918690365943";
export const LOCATION = "Surat & Vadodara, Gujarat";
export const EMAIL = "inquiry@vivekanandmarketing.com";

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'earrings',
    title: 'Royal Earrings',
    description: 'From heavy traditional Jhumkas to modern western studs.',
    imageUrl: 'https://picsum.photos/seed/earrings/600/400',
    benefits: ['High margin potential', 'Trending designs updated weekly']
  },
  {
    id: 'bangles',
    title: 'Bangles & Kadas',
    description: 'Premium AD, gold-plated, and glass bangle sets.',
    imageUrl: 'https://picsum.photos/seed/bangles/600/400',
    benefits: ['Bulk sets available', 'Durable plating warranty']
  },
  {
    id: 'neckpieces',
    title: 'Heirloom Neckpieces',
    description: 'Mangalsutras, heavy chokers, and delicate chains.',
    imageUrl: 'https://picsum.photos/seed/neckpieces/600/400',
    benefits: ['Wide range of price points', 'Box packing available']
  },
  {
    id: 'bridal',
    title: 'Bridal Sets',
    description: 'Complete bridal jewellery sets including necklace and maang tikka.',
    imageUrl: 'https://picsum.photos/seed/bridal/600/400',
    benefits: ['High-value items', 'Exclusive catalogue']
  },
  {
    id: 'bracelets',
    title: 'Modern Bracelets',
    description: 'Stylish bracelets for daily wear and parties.',
    imageUrl: 'https://picsum.photos/seed/bracelets/600/400',
    benefits: ['Fast moving stock', 'Variety of finishes']
  },
  {
    id: 'kids',
    title: 'Kids Collection',
    description: 'Safe, lightweight, and fun designs for children.',
    imageUrl: 'https://picsum.photos/seed/kids/600/400',
    benefits: ['Niche market appeal', 'Skin-friendly materials']
  }
];

export const INITIAL_PRODUCTS: Product[] = [
  { id: '1', name: 'Kundan Jhumka Set', category: 'earrings', description: 'Gold plated heavy jhumka', imageUrl: 'https://picsum.photos/seed/p1/300/300', stockLevel: 120, minStockThreshold: 50 },
  { id: '2', name: 'AD Diamond Bangle', category: 'bangles', description: 'American Diamond bangle set size 2.4', imageUrl: 'https://picsum.photos/seed/p2/300/300', stockLevel: 45, minStockThreshold: 30 },
  { id: '3', name: 'Antique Choker', category: 'neckpieces', description: 'Matte finish antique choker', imageUrl: 'https://picsum.photos/seed/p3/300/300', stockLevel: 80, minStockThreshold: 20 },
  { id: '4', name: 'Rose Gold Bracelet', category: 'bracelets', description: 'Adjustable rose gold finish', imageUrl: 'https://picsum.photos/seed/p4/300/300', stockLevel: 200, minStockThreshold: 100 },
];

export const INITIAL_STAFF: Staff[] = [
  { id: 's1', name: 'Ramesh Patel', role: 'Driver', phone: '9876543210', assignedVanId: 'v1' },
  { id: 's2', name: 'Suresh Kumar', role: 'Sales', phone: '9876543211', assignedVanId: 'v1' },
  { id: 's3', name: 'Amit Shah', role: 'Manager', phone: '9876543212' },
];

export const INITIAL_VANS: Van[] = [
  { id: 'v1', numberPlate: 'GJ-05-AB-1234', route: 'Surat (Varachha)', status: 'Active', currentDriverId: 's1' },
  { id: 'v2', numberPlate: 'GJ-06-CD-5678', route: 'Vadodara (Alkapuri)', status: 'Active' },
  { id: 'v3', numberPlate: 'GJ-05-EF-9012', route: 'Surat (Adajan)', status: 'Maintenance' },
];

export const FEATURES = [
  {
    icon: ShieldCheck,
    title: "10+ Years Legacy",
    desc: "A decade of trust and reliability in Gujarat's wholesale market."
  },
  {
    icon: Users,
    title: "1000+ Retailers",
    desc: "Trusted by shop owners across Surat, Vadodara & beyond."
  },
  {
    icon: Coins,
    title: "Bulk Pricing",
    desc: "Manufacturer-direct rates ensuring the best margins for you."
  },
  {
    icon: Clock,
    title: "Daily Fresh Stock",
    desc: "New designs added to our inventory every single day."
  }
];

export const SYSTEM_INSTRUCTION = `You are the AI assistant for Vivekanand Marketing.`;