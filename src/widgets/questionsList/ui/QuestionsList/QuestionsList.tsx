import { useMemo } from "react";
import { Pagination } from "@/shared/ui";
import { Card } from "@/shared/ui";
import QuestionCard from "../QuestionCard/QuestionCard";
import withSkeleton from "@/shared/lib/hocs/withSkeleton";
import { useQuestionsQuery } from "@/entities/question";
import { DEFAULT_QUERY } from "../../model/constants";
import { useGetSpecializationsQuery } from "@/entities/specialization";
import filterBtn from "../../assets/filter-btn.svg";
import styles from "./QuestionsList.module.scss";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop";
import type { Question } from "@/entities/question/model/types";

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
    const { data } = useGetSpecializationsQuery();

    const specializations = data?.data ?? [];

    const specializationTitle = specializations.find(
        (item) => item.id === query.specializationId,
    )?.title;

    const slugs = useMemo(
        () => questions.map((question) => question.slug),
        [questions],
    );

    useScrollToTop(currentPage);

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
                        {questions.map((question, index) => (
                            <QuestionCard
                                key={question.slug}
                                title={question.title}
                                slug={question.slug}
                                rate={question.rate}
                                complexity={question.complexity}
                                shortAnswer={question.shortAnswer}
                                slugs={slugs}
                                index={index}
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

export { QuestionsListWithSkeleton as QuestionsList };
