import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChatWidget } from './components/ChatWidget';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { StoreProvider, useStore } from './context/StoreContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/admin/Login.tsx';
import Dashboard from './pages/admin/Dashboard.tsx';
import Catalogue from './pages/admin/Catalogue.tsx';
import Operations from './pages/admin/Operations.tsx';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdmin } = useStore();
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
};

function AppContent() {
  const { isAdmin } = useStore();
  
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/admin/catalogue" element={<ProtectedRoute><Catalogue /></ProtectedRoute>} />
          <Route path="/admin/operations" element={<ProtectedRoute><Operations /></ProtectedRoute>} />
          
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </Layout>
      
      {/* Show Chat Widgets only on public pages */}
      {!isAdmin && (
        <>
          <ChatWidget />
          <WhatsAppFloat />
        </>
      )}
    </Router>
  );
}

function App() {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;