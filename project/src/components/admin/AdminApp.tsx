import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import LoginForm from './LoginForm';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import HeroContentManager from './HeroContentManager';
import FeaturesManager from './FeaturesManager';
import PackagesManager from './PackagesManager';
import TestimonialsManager from './TestimonialsManager';
import FAQsManager from './FAQsManager';

const AdminApp: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState('dashboard');

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'hero':
        return <HeroContentManager />;
      case 'features':
        return <FeaturesManager />;
      case 'packages':
        return <PackagesManager />;
      case 'testimonials':
        return <TestimonialsManager />;
      case 'faqs':
        return <FAQsManager />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AdminLayout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </AdminLayout>
  );
};

export default AdminApp;