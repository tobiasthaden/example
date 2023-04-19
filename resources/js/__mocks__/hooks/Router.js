export function useRouter() {
    console.warn("🚨 [useRouter] is using a mocked version.");

    const defaults = [];

    const location = window.location.href;

    const port = window.location.port;

    const url = window.location.origin;

    const routes = {};

    function route(key, params = undefined) {
        return "#";
    }

    function is(key, params = undefined) {
        return false;
    }

    return { defaults, location, port, url, routes, route, is };
}
