import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
    const error = useRouteError() as Error;
    console.error(error);
    return (
        <div className="container">
            <div className={styles.layout}>
                <h2 className={styles.errorTitle}>Ой, что-то сломалось!</h2>
                <p className={styles.errorTitle}>{error.message || "Неизвестная ошибка"}</p>
            </div>
        </div>
    );
};

export default ErrorPage;
