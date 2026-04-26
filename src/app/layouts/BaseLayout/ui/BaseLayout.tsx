import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import styles from "./BaseLayout.module.scss";

export const BaseLayout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
