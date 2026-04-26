import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./constants";
import styles from "./NavLinks.module.scss";
import clsx from "clsx";

interface Props {
    variant?: "desktop" | "mobile";
}

export const NavLinks = ({ variant = "desktop" }: Props) => {
    return (
        <div className={styles.navLinkList}>
            {NAV_LINKS.map((link) => (
                <NavLink
                    to={link.href}
                    key={link.label}
                    className={({ isActive }) =>
                        clsx(styles.navLink, {
                            [styles.navLinkMobile]: variant === "mobile",
                            [styles.navLinkActive]: isActive,
                        })
                    }
                >
                    <span className={styles.navLinkText}>{link.label}</span>
                </NavLink>
            ))}
        </div>
    );
};
