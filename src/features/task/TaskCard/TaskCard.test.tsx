import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from './TaskCard';
import { Task } from '@/types';

const testTask: Task = {
  id: '1',
  title: 'Testear TaskCard',
  description: 'Lograr que el test pase',
  status: 'pending',
  createdAt: new Date().toISOString(),
};

describe('TaskCard Component', () => {
  it('debería mostrar la información de la tarea', () => {
    render(<TaskCard task={testTask} handleOpenEdit={() => {}} />);

    expect(screen.getByText(testTask.title)).toBeInTheDocument();
    expect(screen.getByText(testTask.description)).toBeInTheDocument();
  });

  it('debería llamar a la función handleOpenEdit cuando se pulsa el botón de editar', () => {
    const onEdit = jest.fn();
    render(<TaskCard task={testTask} handleOpenEdit={onEdit} />);

    const editButton = screen.getByRole('button', { name: /edit|✏️/i });
    fireEvent.click(editButton);

    expect(onEdit).toHaveBeenCalledTimes(1);
  });

  it('debería mostrar el badge de estado correcto', () => {
    render(<TaskCard task={testTask} handleOpenEdit={() => {}} />);

    expect(screen.getByText(/pendiente/i)).toBeInTheDocument();
  });
});
