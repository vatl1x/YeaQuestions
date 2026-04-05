import { useState } from "react";
import { Link } from "react-router-dom";
import MetricBadge from "../../ui/MetricBadge/MetricBadge";
import HtmlContent from "../../ui/HtmlContent/HtmlContent";
import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowRight from "../../assets/icons/arrow-right-long.svg";
import styles from "./QuestionCard.module.scss";

export interface QuestionsResponse {
    title: string;
    slug: string;
    rate: number;
    complexity: number;
    shortAnswer: string;
}

const QuestionCard = ({
    title,
    slug,
    rate,
    complexity,
    shortAnswer,
}: QuestionsResponse) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={styles.accordionItem}>
            <div className={styles.question} onClick={() => setIsOpen(!isOpen)}>
                <h2 className={styles.questionTitle}>{title}</h2>
                <button>
                    <img
                        src={arrowUp}
                        className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
                    />
                </button>
            </div>
            <div
                className={`${styles.accordionContent} ${isOpen ? styles.accordionContentOpen : ""}`}
            >
                <div className={styles.accordionContentInner}>
                    <div className={styles.metric}>
                        <MetricBadge title="Рейтинг" value={rate} />
                        <MetricBadge title="Сложность" value={complexity} />
                    </div>
                    <HtmlContent html={shortAnswer} isOpen={isOpen} />
                    <Link
                        to={`/questions/${slug}`}
                        className={styles.fullQuestion}
                        onClick={() =>
                            setTimeout(() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }, 100)
                        }
                    >
                        <span className={styles.fullQuestionTitle}>
                            Подробнее
                        </span>
                        <img src={arrowRight} alt="" />
                    </Link>
                </div>
            </div>
        </li>
    );
};

export default QuestionCard;
