import { forwardRef } from "react";
import styles from "./Card.module.scss";

interface Props {
    children: React.ReactNode;
    className?: string;
}

//className принимаем если у карточки придется переопределить стили
export const Card = forwardRef<HTMLDivElement, Props>(
    ({ children, className }, ref) => {
        return (
            <div ref={ref} className={`${styles.card} ${className ?? ""}`}>
                {children}
            </div>
        );
    },
);

Card.displayName = "Card";
