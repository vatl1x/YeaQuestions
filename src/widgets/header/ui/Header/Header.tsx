import { useState, useRef } from "react";
import { Logo } from "@/shared/ui/Logo";
import { NavLinks } from "../NavLinks/NavLinks";
import { NavDropdown } from "../NavDropdown/NavDropdown";
import { AuthButtons } from "@/features/authentication";
import AuthDropdown from "@/features/authentication/ui/AuthDropdown/AuthDropdown";
import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import ArrowIcon from "@/shared/assets/icons/arrow-up.svg";
import burger from "@/shared/assets/icons/burger-btn.svg";
import styles from "./Header.module.scss";

export const Header = () => {
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
