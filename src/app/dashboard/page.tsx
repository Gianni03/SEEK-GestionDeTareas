'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';
import StatsCard from '@/components/ui/StatsCard/StatsCard';
import Modal from '@/components/ui/Modal/Modal';
import TaskCard from '@/features/task/TaskCard/TaskCard';
import TaskForm from '@/features/task/TaskForm/TaskForm';
import { useTaskStore } from '@/store/useTaskStore';
import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';
import { ListChecks, Clock, LayoutList, Plus } from 'lucide-react';
import Loader from '@/components/ui/Loader/Loader';
import { Task } from '@/types';
import styles from './page.module.css';

export default function DashboardPage() {
  const tasks = useTaskStore((state) => state.tasks);
  const { user, token, isHydrated } = useAuthStore();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);

  useEffect(() => {
    if (!isHydrated) return;

    if (!token && !user) {
      router.push('/login');
    }
  }, [user, token, router, isHydrated]);

  if (!isHydrated) {
    return <Loader />;
  }

  if (!user) return null;

  const stats = {
    total: tasks.length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
  };

  const handleOpenCreate = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (task: Task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <header className={styles.pageHeader}>
          <div>
            <h1>Mis Tareas</h1>
            <p>Gestiona tus prioridades diarias.</p>
          </div>
          <button className={styles.newBtn} onClick={handleOpenCreate}>
            <Plus size={20} />
            Nueva Tarea
          </button>
        </header>

        <section className={styles.statsGrid}>
          <StatsCard title="Total" value={stats.total} icon={<LayoutList />} />
          <StatsCard
            title="En Progreso"
            value={stats.inProgress}
            icon={<Clock />}
            type="progress"
          />
          <StatsCard
            title="Completadas"
            value={stats.completed}
            icon={<ListChecks />}
            type="completed"
          />
        </section>

        <section className={styles.taskGrid}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleOpenEdit={handleOpenEdit}
            />
          ))}
          {tasks.length === 0 && (
            <p className={styles.empty}>No hay tareas aún. ¡Crea la primera!</p>
          )}
        </section>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}
        >
          <TaskForm
            key={taskToEdit ? taskToEdit.id : 'create'}
            taskToEdit={taskToEdit}
            onSuccess={handleCloseModal}
          />
        </Modal>
      </main>

      <Footer />
    </div>
  );
}
