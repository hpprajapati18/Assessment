import React from 'react';
import { AdminLayout } from '../../components/AdminLayout';
import { useStore } from '../../context/StoreContext';
import { TrendingUp, Users, Package, Truck, AlertTriangle } from 'lucide-react';

const StatCard: React.FC<{ title: string; value: string | number; icon: any; trend?: string; alert?: boolean }> = ({ title, value, icon: Icon, trend, alert }) => (
  <div className={`p-6 rounded-xl border ${alert ? 'bg-red-500/10 border-red-500/30' : 'bg-charcoal-light border-royal/10'}`}>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${alert ? 'bg-red-500/20 text-red-400' : 'bg-royal/10 text-royal'}`}>
        <Icon size={20} />
      </div>
      {trend && <span className="text-xs text-green-400 font-mono">+{trend}</span>}
    </div>
    <h3 className="text-3xl font-serif font-bold text-white mb-1">{value}</h3>
    <p className="text-xs text-gray-400 uppercase tracking-wider">{title}</p>
  </div>
);

const Dashboard: React.FC = () => {
  const { products, retailers, vans } = useStore();

  // Simple derivations
  const lowStockCount = products.filter(p => p.stockLevel <= p.minStockThreshold).length;
  const activeVans = vans.filter(v => v.status === 'Active').length;

  return (
    <AdminLayout>
      <div className="mb-8 animate-fade-in">
        <h1 className="text-3xl font-serif font-bold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back, Admin. System is running optimally.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Retailers" value={retailers.length} icon={Users} trend="12%" />
        <StatCard title="Products" value={products.length} icon={Package} />
        <StatCard title="Active Vans" value={`${activeVans}/${vans.length}`} icon={Truck} />
        <StatCard title="Low Stock Alert" value={lowStockCount} icon={AlertTriangle} alert={lowStockCount > 0} />
      </div>

      {/* Recent Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-charcoal-light rounded-xl border border-royal/10 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Live Van Status</h3>
          <div className="space-y-4">
            {vans.map(van => (
              <div key={van.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${van.status === 'Active' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                  <div>
                    <p className="text-white text-sm font-bold">{van.route}</p>
                    <p className="text-xs text-gray-500">{van.numberPlate}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded ${van.status === 'Active' ? 'text-green-400 bg-green-500/10' : 'text-red-400 bg-red-500/10'}`}>
                  {van.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-charcoal-light rounded-xl border border-royal/10 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
             <button className="p-4 bg-royal/10 hover:bg-royal/20 text-royal border border-royal/20 rounded-lg text-sm font-bold transition-colors">
               + Add New Stock
             </button>
             <button className="p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-sm font-bold transition-colors">
               Review Pending Orders
             </button>
             <button className="p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-sm font-bold transition-colors">
               Manage Staff
             </button>
             <button className="p-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-sm font-bold transition-colors">
               Broadcast WhatsApp
             </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;