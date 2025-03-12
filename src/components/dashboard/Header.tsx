import { useAuth } from '@/contexts/AuthContext';
import styles from '@/styles/dashboard/Header.module.css';

export default function Header() {
  const { logout } = useAuth();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {process.env.NEXT_PUBLIC_APP_NAME}
      </div>
      <button onClick={logout} className={styles.logoutButton}>
        Sair
      </button>
    </header>
  );
} 