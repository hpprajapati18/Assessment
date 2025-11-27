import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useStore } from '../../context/StoreContext';
import { User, Truck, MapPin, MoreHorizontal } from 'lucide-react';

const Operations: React.FC = () => {
  const { staff, vans, retailers } = useStore();

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-serif font-bold text-white mb-2">Operations Center</h1>
        <p className="text-gray-400">Track field staff, delivery vans, and retailer network.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Vans & Staff */}
        <div className="bg-charcoal-light rounded-xl border border-royal/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Truck className="text-royal" size={20} /> Fleet & Staff
            </h2>
            <button className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded text-gray-300">
              Manage Drivers
            </button>
          </div>
          
          <div className="space-y-4">
            {vans.map(van => {
              const driver = staff.find(s => s.id === van.currentDriverId);
              return (
                <div key={van.id} className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-white font-bold">{van.route}</h3>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">{van.numberPlate}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${van.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {van.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2 pt-2 border-t border-white/5">
                    <User size={14} className="text-royal"/> 
                    Driver: <span className="text-white font-medium">{driver?.name || 'Unassigned'}</span>
                    {driver && <span className="text-xs text-gray-600 ml-auto">{driver.phone}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Retailers */}
        <div className="bg-charcoal-light rounded-xl border border-royal/10 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <MapPin className="text-royal" size={20} /> Retailer Network
            </h2>
            <button className="text-xs bg-royal/10 hover:bg-royal/20 px-3 py-1.5 rounded text-royal">
              + Add Retailer
            </button>
          </div>

          <div className="space-y-4">
            {retailers.map(retailer => (
              <div key={retailer.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                <div>
                  <h3 className="text-white font-bold group-hover:text-royal transition-colors">{retailer.shopName}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                     <span>{retailer.city}</span>
                     <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                     <span>{retailer.name}</span>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <span className="text-xs px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
                  <p className="text-[10px] text-gray-500 mt-1">Last: {retailer.lastOrderDate}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-4 text-center">
              <button className="text-sm text-gray-500 hover:text-white transition-colors">
                View All Retailers
              </button>
            </div>
          </div>
        </div>

      </div>
    </AdminLayout>
  );
};

export default Operations;