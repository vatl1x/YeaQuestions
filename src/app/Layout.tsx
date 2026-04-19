import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";
import Footer from "../widgets/Footer/Footer";
import styles from "./Layout.module.scss";

const Layout = () => {
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

export default Layout;
