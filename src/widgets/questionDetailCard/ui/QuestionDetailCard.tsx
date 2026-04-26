import { Card } from "@/shared/ui";
import yeahubIcon from "@/shared/assets/icons/yeahub-square.png";
import sidebarBtn from "@/shared/assets/icons/sidebar-button.svg";
import styles from "./QuestionDetailCard.module.scss";

interface Props {
    title: string;
    description: string;
    imageSrc: string | null;
    onSidebarToggle: () => void;
}

export const QuestionDetailCard = ({
    title,
    description,
    imageSrc,
    onSidebarToggle,
}: Props) => {
    return (
        <Card className={styles.card}>
            <img
                src={imageSrc ?? yeahubIcon}
                className={styles.yeaIcon}
                alt="Картинка к вопросу"
                width={160}
                height={160}
            />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <button
                className={styles.sidebarToggleButton}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={onSidebarToggle}
                type="button"
            >
                <img
                    className={styles.buttonIcon}
                    src={sidebarBtn}
                    alt=""
                    width={36}
                    height={36}
                />
            </button>
        </Card>
    );
};
