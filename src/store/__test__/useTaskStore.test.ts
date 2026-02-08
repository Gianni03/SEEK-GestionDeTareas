import { act, renderHook } from '@testing-library/react';
import { useTaskStore } from '../useTaskStore';
import { describe, it, expect, beforeEach } from '@jest/globals';

describe('useTaskStore', () => {
  // Limpiamos el store antes de cada test para que sean independientes
  beforeEach(() => {
    const { result } = renderHook(() => useTaskStore());
    act(() => {
      // Si tu store tiene una función para resetear, úsala.
      // Si no, podemos simplemente limpiar las tareas manualmente.
      useTaskStore.setState({ tasks: [] });
    });
  });

  it('debería iniciar con una lista de tareas vacía', () => {
    const { result } = renderHook(() => useTaskStore());
    expect(result.current.tasks).toEqual([]);
  });

  it('debería agregar una tarea y generar un ID único', () => {
    const { result } = renderHook(() => useTaskStore());

    act(() => {
      result.current.addTask('Nueva Tarea', 'Descripción de prueba');
    });

    expect(result.current.tasks).toHaveLength(1);
    expect(result.current.tasks[0].title).toBe('Nueva Tarea');
    expect(result.current.tasks[0].id).toBeDefined();
  });

  it('debería editar una tarea correctamente', () => {
    const { result } = renderHook(() => useTaskStore());

    // 1. Agregamos una tarea primero
    act(() => {
      result.current.addTask('Tarea a editar', 'Descripción');
    });
    const taskId = result.current.tasks[0].id;

    // 2. La editamos
    act(() => {
      result.current.updateTaskStatus(taskId, 'completed');
    });

    expect(result.current.tasks[0].title).toBe('Tarea a editar');
    expect(result.current.tasks[0].status).toBe('completed');
  });

  it('debería borrar una tarea correctamente', () => {
    const { result } = renderHook(() => useTaskStore());

    // 1. Agregamos una tarea primero
    act(() => {
      result.current.addTask('Tarea a borrar', 'Desc', 'pending');
    });
    const taskId = result.current.tasks[0].id;

    // 2. La borramos
    act(() => {
      result.current.deleteTask(taskId);
    });

    expect(result.current.tasks).toHaveLength(0);
  });
});
