import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Gem, Lock } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER, BUSINESS_NAME, LOCATION } from '../constants';
import { useStore } from '../context/StoreContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  if (location.pathname.startsWith('/admin')) return null;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Catalogue' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="bg-charcoal text-royal-light text-[11px] font-mono tracking-widest py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="hidden md:block opacity-90 font-medium">Gujarat's Premium Wholesale Jewellery Partner</p>
          <div className="flex gap-6 ml-auto md:ml-0">
            <span className="flex items-center gap-2"><MapPin size={12} className="text-royal" /> {LOCATION}</span>
            <a href={`tel:${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={12} className="text-royal" /> +91 {WHATSAPP_NUMBER.substring(2)}</a>
          </div>
        </div>
      </div>

      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-card shadow-lg py-2' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-royal to-royal-dark text-white rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Gem size={22} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-charcoal tracking-tight leading-none">Vivekanand</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-royal-dark font-mono font-bold leading-none mt-1">Marketing</span>
              </div>
            </NavLink>

            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium font-mono tracking-wide transition-all duration-300 relative py-2 ${
                      isActive ? 'text-royal-dark' : 'text-charcoal hover:text-royal'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-royal transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                    </>
                  )}
                </NavLink>
              ))}
              
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="bg-charcoal hover:bg-royal text-white px-7 py-2.5 rounded-none font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Inquire Now
              </a>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-charcoal p-2 hover:bg-beige-dark rounded-lg transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full glass-card border-t border-beige-dark shadow-xl animate-fade-in origin-top">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-mono font-bold uppercase tracking-wider transition-colors ${
                      isActive ? 'bg-royal/10 text-royal-dark' : 'text-charcoal hover:bg-beige-dark'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-charcoal text-beige py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <Gem size={28} className="text-royal" />
              <div>
                <h3 className="font-serif text-2xl font-bold">Vivekanand</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] text-royal">Marketing</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs font-light">
              Premium B2B jewellery distribution network. Connecting aesthetics with business growth in Surat & Vadodara.
            </p>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-royal font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm font-light">
              <li><NavLink to="/" className="hover:text-royal transition-colors">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-royal transition-colors">About Us</NavLink></li>
              <li><NavLink to="/products" className="hover:text-royal transition-colors">Catalogue</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-royal font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="hover:text-royal cursor-pointer">Privacy Policy</li>
              <li className="hover:text-royal cursor-pointer">Terms of Service</li>
              <li className="hover:text-royal cursor-pointer">Return Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-royal font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-royal flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-royal flex-shrink-0" />
                <a href={`tel:${WHATSAPP_NUMBER}`} className="hover:text-white">+91 {WHATSAPP_NUMBER.substring(2)}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.startsWith('/admin') && location.pathname !== '/admin/login';
  
  // Hidden Admin Logic
  const [showAdminAccess, setShowAdminAccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ALT + A to toggle
      if (e.altKey && (e.key.toLowerCase() === 'a')) {
        setShowAdminAccess(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col font-sans ${isAdminPage ? 'bg-charcoal text-beige' : 'bg-beige text-charcoal'}`}>
      
      {/* Hidden Admin Button - Only visible when Alt+A is triggered */}
      {showAdminAccess && (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 animate-fade-in-right">
          <button 
            onClick={() => {
              setShowAdminAccess(false);
              navigate('/admin/login');
            }}
            className="bg-charcoal text-royal border border-royal/30 p-4 rounded-r-xl shadow-2xl flex flex-col items-center gap-2 hover:bg-charcoal-light transition-all"
          >
            <Lock size={20} />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest writing-vertical-lr rotate-180">Admin Access</span>
          </button>
        </div>
      )}

      {!isAdminPage && <Header />}
      <main className="flex-grow relative">
        {children}
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};