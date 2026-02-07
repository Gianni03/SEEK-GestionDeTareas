import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} Gestion de tareas by Gianni. Todos los derechos reservados.</p>
        <nav className={styles.nav}>
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Soporte</a>
        </nav>
      </div>
    </footer>
  );
}