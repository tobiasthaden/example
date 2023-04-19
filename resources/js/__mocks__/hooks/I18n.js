export function useI18n() {
    console.warn("🚨 [useI18n] is using a mocked version.");

    return function (key, placeholders = {}) {
        return key.replace(/\{([^\{\}]*)\}/g, (match) => {
            const placeholder = match.slice(1, -1);

            return placeholders.hasOwnProperty(placeholder)
                ? placeholders[placeholder]
                : match;
        });
    };
}
