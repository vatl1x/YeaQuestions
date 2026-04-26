import { QuestionDetailCard } from "@/widgets/questionDetailCard";
import { QuestionNavigation } from "@/widgets/questionNavigation";
import { MetricsCard } from "@/widgets/metricsCard";
import { GuruCard } from "@/widgets/guruCard";
import { QuestionShortAnswer } from "@/entities/question";
import { QuestionLongAnswer } from "@/entities/question";
import { useDetailedQuestionPage } from "../model/hooks/useDetailedQuestionPage";
import { Skeleton } from "@/shared/ui/Skeleton";
import ArrowIcon from "@/shared/assets/icons/arrow-left.svg?react";
import styles from "./DetailedQuestionPage.module.scss";

export const DetailedQuestionPage = () => {
    const { data, ui, actions } = useDetailedQuestionPage();

    const currentData = data;
    const { showSkeleton, isOpen, error } = ui;
    const { handleBack, toggle, close } = actions;

    if (showSkeleton) {
        return (
            <div className="container">
                <Skeleton type="question" count={10} direction="column" />
            </div>
        );
    }

    if (error && !currentData) {
        const errorMessage =
            "status" in error
                ? `Ошибка загрузки: ${String(error.status)}`
                : "Ошибка загрузки";
        return (
            <div className="container">
                <div className={styles.errorLayout}>
                    <h2 className={styles.errorTitle}>Ой, что-то сломалось!</h2>
                    <p className={styles.errorMessage}>{errorMessage}</p>
                </div>
            </div>
        );
    }

    if (!currentData) return null;

    return (
        <div className="container">
            <button className={styles.prevPage} onClick={handleBack}>
                <ArrowIcon width={24} height={24} />
                Назад
            </button>
            <div className={styles.layout}>
                <div className={styles.question}>
                    <QuestionDetailCard
                        title={currentData.title}
                        description={currentData.description}
                        imageSrc={currentData.imageSrc}
                        onSidebarToggle={toggle}
                    />
                    <QuestionNavigation />
                    <QuestionShortAnswer
                        shortAnswer={currentData.shortAnswer}
                    />
                    <QuestionLongAnswer longAnswer={currentData.longAnswer} />
                </div>
                <div className={styles.questionSidebar}>
                    <MetricsCard
                        complexity={currentData.complexity}
                        rate={currentData.rate}
                        questionSkills={currentData.questionSkills}
                        keywords={currentData.keywords}
                        createdBy={currentData.createdBy}
                    />
                    <GuruCard />
                </div>
                {isOpen && (
                    <div className={styles.sidebarPopover}>
                        <MetricsCard
                            onMetricClose={close}
                            complexity={currentData.complexity}
                            rate={currentData.rate}
                            questionSkills={currentData.questionSkills}
                            keywords={currentData.keywords}
                            createdBy={currentData.createdBy}
                        />
                    </div>
                )}
                <div className={styles.guruCardMobile}>
                    <GuruCard />
                </div>
            </div>
        </div>
    );
};
