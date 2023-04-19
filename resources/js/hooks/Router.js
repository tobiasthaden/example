import ziggy from "ziggy-js";
import { useProps } from "./Props";

export function useRouter() {
    const router = (({ ziggy }) => ziggy)(useProps());

    function route(key, params = undefined) {
        return ziggy(key, params, undefined, router);
    }

    function is(key, params = undefined) {
        return router.location === route(key, params);
    }

    return { ...router, route, is };
}
