import styles from '@/styles/dashboard/Sidebar.module.css';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/dashboard" className={styles.active}>
              Início
            </Link>
          </li>
          <li>
            <Link href="/dashboard/perfil">
              Perfil
            </Link>
          </li>
          <li>
            <Link href="/dashboard/configuracoes">
              Configurações
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
} 