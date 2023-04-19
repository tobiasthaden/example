import { createOpenGraphResponse } from "@/support/OpenGraph";
import { useEffect, useState } from "react";
import { useRouter } from "@/hooks/Router";

export function useOpenGraph(url) {
    const { route } = useRouter();
    const [response, setResponse] = useState(createOpenGraphResponse(null, {}));

    function handle({ data }) {
        const { type, ...attrs } = data;
        const [namespace, meta] = type.split(".");

        setResponse(createOpenGraphResponse(namespace, { meta, ...attrs }));
    }

    useEffect(() => {
        axios.post(route("system::og.fetch"), { url }).then(handle);
    }, [url]);

    return response;
}
