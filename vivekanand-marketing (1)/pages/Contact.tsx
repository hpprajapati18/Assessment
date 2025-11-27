import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Gem } from 'lucide-react';
import { LOCATION, WHATSAPP_NUMBER, EMAIL } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    phone: '',
    city: 'Surat',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${formData.name}%0AShop: ${formData.shopName}%0ACity: ${formData.city}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <div className="bg-premium-bg min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl font-serif font-bold text-slate-900 mb-6">Start Your Partnership</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join the network of successful retailers in Gujarat. Fill out the form below or contact us directly.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Contact Info Card */}
          <div className="space-y-8 animate-fade-in-up delay-100 order-2 lg:order-1">
             <div className="bg-slate-900 text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-700"></div>
                
                <h2 className="text-3xl font-serif font-bold mb-10 relative z-10 flex items-center gap-3">
                  <Gem className="text-gold-500"/> Contact Details
                </h2>
                
                <div className="space-y-8 relative z-10">
                   <div className="flex items-start gap-6">
                       <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm"><MapPin className="text-gold-400" size={24}/></div>
                       <div>
                           <h3 className="font-bold text-lg mb-1">Headquarters</h3>
                           <p className="text-slate-300 leading-relaxed">{LOCATION}</p>
                           <div className="mt-2 inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-bold rounded-full border border-gold-500/20">Surat & Vadodara</div>
                       </div>
                   </div>

                   <div className="flex items-start gap-6">
                       <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm"><Phone className="text-gold-400" size={24}/></div>
                       <div>
                           <h3 className="font-bold text-lg mb-1">Direct Line</h3>
                           <p className="text-slate-300 font-mono text-lg">+91 {WHATSAPP_NUMBER.substring(2)}</p>
                           <p className="text-sm text-slate-400 mt-1">Available Mon - Sat, 9am - 8pm</p>
                       </div>
                   </div>

                   <div className="flex items-start gap-6">
                       <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm"><Mail className="text-gold-400" size={24}/></div>
                       <div>
                           <h3 className="font-bold text-lg mb-1">Email Support</h3>
                           <p className="text-slate-300">{EMAIL}</p>
                       </div>
                   </div>
                </div>
             </div>
             
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-2">
                   <div className="p-2 bg-green-100 rounded-lg text-green-600"><Clock size={20}/></div>
                   <h3 className="font-bold text-slate-900">Van Delivery Schedule</h3>
                </div>
                <p className="text-slate-600 pl-11">Our fleet operates daily between <span className="font-semibold text-slate-900">10:00 AM - 7:00 PM</span>. Contact us to schedule a visit to your shop.</p>
             </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 animate-fade-in-up delay-200 order-1 lg:order-2 relative">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Business Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-600 transition-colors">Your Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-gold-500 focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-400"
                          placeholder="Enter your full name"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-600 transition-colors">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-gold-500 focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-400"
                          placeholder="+91..."
                        />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-600 transition-colors">Shop / Business Name</label>
                    <input 
                      type="text" 
                      name="shopName"
                      required
                      value={formData.shopName}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-gold-500 focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-400"
                      placeholder="e.g. Laxmi Jewellers"
                    />
                </div>

                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-600 transition-colors">City</label>
                    <div className="relative">
                      <select 
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-gold-500 focus:bg-white outline-none transition-all duration-300 appearance-none cursor-pointer"
                      >
                          <option value="Surat">Surat</option>
                          <option value="Vadodara">Vadodara</option>
                          <option value="Other">Other (Gujarat)</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 group-focus-within:text-gold-600 transition-colors">Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-slate-50 rounded-xl border-2 border-slate-100 focus:border-gold-500 focus:bg-white outline-none transition-all duration-300 placeholder:text-slate-400 resize-none"
                      placeholder="I am interested in bulk buying..."
                    ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-gold-500/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
                >
                  <Send size={20} /> Send Inquiry via WhatsApp
                </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;