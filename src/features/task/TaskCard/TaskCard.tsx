'use client';

import { Task } from '@/types';
import { useTaskStore } from '@/store/useTaskStore';
import styles from './TaskCard.module.css';

interface TaskCardProps {
  task: Task;
  handleOpenEdit: (task: Task) => void;
}

export default function TaskCard({ task, handleOpenEdit }: TaskCardProps) {
  const deleteTask = useTaskStore((state) => state.deleteTask);

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${styles[task.status]}`}>
          {task.status}
        </span>
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Editar" onClick={() => handleOpenEdit(task)}>✏️</button>
          <button 
            className={styles.iconBtnDanger} 
            onClick={() => deleteTask(task.id)}
            aria-label="Eliminar"
          >
            🗑️
          </button>
        </div>
      </div>
      
      <h3 className={styles.title}>{task.title}</h3>
      <p className={styles.description}>{task.description}</p>
      
      <div className={styles.footer}>
        <span className={styles.date}>Creado: {new Date(task.createdAt).toLocaleDateString()}</span>
      </div>
    </article>
  );
}