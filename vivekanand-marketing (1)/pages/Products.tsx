import React from 'react';
import { Download, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';
import { useStore } from '../context/StoreContext';

const Products: React.FC = () => {
  const { categories } = useStore();

  return (
    <div className="bg-beige min-h-screen pb-20">
      
      {/* Header */}
      <div className="bg-charcoal text-beige pt-32 pb-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-royal/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <p className="text-royal font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up">The Collection</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8 animate-fade-in-up delay-100">Wholesale Catalogue</h1>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to see the full catalogue PDF.`}
            className="inline-flex items-center gap-2 px-8 py-3 border border-royal/30 text-royal hover:bg-royal hover:text-charcoal transition-all duration-300 rounded-full font-mono text-xs font-bold uppercase tracking-widest animate-fade-in-up delay-200"
          >
            <Download size={16} />
            Request PDF
          </a>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div 
              key={category.id} 
              className="glass-card bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
              style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.1}s forwards`, opacity: 0 }}
            >
              <div className="relative h-64 overflow-hidden mb-6 border border-beige-dark">
                 <img 
                   src={category.imageUrl} 
                   alt={category.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute top-3 right-3 bg-white/90 backdrop-blur p-1.5 rounded-full text-royal opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles size={16} />
                 </div>
              </div>

              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">{category.title}</h3>
              <p className="text-gray-500 text-sm mb-6 line-clamp-2">{category.description}</p>
              
              <ul className="space-y-2 mb-8 border-t border-dashed border-gray-200 pt-4">
                {category.benefits.slice(0, 2).map((b, i) => (
                  <li key={i} className="text-xs font-mono text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-royal rounded-full"></span> {b}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I am interested in bulk order for ${category.title}`}
                className="w-full py-3 bg-charcoal text-white font-mono text-xs font-bold uppercase tracking-widest hover:bg-royal hover:text-charcoal transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> 
                Inquire Rates
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;