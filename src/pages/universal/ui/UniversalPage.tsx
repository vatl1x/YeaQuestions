import styles from "./UniversalPage.module.scss";

export const UniversalPage = ({ pageTitle = "" }) => {
    return (
        <div className="container">
            <div className={styles.layout}>
                <h1 className={styles.layoutTitle}>
                    Страница {pageTitle} в разработке
                </h1>
            </div>
        </div>
    );
};
