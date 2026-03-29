import { useRef, useState } from "react";
import Logo from "../../ui/Logo/Logo";
import NavLinks from "../../components/NavLinks/NavLinks";
import NavDropdown from "../../components/NavDropdown/NavDropdown";
import AuthButtons from "../../components/AuthButtons/AuthButtons";
import AuthDropdown from "../../components/AuthDropdown/AuthDropdown";
import useClickOutside from "../../hooks/useClickOutside";
import ArrowIcon from "../../assets/icons/arrow-up.svg";
import burger from "../../assets/icons/burger-btn.svg";
import styles from "./Header.module.scss";

const Header = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const navRef = useRef<HTMLDivElement>(null);
    const authRef = useRef<HTMLDivElement>(null);

    const toggleNav = () => {
        setIsNavOpen((prev) => !prev);
    };
    const toggleAuth = () => {
        setIsAuthOpen((prev) => !prev);
    };

    useClickOutside(navRef, () => setIsNavOpen(false));
    useClickOutside(authRef, () => setIsAuthOpen(false));

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.headerContent}>
                    <div className={styles.headerNav}>
                        <Logo hideTextOnMobile />

                        <nav>
                            <ul className={styles.nav}>
                                <NavLinks />
                            </ul>
                            <a
                                className={styles.navMenu}
                                onMouseDown={(e) => e.stopPropagation()}
                                onClick={toggleNav}
                            >
                                Подготовка
                                <img
                                    src={ArrowIcon}
                                    alt=""
                                    className={`${styles.arrow} ${isNavOpen ? styles.arrowOpen : ""}`}
                                />
                            </a>
                            {isNavOpen && (
                                <div ref={navRef}>
                                    <NavDropdown>
                                        <NavLinks variant="mobile" />
                                    </NavDropdown>
                                </div>
                            )}
                        </nav>
                    </div>

                    <div className={styles.authWrap}>
                        <AuthButtons />
                    </div>
                    <button
                        className={styles.burgerBtn}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={toggleAuth}
                    >
                        <img src={burger} alt="" />
                    </button>
                    {isAuthOpen && (
                        <AuthDropdown ref={authRef}>
                            <AuthButtons variant="mobile" />
                        </AuthDropdown>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
