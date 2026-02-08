import clsx from 'clsx';
import styles from './Button.module.css';

/**
 * @interface ButtonProps
 * @description Interface para representar las propiedades de un botón
 * @property {'primary' | 'danger' | 'secondary'} variant - Variante del botón
 * @property {boolean} isLoading - Estado de carga del botón
 * @property {string} className - Clases adicionales del botón
 * @property {React.ReactNode} children - Contenido del botón
 * @property {React.ButtonHTMLAttributes<HTMLButtonElement>} props - Propiedades adicionales del botón
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'secondary';
  isLoading?: boolean;
}

/**
 * @function Button
 * @description Componente para mostrar un botón
 * @param {ButtonProps} props - Propiedades del componente
 */
export default function Button({ 
  variant = 'primary', 
  isLoading, 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={clsx(styles.btn, styles[variant], className)} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? 'Cargando...' : children}
    </button>
  );
}