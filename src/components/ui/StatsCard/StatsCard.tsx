import styles from "./StatsCard.module.css";

interface StatsCardProps {
    title: string;
    value: number;
    icon: React.ReactNode;
    type?: 'default' | 'progress' | 'completed';
}
    
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