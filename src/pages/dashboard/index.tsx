import Head from 'next/head';
import DashboardLayout from '@/components/dashboard/Layout';
import { useAuth } from '@/contexts/AuthContext';
import styles from '@/styles/dashboard/Dashboard.module.css';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Head>
        <title>Dashboard | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <DashboardLayout>
        <div className={styles.welcome}>
          <h1>Olá, {user?.username}!</h1>
          <p>Bem-vindo ao seu painel de controle.</p>
        </div>
      </DashboardLayout>
    </>
  );
} 