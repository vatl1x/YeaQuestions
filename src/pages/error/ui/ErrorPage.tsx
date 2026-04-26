import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    return (
        <div className="container">
            <div className={styles.layout}>
                <h2 className={styles.errorTitle}>Ой, что-то сломалось!</h2>
                <p className={styles.errorTitle}>
                    {error.message || "Неизвестная ошибка"}
                </p>
            </div>
        </div>
    );
};
