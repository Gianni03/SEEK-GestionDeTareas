import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('debería mostrar el texto correctamente', () => {
    render(<Button>Enviar</Button>);
    const button = screen.getByRole('button', { name: /Enviar/i }); // busca el html role button
    expect(button).toBeInTheDocument();
  });

  it('debería llamar a la función onClick al hacer clic', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Enviar</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('debería estar desabilitado si tiene la prop disabled', () => {
    render(<Button disabled>Enviar</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('deberia mostrar el texto de isLoading si esta cargando', () => {
    render(<Button isLoading>Enviar</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Cargando...');
  });
});
