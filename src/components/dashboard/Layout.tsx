import React from 'react';
import ProtectedRoute from '../ProtectedRoute';

const Layout = ({ children }) => {
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