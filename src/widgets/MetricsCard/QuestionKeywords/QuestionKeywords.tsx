import styles from "./QuestionKeywords.module.scss";

interface Props {
    keywords: string[];
}

const QuestionKeywords = ({ keywords }: Props) => {
    return (
        <div className={styles.keywords}>
            <p className={styles.label}>Ключевые слова:</p>
            <div className={styles.keywordsList}>
                {keywords?.map((el) => (
                    <span key={el}>#{el}</span>
                ))}
            </div>
        </div>
    );
};

export default QuestionKeywords;
