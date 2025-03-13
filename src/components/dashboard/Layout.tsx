import React from 'react';
import ProtectedRoute from '../ProtectedRoute';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ProtectedRoute>
      <div>
        {/* Componente simplificado */}
        {children}
      </div>
    </ProtectedRoute>
  );
};

export default Layout; 