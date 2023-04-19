import { useToast } from "@/hooks/Toast";
import Toast, { Success, Error } from "@/components/Toast";

export function handleToasts() {
    const [type, message] = useToast();

    const availableToasts = {
        error: Error,
        succes: Success,
    };

    return [availableToasts[type] ?? Toast, message];
}
