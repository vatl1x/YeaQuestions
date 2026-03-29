import React, { useEffect } from "react";

const useClickOutside = <T extends HTMLElement>(
    ref: React.RefObject<T | null>,
    callback: (() => void) | undefined,
) => {
    useEffect(() => {
        if (!callback) return;

        const handleClick = (e: MouseEvent | TouchEvent) => {
            const element = ref?.current;
            if (!element) return;

            if (!element.contains(e.target as Node)) {
                callback();
            }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [ref, callback]);
};

export default useClickOutside;
