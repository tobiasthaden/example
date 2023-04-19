import { usePage } from "@inertiajs/inertia-react";

export function useToast() {
    const { flash } = usePage().props;

    return flash ?? [];
}
