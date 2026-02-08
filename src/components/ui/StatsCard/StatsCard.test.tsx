import { render, screen } from '@testing-library/react';
import StatsCard from './StatsCard';

describe('StatsCard component', () => {
    it('debería mostrar el texto correctamente', () => {
        render(<StatsCard title="Total" value={10} icon={<></>} />);
        expect(screen.getByText('Total')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('debeír mostrar el valor correctamente', () => {
        render(<StatsCard title="Total" value={10} icon={<></>} />);
        expect(screen.getByText('10')).toBeInTheDocument();
    });

    it('debeír mostrar el icono correctamente', () => {
        render(<StatsCard title="Total" value={10} icon={<span data-testid="icon" />} />);
        expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
});
