import { Link } from "react-router-dom";
import loginIcon from "@/shared/assets/icons/login-icon.svg";
import regIcon from "@/shared/assets/icons/reg-icon.svg";
import styles from "./AuthButtons.module.scss";
import clsx from "clsx";

interface Props {
    variant?: "desktop" | "mobile";
}

export const AuthButtons = ({ variant = "desktop" }: Props) => {
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
                    <img src={loginIcon} alt="" width="24px" height="24px" />
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
                    <img src={regIcon} alt="" width="24px" height="24px" />
                )}
                Регистрация
            </Link>
        </div>
    );
};
