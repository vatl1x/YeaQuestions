import { Link } from "react-router-dom";
import logo from "../../assets/icons/yeahub-icon.svg";
import textLogoDark from "../../assets/icons/yeahub-text-icon-dark.svg";
import textLogoLight from "../../assets/icons/yeahub-text-icon-light.svg";
import styles from "./Logo.module.scss";

interface Props {
    showIcon?: boolean;
    showText?: boolean;
    textColor?: "dark" | "white";
    hideTextOnMobile?: boolean;
}

const Logo = ({
    showIcon = true,
    showText = true,
    textColor = "dark",
    hideTextOnMobile = false,
}: Props) => {
    return (
        <Link to="/" className={styles.logo}>
            {showIcon && <img src={logo} width="33" height="33" />}
            {showText && (
                <img
                    src={textColor === "dark" ? textLogoDark : textLogoLight}
                    width={98}
                    height={22}
                    className={hideTextOnMobile ? styles.hideTextMobile : ""}
                />
            )}
        </Link>
    );
};

export default Logo;
