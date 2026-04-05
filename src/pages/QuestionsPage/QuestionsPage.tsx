import { useState } from "react";
import QuestionFilter from "../../widgets/QuestionsFilter/QuestionsFilter";
import QuestionList from "../../widgets/QuestionsList/QuestionsList";
import { useQuestions } from "../../hooks/useQuestions";
import styles from "./QuestionsPage.module.scss";

const QuestionsPage = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const {
        questions,
        total,
        limit,
        currentPage,
        setCurrentPage,
        isLoading,
        error,
    } = useQuestions();


    return (
        <div className="container">
            <div className={styles.layout}>
                <QuestionList
                    isLoading={isLoading}
                    questions={questions ?? []}
                    total={total}
                    limit={limit}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    error={error}
                    onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
                />

                <div className={styles.filterWrap}>
                    <QuestionFilter />
                </div>
                {isFilterOpen && (
                    <div className={styles.filterPopover}>
                        <QuestionFilter
                            onFilterClose={() => setIsFilterOpen(false)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuestionsPage;
