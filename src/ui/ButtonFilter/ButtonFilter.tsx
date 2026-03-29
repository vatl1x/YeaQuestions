import styles from "./ButtonFilter.module.scss";

interface Props {
    title: string;
    icon?: string;
    isActive?: boolean;
    onClick: () => void;
}

const ButtonFilter = ({ title, icon, isActive, onClick }: Props) => {
    return (
        <button
            className={`${styles.wrapper} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            {icon && <img src={icon} width={30} height={30} />}
            <span className={styles.title}>{title}</span>
        </button>
    );
};

export default ButtonFilter;
