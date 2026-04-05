import { useNavigate, useParams } from "react-router-dom";
import { useFilters } from "../../context/FiltersContext";
import Card from "../../ui/Card/Card";
import ArrowIcon from "../../assets/icons/arrow-left.svg?react";
import styles from "./QuestionNavigation.module.scss";

const QuestionNavigation = () => {
    const { questionSlugs } = useFilters();
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const currentId = questionSlugs.findIndex(
        (currentSlug) => currentSlug === slug,
    );

    const prevSlug = currentId > 0 ? questionSlugs[currentId - 1] : null;
    const nextSlug =
        currentId < questionSlugs.length - 1
            ? questionSlugs[currentId + 1]
            : null;

    const handlePrevSlug = () => {
        navigate(`/questions/${prevSlug}`, { replace: true });
    };

    const handleNextSlug = () => {
        navigate(`/questions/${nextSlug}`, { replace: true });
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
            <button className={styles.btnNext} onClick={handleNextSlug} disabled={!nextSlug}>
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
