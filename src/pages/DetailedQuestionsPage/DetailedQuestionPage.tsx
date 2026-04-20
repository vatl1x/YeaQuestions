import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDisclosure } from "../../hooks/useDisclosure";
import QuestionDetailCard from "../../widgets/QuestionDetailCard/QuestionDetailCard";
import QuestionNavigation from "../../widgets/QuestionNavigation/QuestionNavigation";
import MetricsCard from "../../widgets/MetricsCard/MetricsCard";
import GuruCard from "../../widgets/GuruCard/GuruCard";
import ShortAnswer from "../../widgets/ShortAnswer/ShortAnswer";
import LongAnswer from "../../widgets/LongAnswer/LongAnswer";
import Skeleton from "../../ui/Skeleton/Skeleton";
import ArrowIcon from "../../assets/icons/arrow-left.svg?react";
import styles from "./DetailedQuestionPage.module.scss";
import { useGetQuestionBySlugQuery } from "../../store/services/questionsApi";
import type { QuestionNavigationState } from "../../types/question";

const DetailedQuestionPage = () => {
    const { slug } = useParams<{ slug: string }>();
    //тут currentData чтобы скелетон работал при пагинации детальных вопросов
    const { currentData, isLoading, isFetching, error } =
        useGetQuestionBySlugQuery(slug!, {
            skip: !slug,
        });
    const { isOpen, toggle, close } = useDisclosure();
    const location = useLocation();
    const state = location.state as QuestionNavigationState | null;
    const navigate = useNavigate();
    
    //для стабильного возврата назад(идем по сохрненному пути from | запасной /questions)
    const handleBack = () => navigate(state?.from ?? "/questions");

    const showSkeleton = (isLoading || isFetching) && !currentData;

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
                    <ShortAnswer shortAnswer={currentData.shortAnswer} />
                    <LongAnswer longAnswer={currentData.longAnswer} />
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

export default DetailedQuestionPage;
