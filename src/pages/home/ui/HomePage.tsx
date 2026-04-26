import styles from "./HomePage.module.scss";

export const HomePage = () => {
    return (
        <div className="container">
            <div className={styles.layout}>
                <h1 className={styles.layoutTitle}>
                    Это главная страница приложения
                </h1>
            </div>
        </div>
    );
};

