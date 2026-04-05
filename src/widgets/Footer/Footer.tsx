import { Link } from "react-router-dom";
import { SOCIALS } from "./footer.constants";
import Logo from "../../ui/Logo/Logo";
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContent}>
                    <div className={styles.footerMain}>
                        <Logo showIcon={false} textColor="white" />
                        <p className={styles.footerTitle}>
                            Выбери, каким будет IT завтра, вместе c нами
                        </p>
                        <p className={styles.footerDescription}>
                            YeaHub — это полностью открытый проект, призванный
                            объединить и улучшить IT-сферу. Наш исходный
                            код доступен для просмотра на GitHub. Дизайн проекта
                            также открыт для ознакомления в Figma.
                        </p>
                    </div>
                    <div className={styles.footerExtra}>
                        <p className={styles.copyright}>© 2026 YeaHub</p>
                        <div className={styles.links}>
                            <Link to="/docs" className={styles.footerLink}>
                                Документы
                            </Link>
                            <Link to="/media" className={styles.footerLink}>
                                Медиа
                            </Link>
                            <div className={styles.socials}>
                                {SOCIALS.map(({ title, href, Icon }) => (
                                    <a
                                        href={href}
                                        key={title}
                                        title={title}
                                        className={styles.socialLink}
                                    >
                                        <Icon width={28} height={28} className={styles.icon}/>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
