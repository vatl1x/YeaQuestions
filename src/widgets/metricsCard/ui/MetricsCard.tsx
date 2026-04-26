import { useRef } from "react";
import { Card } from "@/shared/ui";
import { MetricBadge } from "@/shared/ui";
import { QuestionSkills } from "@/entities/question";
import { QuestionKeywords } from "@/entities/question";
import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import filterClose from "@/shared/assets/icons/filter-close.svg";
import styles from "./MetricsCard.module.scss";
import type { DetailedQuestion } from "@/entities/question/model/types";

type Props = Pick<
    DetailedQuestion,
    "complexity" | "rate" | "questionSkills" | "keywords" | "createdBy"
> & { onMetricClose?: () => void };

export const MetricsCard = ({
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