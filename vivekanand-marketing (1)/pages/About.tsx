import React from 'react';
import { Target, TrendingUp, HeartHandshake, Truck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-slate-50 py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold-600 font-bold tracking-widest text-xs uppercase mb-6 block animate-fade-in-up">Since 2013</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-8 animate-fade-in-up delay-100">Bridging Manufacturers<br/>& Retailers</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            We are Gujarat's premier B2B distribution network for artificial jewellery, delivering success to over 1000+ retail partners.
          </p>
        </div>
      </div>

      {/* Story Section with Visuals */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Stack */}
            <div className="relative animate-fade-in-up">
              <div className="absolute -top-10 -left-10 w-2/3 h-full bg-gold-100 rounded-3xl -z-10"></div>
              <img 
                src="https://picsum.photos/seed/jewellery-shop/800/1000" 
                alt="Jewellery Showroom" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-green-100 rounded-full text-green-600"><Truck size={24}/></div>
                  <div>
                    <p className="font-bold text-slate-900">Daily Routes</p>
                    <p className="text-xs text-slate-500">Surat & Vadodara</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">Our vans cover over 200km daily ensuring fresh stock reaches every corner.</p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in-up delay-200">
              <h2 className="text-4xl font-serif font-bold text-slate-900">Our Legacy of Trust</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to streamline the artificial jewellery supply chain in Gujarat, Vivekanand Marketing has grown from a small operation to a robust logistical network. 
                </p>
                <p>
                  We understood early on that retailers needed two things: <strong className="text-slate-900">consistency</strong> and <strong className="text-slate-900">fresh designs</strong>.
                </p>
                <p>
                  Today, we operate a fleet of 5-6 delivery vans that circulate daily through the bustling markets of Surat and Vadodara, ensuring that our retailer partners never run out of trending stock.
                </p>
              </div>
              
              <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
                 <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">10+</h4>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Years Experience</p>
                 </div>
                 <div>
                    <h4 className="text-4xl font-serif font-bold text-gold-500 mb-2">1k+</h4>
                    <p className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Retail Partners</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={32}/>
              </div>
              <h3 className="text-xl font-bold mb-4">Precision</h3>
              <p className="text-slate-400 leading-relaxed">Accurate order fulfillment and timely deliveries are the bedrock of our service.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32}/>
              </div>
              <h3 className="text-xl font-bold mb-4">Growth</h3>
              <p className="text-slate-400 leading-relaxed">We succeed when you succeed. Our pricing models are built to maximize your margins.</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-16 h-16 bg-gold-500/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake size={32}/>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-slate-400 leading-relaxed">Transparent dealings and long-term relationships over short-term profits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;