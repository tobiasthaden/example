import { Direction } from "@/components/icons";

export function Prev(props) {
    return (
        <button className="absolute left-0 top-1/2" {...props}>
            <Direction.West className="w-4 h-4 -translate-y-1/2" />
        </button>
    );
}

export function Next(props) {
    return (
        <button className="absolute right-0 top-1/2" {...props}>
            <Direction.East className="w-4 h-4 -translate-y-1/2" />
        </button>
    );
}
