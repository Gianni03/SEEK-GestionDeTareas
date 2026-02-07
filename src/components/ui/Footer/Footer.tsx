import styles from './Footer.module.css';
import { Mail, Linkedin, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Gestion de tareas by Gianni.
          </p>
        </div>

        <nav className={styles.socialNav}>
          <a
            href="mailto:giannipasquinelli@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gianni-pasquinelli/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://giannipasquinelli-webdev.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Portfolio"
          >
            <Briefcase size={20} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
