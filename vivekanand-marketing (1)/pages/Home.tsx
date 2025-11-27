import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Users, TrendingUp, Phone, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { INITIAL_CATEGORIES as CATEGORIES, WHATSAPP_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      
      {/* Premium Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-beige overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-white/50 skew-x-12 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-royal/30 rounded-full bg-white/40 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-royal animate-pulse"></span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-charcoal uppercase">Wholesale Only</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-charcoal mb-6 leading-[1.1]">
                Gujarat's <span className="text-royal">Royal</span> <br/>
                Wholesale Partner
              </h1>
              
              <p className="text-lg text-charcoal-light/80 mb-10 max-w-xl leading-relaxed font-light">
                Supplying premium artificial jewellery to 1000+ retailers across Surat & Vadodara. Daily vans, manufacturer prices, and unmatched reliability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink 
                  to="/products"
                  className="px-8 py-4 bg-charcoal text-white hover:bg-royal hover:text-charcoal transition-all duration-300 font-mono text-sm font-bold uppercase tracking-wider shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  View Catalogue <ArrowRight size={16} />
                </NavLink>
                
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-[500px] hidden lg:block opacity-0 animate-fade-in-up delay-200">
               <div className="absolute inset-0 bg-gradient-to-br from-royal-light to-bronze opacity-20 rounded-[3rem] rotate-3 transform"></div>
               <img 
                 src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
                 alt="Luxury Jewellery" 
                 className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
               />
               
               {/* Floating Card */}
               <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-royal/20 animate-float max-w-xs">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-royal/10 rounded-full flex items-center justify-center text-royal">
                     <Clock size={24} />
                   </div>
                   <div>
                     <p className="font-serif font-bold text-charcoal text-lg">Daily Routes</p>
                     <p className="text-xs text-gray-500 font-mono uppercase tracking-wide">Surat • Vadodara</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-charcoal mb-4">The Vivekanand Standard</h2>
            <div className="w-20 h-1 bg-royal mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Maximum Margins", desc: "Sourced directly from manufacturers." },
              { icon: Clock, title: "Daily Restock", desc: "Fresh designs delivered every 24 hours." },
              { icon: ShieldCheck, title: "Quality Promise", desc: "Premium plating and durable finish." },
              { icon: Users, title: "Retailer First", desc: "Dedicated support for shop owners." }
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="p-8 rounded-none border border-gray-100 hover:border-royal/50 hover:shadow-2xl transition-all duration-500 group bg-white hover:bg-beige/30"
              >
                <feature.icon size={32} className="text-charcoal group-hover:text-royal transition-colors mb-6" />
                <h3 className="text-xl font-serif font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-royal font-mono text-xs font-bold tracking-widest uppercase mb-2">Our Collection</p>
              <h2 className="text-4xl font-serif font-bold text-charcoal">Curated Excellence</h2>
            </div>
            <NavLink to="/products" className="hidden md:flex items-center gap-2 text-charcoal font-mono text-sm font-bold uppercase tracking-wider hover:text-royal transition-colors group">
              View All <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CATEGORIES.slice(0, 3).map((cat) => (
              <div key={cat.id} className="group relative h-[500px] overflow-hidden cursor-pointer">
                <img 
                  src={cat.imageUrl} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.title}</h3>
                  <div className="h-[1px] w-12 bg-royal mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <NavLink to="/products" className="text-white/80 text-sm font-mono tracking-wider hover:text-royal transition-colors inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 duration-500 delay-100">
                    Explore <ArrowRight size={14} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <NavLink to="/products" className="inline-block px-8 py-4 border border-charcoal text-charcoal font-mono text-xs font-bold uppercase tracking-widest">
              View Full Catalogue
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-charcoal text-center px-4 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-beige mb-8">Ready to Scale Your Business?</h2>
          <p className="text-gray-400 mb-10 text-lg font-light">Join the most reliable wholesale network in Gujarat today.</p>
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-block px-10 py-5 bg-royal text-charcoal font-mono font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            Start Partnering
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;