'use client';

import { ReactNode } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

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