import notFound from "@/shared/assets/icons/not-found.svg";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
    return (
        <div className="container">
            <div className={styles.layout}>
                <img
                    src={notFound}
                    alt="Картинка: страница не найдена"
                    width={400}
                />
                <strong className={styles.label}>Страница не найдена</strong>
            </div>
        </div>
    );
};
