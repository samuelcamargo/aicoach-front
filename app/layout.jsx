import MUIRegistry from './mui-registry';
import { AuthProvider } from '../src/contexts/AuthContext';

export default function RootLayout({ children }) {
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