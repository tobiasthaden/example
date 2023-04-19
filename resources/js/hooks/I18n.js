import { useProps } from "./Props";

export function useI18n() {
    const { i18n } = useProps();

    return function (key, placeholders = {}) {
        const result = !!i18n && i18n.hasOwnProperty(key) ? i18n[key] : key;

        return result.replace(/\{([^\{\}]*)\}/g, (match) => {
            const placeholder = match.slice(1, -1);
            return placeholders.hasOwnProperty(placeholder)
                ? placeholders[placeholder]
                : match;
        });
    };
}
