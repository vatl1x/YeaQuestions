import { forwardRef } from "react";
import styles from "./AuthDropdown.module.scss";

interface Props {
    children: React.ReactNode;
}

const AuthDropdown = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
    return (
        <div ref={ref} className={styles.authDropdown}>
            {children}
        </div>
    );
});

export default AuthDropdown;
