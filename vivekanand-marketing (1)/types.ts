export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  PRODUCTS = 'PRODUCTS',
  CONTACT = 'CONTACT',
}

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  priceRange?: string; // e.g. "₹200 - ₹500"
  stockLevel: number;
  minStockThreshold: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

export interface StockLog {
  id: string;
  productId: string;
  productName: string;
  change: number;
  type: 'IN' | 'OUT';
  date: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'Driver' | 'Sales' | 'Manager';
  assignedVanId?: string;
  phone: string;
}

export interface Van {
  id: string;
  route: string; // e.g., "Surat - Varachha"
  numberPlate: string;
  status: 'Active' | 'Maintenance' | 'Idle';
  currentDriverId?: string;
}

export interface Retailer {
  id: string;
  name: string;
  shopName: string;
  city: string;
  phone: string;
  status: 'Active' | 'Pending';
  lastOrderDate?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}