import { useLocation, useNavigate } from "react-router-dom";
import Card from "../../ui/Card/Card";
import ArrowIcon from "../../assets/icons/arrow-left.svg?react";
import styles from "./QuestionNavigation.module.scss";
import type { QuestionNavigationState } from "../../types/question";

const QuestionNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as QuestionNavigationState | null;
    const slugs = state?.slugs ?? [];
    const index = state?.index ?? -1;

    const prevSlug = index > 0 ? slugs[index - 1] : null;

    const nextSlug =
        index >= 0 && index < slugs.length - 1 ? slugs[index + 1] : null;

    const handlePrevSlug = () => {
        navigate(`/questions/${prevSlug}`, {
            replace: true,
            state: { slugs, index: index - 1 },
        });
    };

    const handleNextSlug = () => {
        navigate(`/questions/${nextSlug}`, {
            replace: true,
            state: { slugs, index: index + 1 },
        });
    };

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

export default QuestionNavigation;
