import { usePage } from "@inertiajs/inertia-react";

export function useProps() {
    const { props } = usePage();
    return props;
}
