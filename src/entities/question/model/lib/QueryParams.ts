export const toPositiveNumber = <T extends number | null>(
    value: string | null,
    fallback: T,
): number | T => {
    const num = Number(value);
    return Number.isFinite(num) && num > 0 ? num : fallback;
};

export const toNumberArray = (value: string | null) => {
    if (!value) {
        return;
    }
    return value.split(",").filter(Boolean).map(Number).filter(isFinite);
};
