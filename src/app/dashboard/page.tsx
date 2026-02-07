'use client';

import Header from '@/components/ui/Header/Header';
import Footer from '@/components/ui/Footer/Footer';
import StatsCard from '@/components/ui/StatsCard/StatsCard';
import TaskCard from '@/features/task/TaskCard/TaskCard';
import { useTaskStore } from '@/store/useTaskStore';
import styles from './page.module.css';
import { ListChecks, Clock , LayoutList} from 'lucide-react';

export default function DashboardPage() {
  const tasks = useTaskStore((state) => state.tasks);

  const stats = {
    total: tasks.length,
    inProgress: tasks.filter(t => t.status === 'in-progress').length,
    completed: tasks.filter(t => t.status === 'completed').length,
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
          <button className={styles.newBtn}>+ Nueva Tarea</button>
        </header>

        <section className={styles.statsGrid}>
          <StatsCard title="Total" value={stats.total} icon={<LayoutList />} />
          <StatsCard title="En Progreso" value={stats.inProgress} icon={<Clock />} type="progress" />
          <StatsCard title="Completadas" value={stats.completed} icon={<ListChecks />} type="completed" />
        </section>

        <section className={styles.taskGrid}>
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
          {tasks.length === 0 && <p className={styles.empty}>No hay tareas aún. ¡Crea la primera!</p>}
        </section>
      </main>

      <Footer />
    </div>
  );
}