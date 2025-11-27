import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, Category, Staff, Van, Retailer, StockLog } from '../types';
import { INITIAL_CATEGORIES, INITIAL_PRODUCTS, INITIAL_STAFF, INITIAL_VANS } from '../constants';

interface StoreContextType {
  isAdmin: boolean;
  loginAdmin: (phone: string, pass: string) => boolean;
  logoutAdmin: () => void;
  products: Product[];
  categories: Category[];
  staff: Staff[];
  vans: Van[];
  retailers: Retailer[];
  stockLogs: StockLog[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: string) => void;
  updateStock: (productId: string, quantity: number, type: 'IN' | 'OUT') => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Data State
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [staff, setStaff] = useState<Staff[]>(INITIAL_STAFF);
  const [vans, setVans] = useState<Van[]>(INITIAL_VANS);
  const [retailers, setRetailers] = useState<Retailer[]>([
    { id: 'r1', name: 'Rajesh Bhai', shopName: 'Laxmi Jewellers', city: 'Surat', phone: '9988776655', status: 'Active', lastOrderDate: '2023-10-25' }
  ]);
  const [stockLogs, setStockLogs] = useState<StockLog[]>([]);

  useEffect(() => {
    // Check for persistent session
    const session = localStorage.getItem('vivekanand_admin_session');
    if (session === 'active') {
      setIsAdmin(true);
    }
  }, []);

  const loginAdmin = (phone: string, pass: string): boolean => {
    // Strict credential check
    if (phone === '8690365943' && pass === 'BHARAT8690') {
      setIsAdmin(true);
      localStorage.setItem('vivekanand_admin_session', 'active');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('vivekanand_admin_session');
  };

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateStock = (productId: string, quantity: number, type: 'IN' | 'OUT') => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const newStock = type === 'IN' ? product.stockLevel + quantity : product.stockLevel - quantity;
    updateProduct({ ...product, stockLevel: newStock });

    setStockLogs([
      {
        id: Date.now().toString(),
        productId,
        productName: product.name,
        change: quantity,
        type,
        date: new Date().toISOString()
      },
      ...stockLogs
    ]);
  };

  return (
    <StoreContext.Provider value={{
      isAdmin,
      loginAdmin,
      logoutAdmin,
      products,
      categories,
      staff,
      vans,
      retailers,
      stockLogs,
      addProduct,
      updateProduct,
      deleteProduct,
      updateStock
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}