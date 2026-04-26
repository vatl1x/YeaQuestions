import styles from "./NavDropdown.module.scss";

interface Props {
    children: React.ReactNode;
}

export const NavDropdown = ({ children }: Props) => {
    return <div className={styles.navDropdown}>{children}</div>;
};
