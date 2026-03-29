import styles from "./MetricBadge.module.scss";

interface MetricBadgeProps {
    title: string;
    value: number;
}

const MetricBadge = ({ title, value }: MetricBadgeProps) => {
    return (
        <div className={styles.metricBadge}>
            <span className={styles.title}>{title}:</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
};

export default MetricBadge;
