import type { QuestionSkill } from "../../model/types";
import styles from "./QuestionSkills.module.scss";

interface Props {
    skills: QuestionSkill[];
}

export const QuestionSkills = ({ skills }: Props) => {
    return (
        <div className={styles.skills}>
            <p className={styles.label}>Навыки:</p>
            <div className={styles.skillsList}>
                {skills?.map((skill) => (
                    <div key={skill.id} className={styles.skill}>
                        {!!skill.imageSrc && (
                            <img src={skill.imageSrc} width={20} height={20} />
                        )}
                        <span>{skill.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};