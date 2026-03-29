import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import styles from "./HtmlContent.module.scss";

interface Props {
    html: string;
    isOpen: boolean;
}

const HtmlContent = ({ html, isOpen }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    //подсветка кода
    useEffect(() => {
        if (!isOpen) return;
        ref.current?.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block as HTMLElement);
        });
    }, [html, isOpen]);

    return (
        <div
            ref={ref}
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default HtmlContent;
