export function useToast() {
    console.warn("🚨 [useToast] is using a mocked version.");

    return function (key) {
        return [];
    };
}
