import { useState } from "react";

//  --- переиспользовать в других модалках и поповерах  --- 
export const useDisclosure = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen((prev) => !prev);
    };
    const close = () => {
        setIsOpen(false);
    };
    return { isOpen, toggle, close };
};
