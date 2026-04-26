import { Card } from "@/shared/ui";
import { SOCIALS } from "../model/constants";
import avatar from "@/shared/assets/icons/guru-avatar.png";
import styles from "./GuruCard.module.scss";

//захардкодил так как данных нет в апи
export const GuruCard = () => {
    return (
        <Card className={styles.guru}>
            <div className={styles.header}>
                <img
                    src={avatar}
                    alt="Аватар Ruslan Kuyanets"
                    width={45}
                    height={45}
                />
                <div>
                    <p className={styles.name}>Ruslan Kuyanets</p>
                    <p className={styles.role}>React Guru</p>
                </div>
            </div>

            <p className={styles.description}>
                Guru – это эксперты YeaHub, которые помогают развивать
                комьюнити.
            </p>
            <div className={styles.socials}>
                {SOCIALS.map(({ title, href, Icon }) => (
                    <a
                        href={href}
                        key={title}
                        title={title}
                        className={styles.socialLink}
                    >
                        <Icon width={24} height={24} className={styles.icon} />
                    </a>
                ))}
            </div>
        </Card>
    );
};
