import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import MetricBadge from "../../ui/MetricBadge/MetricBadge";
import HtmlContent from "../../ui/HtmlContent/HtmlContent";
import arrowUp from "../../assets/icons/arrow-up.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import styles from "./QuestionsCard.module.scss";

export interface QuestionsResponse {
    title: string;
    rate: number;
    complexity: number;
    shortAnswer: string;
    longAnswer: string;
}

const QuestionCard = ({
    title,
    rate,
    complexity,
    shortAnswer,
    longAnswer,
}: QuestionsResponse) => {
    const [isOpen, setIsOpen] = useState(false);

    const accordionContentRef = useRef<HTMLDivElement>(null);
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
                ref={accordionContentRef}
                className={styles.accordionContent}
                style={{
                    maxHeight: isOpen
                        ? accordionContentRef.current?.scrollHeight + "px"
                        : "0",
                }}
            >
                <div className={styles.metric}>
                    <MetricBadge title="Рейтинг" value={rate} />
                    <MetricBadge title="Сложность" value={complexity} />
                </div>
                <HtmlContent html={shortAnswer} isOpen={isOpen}/>
                <Link to="/detailed-question" className={styles.fullQuestion}>
                    <span className={styles.fullQuestionTitle}>Подробнее</span>
                    <img src={arrowRight} alt="" />
                </Link>
            </div>
        </li>
    );
};

export default QuestionCard;
