import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const WhatsAppFloat: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 animate-bounce-subtle">
      {/* Soft Glow */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 animate-pulse"></div>
      
      {/* Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 fill-white stroke-none" />
        
        {/* Premium Tooltip */}
        <span className="absolute right-full mr-4 bg-charcoal text-white text-xs font-mono font-bold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none border border-royal/30">
          CHAT WITH US
        </span>
      </a>
    </div>
  );
};