import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStatus } from '@/types';

/**
 * @interface TaskState
 * @description Interface para representar el estado de las tareas
 * @property {Task[]} tasks - Array de tareas
 * @property {(title: string, description: string, status?: TaskStatus) => void} addTask - Función para agregar una tarea
 * @property {(id: string) => void} deleteTask - Función para eliminar una tarea
 * @property {(id: string, status: TaskStatus) => void} updateTaskStatus - Función para actualizar el estado de una tarea
 */
interface TaskState {
  tasks: Task[];
  addTask: (title: string, description: string, status?: TaskStatus) => void;
  deleteTask: (id: string) => void;
  updateTaskStatus: (id: string, status: TaskStatus) => void;
}

/**
 * @function useTaskStore
 * @description Hook para manejar el estado de las tareas
 * @returns {TaskState} - Estado de las tareas
 */
export const useTaskStore = create<TaskState>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (title, description, status = 'pending') =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              title,
              description,
              status,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      updateTaskStatus: (id, status) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, status } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    {
      name: 'task-storage',
    }
  )
);
