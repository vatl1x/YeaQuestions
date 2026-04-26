import { useEffect, useMemo, useRef } from "react";
import hljs from "highlight.js";
import DOMPurify from "dompurify";
import "highlight.js/styles/atom-one-dark.css";
import styles from "./HtmlContent.module.scss";

interface Props {
    html: string;
    isOpen?: boolean;
}

export const HtmlContent = ({ html, isOpen = true }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    //подсветка кода
    useEffect(() => {
        if (!isOpen) return;

        ref.current?.querySelectorAll("pre code").forEach((block) => {
            hljs.highlightElement(block as HTMLElement);
        });
    }, [html, isOpen]);

    //чистка мусора(пустых строк) с апи и санитайз
    const safeHtml = useMemo(
        () =>
            DOMPurify.sanitize(
                html.replace(
                    /(?:<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>\s*)+$/gi,
                    "",
                ),
            ),
        [html],
    );

    return (
        <div
            ref={ref}
            className={styles.htmlContent}
            dangerouslySetInnerHTML={{
                __html: safeHtml,
            }}
        />
    );
};
