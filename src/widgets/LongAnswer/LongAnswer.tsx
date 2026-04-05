import { useEffect, useRef, useState } from "react";
import Card from "../../ui/Card/Card";
import HtmlContent from "../../ui/HtmlContent/HtmlContent";
import arrowUp from "../../assets/icons/arrow-up.svg";
import styles from "./LongAnswer.module.scss";

interface Props {
    longAnswer: string;
}

const LongAnswer = ({ longAnswer }: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState("300px");
    const contentRef = useRef<HTMLDivElement>(null);

    const handleExpand = () => {
        const height = contentRef.current?.scrollHeight;
        if (!height) return;

        setMaxHeight(`${height}px`);
        setIsExpanded(true);
    };

    //сброс при "пагинации" детального вопроса
    useEffect(() => {
        setMaxHeight("300px");
        setIsExpanded(false);
    }, [longAnswer]);

    return (
        <Card className={styles.longAnswer}>
            <p className={styles.longAnswerTitle}>Развёрнутый ответ</p>
            <div
                ref={contentRef}
                className={`${styles.longAnswerDescription} ${isExpanded ? styles.expanded : ""}`}
                style={{ maxHeight }}
            >
                <HtmlContent html={longAnswer} />
            </div>
            {!isExpanded && (
                <button
                    className={styles.btnExpand}
                    onClick={handleExpand}
                    type="button"
                >
                    Развернуть
                    <img
                        className={styles.btnExpandIcon}
                        src={arrowUp}
                        alt=""
                        width={20}
                        height={20}
                    />
                </button>
            )}
        </Card>
    );
};

export default LongAnswer;
