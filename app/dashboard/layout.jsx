"use client";

import { Box, CssBaseline, Typography } from '@mui/material';
import { useAuth } from '../../src/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { AuthProvider } from '../../src/contexts/AuthContext';
import ResponsiveNavigation from '../../components/dashboard/ResponsiveNavigation';

export default function DashboardLayout({ children }) {
  return (
    <AuthProvider>
      <DashboardContent>{children}</DashboardContent>
    </AuthProvider>
  );
}

function DashboardContent({ children }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="body1">Carregando...</Typography>
      </Box>
    );
  }
  
  if (!user) {
    router.push('/login');
    return null;
  }
  
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <ResponsiveNavigation user={user} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          pt: { xs: 10, sm: 12 },
          overflow: 'auto',
          backgroundColor: '#f5f5f5',
          minHeight: '100vh'
        }}
      >
        {children}
      </Box>
    </Box>
  );
} 