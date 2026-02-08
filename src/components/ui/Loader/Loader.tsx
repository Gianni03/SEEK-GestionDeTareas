import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.airplaneWrapper}>
        <svg
          viewBox="0 0 24 24"
          className={styles.airplane}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
      </div>
      <p className={styles.loadingText}>Cargando experiencia...</p>
    </div>
  );
}
