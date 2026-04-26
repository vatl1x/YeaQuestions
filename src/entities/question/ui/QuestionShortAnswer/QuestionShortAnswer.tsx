import { Card } from "@/shared/ui";
import { HtmlContent } from "@/shared/ui";
import styles from "./QuestionShortAnswer.module.scss";

interface Props {
    shortAnswer: string;
}

export const QuestionShortAnswer = ({ shortAnswer }: Props) => {
    return (
        <Card className={styles.shortAnswer}>
            <p className={styles.shortAnswerTitle}>Краткий ответ</p>
            <div className={styles.shortAnswerDescription}>
                <HtmlContent html={shortAnswer} />
            </div>
        </Card>
    );
};