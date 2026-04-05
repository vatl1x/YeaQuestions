import { useNavigate, useParams } from "react-router-dom";
import { useDisclosure } from "../../hooks/useDisclosure";
import { useDetailedQuestion } from "../../hooks/useDetailedQuestion";
import QuestionDetailCard from "../../widgets/QuestionDetailCard/QuestionDetailCard";
import QuestionNavigation from "../../widgets/QuestionNavigation/QuestionNavigation";
import MetricsCard from "../../widgets/MetricsCard/MetricsCard";
import GuruCard from "../../widgets/GuruCard/GuruCard";
import ShortAnswer from "../../widgets/ShortAnswer/ShortAnswer";
import LongAnswer from "../../widgets/LongAnswer/LongAnswer";
import Skeleton from "../../ui/Skeleton/Skeleton";
import ArrowIcon from "../../assets/icons/arrow-left.svg?react";
import styles from "./DetailedQuestionPage.module.scss";

const DetailedQuestionPage = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = useDetailedQuestion(slug!);
    const { isOpen, toggle, close } = useDisclosure();
    const navigate = useNavigate();

    if (isLoading && !data) {
        return (
            <div className="container">
                <Skeleton type="question" count={10} direction="column" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container">
                <div className={styles.errorLayout}>
                    <h2 className={styles.errorTitle}>Ой, что-то сломалось!</h2>
                    <p className={styles.errorTitle}>{error}</p>
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="container">
            <button className={styles.prevPage} onClick={() => navigate(-1)}>
                <ArrowIcon width={24} height={24} />
                Назад
            </button>
            <div className={styles.layout}>
                <div className={styles.question}>
                    <QuestionDetailCard
                        title={data.title}
                        description={data.description}
                        imageSrc={data.imageSrc}
                        onSidebarToggle={toggle}
                    />
                    <QuestionNavigation />
                    <ShortAnswer shortAnswer={data.shortAnswer} />
                    <LongAnswer longAnswer={data.longAnswer} />
                </div>
                <div className={styles.questionSidebar}>
                    <MetricsCard
                        complexity={data.complexity}
                        rate={data.rate}
                        questionSkills={data.questionSkills}
                        keywords={data.keywords}
                        createdBy={data.createdBy}
                    />
                    <GuruCard />
                </div>
                {isOpen && (
                    <div className={styles.sidebarPopover}>
                        <MetricsCard
                            onMetricClose={close}
                            complexity={data.complexity}
                            rate={data.rate}
                            questionSkills={data.questionSkills}
                            keywords={data.keywords}
                            createdBy={data.createdBy}
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
