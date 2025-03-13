import { ReactNode } from 'react';
import MUIRegistry from './mui-registry';
import { AuthProvider } from '../src/contexts/AuthContext';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <MUIRegistry>
          <AuthProvider>
            {children}
          </AuthProvider>
        </MUIRegistry>
      </body>
    </html>
  );
} 