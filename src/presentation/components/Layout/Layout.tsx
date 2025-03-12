import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/infrastructure/theme/theme';
import { MainContainer } from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContainer>
        {children}
      </MainContainer>
    </ThemeProvider>
  );
};

export default Layout; 