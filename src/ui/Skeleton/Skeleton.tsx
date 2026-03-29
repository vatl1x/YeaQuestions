import type { DirectionType, SkeletonType } from "../../types/skeleton";
import styles from "./Skeleton.module.scss";

interface Props {
    type?: SkeletonType;
    count?: number;
    direction?: DirectionType;
    height?: string;
    width?: string;
    borderRadius?: string;
}

const skeletonClasses: Record<SkeletonType, string> = {
    text: styles.text,
    button: styles.button,
    question: styles.question,
    pagination: styles.pagination,
};

const Skeleton = ({
    type = "question",
    count = 1,
    direction = "column",
    width,
    height,
    borderRadius,
}: Props) => {
    const itemsStyles = {
        ...(width && { width }),
        ...(height && { height }),
        ...(borderRadius && { borderRadius }),
    };

    const blockList = (
        <ul
            className={
                direction === "column" ? styles.columnList : styles.rowList
            }
        >
            {[...Array(count)].map((_, idx) => (
                <li
                    key={idx}
                    className={skeletonClasses[type]}
                    style={itemsStyles}
                ></li>
            ))}
        </ul>
    );

    if (type === "question") {
        return (
            <div className={styles.questionListSkeleton}>
                <div className={styles.header}>
                    <div className={styles.headerTitle} />
                    <div className={styles.headerButton} />
                </div>
                {blockList}
            </div>
        );
    }
    return count > 1 ? (
        blockList
    ) : (
        <li className={skeletonClasses[type]} style={itemsStyles}></li>
    );
};

export default Skeleton;
