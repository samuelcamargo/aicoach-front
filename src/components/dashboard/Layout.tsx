import Header from './Header';
import Sidebar from './Sidebar';
import styles from '@/styles/dashboard/Layout.module.css';
import ProtectedRoute from '../ProtectedRoute';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      <div className={styles.dashboardContainer}>
        <Header />
        <div className={styles.content}>
          <Sidebar />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
} 