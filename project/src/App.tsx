import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { ContentProvider } from './contexts/ContentContext';
import AdminApp from './components/admin/AdminApp';
import LandingPage from './components/LandingPage';

function App() {
  const isAdminRoute = window.location.pathname === '/admin';

  return (
    <AuthProvider>
      <ContentProvider>
        {isAdminRoute ? <AdminApp /> : <LandingPage />}
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;