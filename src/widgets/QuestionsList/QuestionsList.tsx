import { useEffect } from "react";
import { useFilters } from "../../context/FiltersContext";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../ui/Card/Card";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import { useQuestionsQuery } from "../../hooks/useQuestionsQuery";
import { DEFAULT_QUERY } from "./questionsList.constants";
import filterBtn from "../../assets/icons/filter-btn.svg";
import styles from "./QuestionsList.module.scss";
import type { Question } from "../../types/question";

interface Props {
    onFilterToggle: () => void;
    questions: Question[];
    total: number;
    limit: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    error: string | null;
}

const QuestionsList = ({
    onFilterToggle,
    questions,
    total,
    limit,
    currentPage,
    setCurrentPage,
    error,
}: Props) => {
    const { query, setQuery } = useQuestionsQuery();
    const { specializations } = useFilters();

    const specializationTitle = specializations?.find(
        (item) => item.id === query.specializationId,
    )?.title;

    useEffect(() => {
        //прокрутка и ждем чтоб все прогрузилось, иначе лагает
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
    }, [currentPage]);

    if (error) {
        return (
            <div className={styles.questionList}>
                <div>{error}</div>
            </div>
        );
    }

    return (
        <Card className={styles.questionList}>
            <div className={styles.listHeader}>
                <h1 className={styles.title}>
                    Вопросы по{" "}
                    {specializationTitle
                        ? specializationTitle
                        : "всем специализациям"}
                </h1>
                <button
                    className={styles.filterBtnIcon}
                    onClick={onFilterToggle}
                >
                    <img src={filterBtn} alt="" width={22} height={24} />
                </button>
            </div>

            {questions?.length ? (
                <>
                    <ul className={styles.accordion}>
                        {questions.map((question) => (
                            <QuestionCard
                                key={question.slug}
                                title={question.title}
                                slug={question.slug}
                                rate={question.rate}
                                complexity={question.complexity}
                                shortAnswer={question.shortAnswer}
                            />
                        ))}
                    </ul>
                    <div className={styles.paginationWrap}>
                        <Pagination
                            total={total}
                            currentPage={currentPage}
                            onChangePage={setCurrentPage}
                            limit={limit}
                        />
                    </div>
                </>
            ) : (
                <div className={styles.notQuestions}>
                    <strong>К сожалению, по запросу ничего не найдено.</strong>
                    <p>
                        Попробуйте изменить запрос или воспользуйтесь нашими
                        категориями.
                    </p>
                    <button
                        onClick={() => setQuery(DEFAULT_QUERY)}
                        className={styles.btnClearFilter}
                    >
                        Сбросить фильтр
                    </button>
                </div>
            )}
        </Card>
    );
};

const QuestionsListWithSkeleton = withSkeleton<Props>(
    QuestionsList,
    "question",
    10,
    "column",
);

export default QuestionsListWithSkeleton;
