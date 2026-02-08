'use client';

import { useState } from 'react';
import { useTaskStore } from '@/store/useTaskStore';
import { Task, TaskStatus } from '@/types';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import styles from './TaskForm.module.css';

interface TaskFormProps {
  taskToEdit?: Task | null;
  onSuccess: () => void;
}

export default function TaskForm({ taskToEdit, onSuccess }: TaskFormProps) {
  const { addTask, updateTaskStatus } = useTaskStore();

  // Estado local del formulario
  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [description, setDescription] = useState(taskToEdit?.description || '');
  const [status, setStatus] = useState<TaskStatus>(
    taskToEdit?.status || 'pending'
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (taskToEdit) {
      updateTaskStatus(taskToEdit.id, status);
    } else {
      addTask(title, description, status);
    }

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        label="Título de la tarea"
        id="task-title"
        placeholder="Ej: Revisar auditoría WCAG"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <div className={styles.group}>
        <label htmlFor="task-desc" className={styles.label}>
          Descripción
        </label>
        <textarea
          id="task-desc"
          className={styles.textarea}
          placeholder="Detalla los pasos a seguir..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={styles.group}>
        <label htmlFor="task-status" className={styles.label}>
          Estado
        </label>
        <select
          id="task-status"
          className={styles.select}
          value={status}
          onChange={(e) => setStatus(e.target.value as TaskStatus)}
        >
          <option value="pending">Pendiente</option>
          <option value="in-progress">En Progreso</option>
          <option value="completed">Completada</option>
        </select>
      </div>

      <div className={styles.actions}>
        <Button type="submit">
          {taskToEdit ? 'Guardar cambios' : 'Crear tarea'}
        </Button>
      </div>
    </form>
  );
}
