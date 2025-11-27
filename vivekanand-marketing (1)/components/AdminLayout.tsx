import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Users, Truck, LogOut, Settings, Gem, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { logoutAdmin } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const menuItems = [
    { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { path: '/admin/catalogue', icon: Package, label: 'Catalogue & Stock' },
    { path: '/admin/operations', icon: Users, label: 'Staff & Operations' },
    // { path: '/admin/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="flex h-screen bg-charcoal overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-charcoal-light border-r border-royal/10 flex flex-col">
        <div className="p-8 flex items-center gap-3 border-b border-royal/10">
          <div className="w-8 h-8 bg-royal rounded flex items-center justify-center text-charcoal">
            <Gem size={18} />
          </div>
          <div>
            <h1 className="text-royal font-serif font-bold text-lg">Vivekanand</h1>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-royal text-charcoal shadow-lg shadow-royal/20'
                    : 'text-gray-400 hover:text-beige hover:bg-white/5'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
              <ChevronRight size={14} className="ml-auto opacity-50" />
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-royal/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-charcoal">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};