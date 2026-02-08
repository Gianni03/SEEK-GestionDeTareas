import styles from "./Input.module.css";

/**
 * @interface InputProps
 * @description Interface para representar las propiedades de un input
 * @property {string} label - Etiqueta del input
 * @property {string} id - ID del input
 * @property {React.InputHTMLAttributes<HTMLInputElement>} props - Propiedades adicionales del input
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

/**
 * @function Input
 * @description Componente para mostrar un input
 * @param {InputProps} props - Propiedades del componente
 * @returns {JSX.Element} - Componente de input
 */
export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input id={id} className={styles.input} {...props} />
    </div>
  );
}