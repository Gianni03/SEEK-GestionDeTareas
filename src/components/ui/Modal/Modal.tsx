'use client';

import { ReactNode } from 'react';
import styles from './Modal.module.css';

/**
 * @interface ModalProps
 * @description Interface para representar las propiedades de un modal
 * @property {boolean} isOpen - Estado de apertura del modal
 * @property {() => void} onClose - Función para cerrar el modal
 * @property {string} title - Título del modal
 * @property {ReactNode} children - Contenido del modal
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

/**
 * @function Modal
 * @description Componente para mostrar un modal
 * @param {ModalProps} props - Propiedades del componente
 * @returns {JSX.Element} - Componente de modal
 */
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h3>{title}</h3>
          <button onClick={onClose} className={styles.closeBtn}>&times;</button>
        </header>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}