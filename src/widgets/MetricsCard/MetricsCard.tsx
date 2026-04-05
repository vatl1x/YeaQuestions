import { useRef } from "react";
import Card from "../../ui/Card/Card";
import MetricBadge from "../../ui/MetricBadge/MetricBadge";
import QuestionSkills from "./QuestionSkills/QuestionSkills";
import QuestionKeywords from "./QuestionKeywords/QuestionKeywords";
import useClickOutside from "../../hooks/useClickOutside";
import filterClose from "../../assets/icons/filter-close.svg";
import styles from "./MetricsCard.module.scss";
import type { DetailedQuestion } from "../../types/question";

type Props = Pick<
    DetailedQuestion,
    "complexity" | "rate" | "questionSkills" | "keywords" | "createdBy"
> & { onMetricClose?: () => void };

const MetricsCard = ({
    onMetricClose,
    complexity,
    rate,
    questionSkills,
    keywords,
    createdBy,
}: Props) => {
    const metricRef = useRef<HTMLDivElement | null>(null);

    useClickOutside(metricRef, onMetricClose);
    
    return (
        <Card ref={metricRef} className={styles.metricForm}>
            {onMetricClose && (
                <div className={styles.closeWrap}>
                    <button onClick={onMetricClose} className={styles.closeBtn}>
                        <img
                            className={styles.filterCloseIcon}
                            src={filterClose}
                            alt=""
                        />
                    </button>
                </div>
            )}

            <div className={styles.metrics}>
                <div className={styles.questionLevel}>
                    <p className={styles.levelLabel}>Уровень:</p>
                    <div className={styles.metricBadge}>
                        <MetricBadge title="Сложность" value={complexity} />
                        <MetricBadge title="Рейтинг" value={rate} />
                    </div>
                </div>
                <QuestionSkills skills={questionSkills} />
                <QuestionKeywords keywords={keywords} />
                <p className={styles.author}>
                    Автор:
                    <span className={styles.authorName}>
                        {createdBy.username}
                    </span>
                </p>
            </div>
        </Card>
    );
};

export default MetricsCard;
