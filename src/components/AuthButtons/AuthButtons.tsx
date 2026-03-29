import { Link } from "react-router-dom";
import clsx from "clsx";
import loginIcon from "../../assets/icons/authBtns/login-icon.svg";
import regIcon from "../../assets/icons/authBtns/reg-icon.svg";
import styles from "./AuthButtons.module.scss";

interface Props {
    variant?: "desktop" | "mobile";
}

const AuthButtons = ({ variant = "desktop" }: Props) => {
    return (
        <div
            className={clsx({
                [styles.btnsWrap]: variant === "desktop",
                [styles.btnsWrapMobile]: variant === "mobile",
            })}
        >
            <Link
                to={"/login"}
                className={clsx({
                    [styles.loginBtn]: variant === "desktop",
                    [styles.loginBtnMobile]: variant === "mobile",
                })}
            >
                {variant === "mobile" && (
                    <img src={loginIcon} width="24px" height="24px"></img>
                )}
                Вход
            </Link>
            <Link
                to={"/registration"}
                className={clsx({
                    [styles.registrationBtn]: variant === "desktop",
                    [styles.registrationBtnMobile]: variant === "mobile",
                })}
            >
                {variant === "mobile" && (
                    <img src={regIcon} width="24px" height="24px"></img>
                )}
                Регистрация
            </Link>
        </div>
    );
};

export default AuthButtons;
