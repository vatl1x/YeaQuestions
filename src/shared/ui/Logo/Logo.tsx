import { Link } from "react-router-dom";
import logo from "@/shared/assets/icons/yeahub-icon.svg";
import textLogoDark from "@/shared/assets/icons/yeahub-text-icon-dark.svg";
import textLogoLight from "@/shared/assets/icons/yeahub-text-icon-light.svg";
import styles from "./Logo.module.scss";

interface Props {
    showIcon?: boolean;
    showText?: boolean;
    textColor?: "dark" | "white";
    hideTextOnMobile?: boolean;
}

export const Logo = ({
    showIcon = true,
    showText = true,
    textColor = "dark",
    hideTextOnMobile = false,
}: Props) => {
    return (
        <Link to="/" className={styles.logo}>
            {showIcon && (
                <img
                    src={logo}
                    alt={showText ? "" : "YeaHub"}
                    width="33"
                    height="33"
                />
            )}
            {showText && (
                <img
                    src={textColor === "dark" ? textLogoDark : textLogoLight}
                    alt="YeaHub"
                    width={98}
                    height={22}
                    className={hideTextOnMobile ? styles.hideTextMobile : ""}
                />
            )}
        </Link>
    );
};
