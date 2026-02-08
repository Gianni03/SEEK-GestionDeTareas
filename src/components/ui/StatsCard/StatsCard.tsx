import styles from "./StatsCard.module.css";

/**
 * @interface StatsCardProps
 * @description Interface para representar las propiedades de una tarjeta de estadísticas
 * @property {string} title - Título de la tarjeta
 * @property {number} value - Valor de la tarjeta
 * @property {React.ReactNode} icon - Icono de la tarjeta
 * @property {'default' | 'progress' | 'completed'} type - Tipo de tarjeta
 */
interface StatsCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    type?: 'default' | 'progress' | 'completed';
}
    
/**
 * @function StatsCard
 * @description Componente para mostrar una tarjeta de estadísticas
 * @param {StatsCardProps} props - Propiedades del componente
 * @returns {JSX.Element} - Componente de tarjeta de estadísticas
 */
export default function StatsCard({ title, value, icon, type = 'default' }: StatsCardProps) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
    </div>
  );
}