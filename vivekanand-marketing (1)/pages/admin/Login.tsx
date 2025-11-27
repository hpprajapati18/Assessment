import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { Gem, Lock, ArrowRight, Smartphone } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { loginAdmin } = useStore();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(phone, password);
    
    if (success) {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials. Access denied.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-royal/10 p-10 rounded-2xl shadow-2xl relative z-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-royal rounded-xl mx-auto flex items-center justify-center text-charcoal mb-6 shadow-lg shadow-royal/20">
            <Gem size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-white">Admin Portal</h1>
          <p className="text-gray-400 text-sm mt-2">Restricted Access • Vivekanand Marketing</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          
          <div>
            <label className="block text-xs font-mono text-royal uppercase tracking-widest mb-2">Phone Number</label>
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-charcoal-light border border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-royal transition-colors placeholder-gray-600 font-mono"
                placeholder="8690365943"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-royal uppercase tracking-widest mb-2">Secure Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-charcoal-light border border-gray-700 text-white pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:border-royal transition-colors placeholder-gray-600 font-mono"
                placeholder="••••••••"
                autoComplete="off"
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-royal hover:bg-white text-charcoal font-mono font-bold uppercase tracking-widest py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-royal/20"
          >
            Authenticate
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 text-center">
          <button onClick={() => navigate('/')} className="text-gray-500 text-xs hover:text-white transition-colors">
            Return to Public Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;