import { Card } from "@/shared/ui";
import ArrowIcon from "@/shared/assets/icons/arrow-left.svg?react";
import { useQuestionNavigation } from "../model/useQuestionNavigation";
import styles from "./QuestionNavigation.module.scss";

export const QuestionNavigation = () => {
    const { prevSlug, nextSlug, handlePrevSlug, handleNextSlug } =
        useQuestionNavigation();

    return (
        <Card className={styles.questionNavigation}>
            <button
                className={styles.btnPrev}
                onClick={handlePrevSlug}
                disabled={!prevSlug}
            >
                <ArrowIcon width={24} height={24} />
                <p className={styles.btnLabel}>Предыдущий</p>
            </button>
            <button
                className={styles.btnNext}
                onClick={handleNextSlug}
                disabled={!nextSlug}
            >
                <p className={styles.btnLabel}>Следующий</p>
                <ArrowIcon
                    width={24}
                    height={24}
                    className={styles.btnNextIcon}
                />
            </button>
        </Card>
    );
};
