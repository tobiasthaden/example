import { useOpenGraph } from "@/hooks/OpenGraph";
import { capitalize } from "lodash-es";
import * as Card from "@/components/OpenGraph";

export function handleOpenGraph(url) {
    const [type, response] = useOpenGraph(url);

    const Component = Card[capitalize(type)] ?? Card.Website;

    return [Component, response];
}
