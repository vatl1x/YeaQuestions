import Card from "../../ui/Card/Card";
import HtmlContent from "../../ui/HtmlContent/HtmlContent";
import styles from "./ShortAnswer.module.scss";

interface Props {
    shortAnswer: string;
}

const ShortAnswer = ({ shortAnswer }: Props) => {
    return (
        <Card className={styles.shortAnswer}>
            <p className={styles.shortAnswerTitle}>Краткий ответ</p>
            <div className={styles.shortAnswerDescription}>
                <HtmlContent html={shortAnswer}/>
            </div>
        </Card>
    );
};

export default ShortAnswer;
