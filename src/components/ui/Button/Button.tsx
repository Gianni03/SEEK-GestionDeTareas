import clsx from 'clsx';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'danger' | 'secondary';
  isLoading?: boolean;
}

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