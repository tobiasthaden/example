import { useRef } from "react";
import { useAudio } from "@/hooks";
import { Audio as Controls } from "@/components/utils/__/Controls";

export default function Audio({ className, ...props }) {
    const audio = useRef();
    const handles = useAudio(audio);

    return (
        <div className={className}>
            <audio className="w-full" {...props} ref={audio} />
            <Controls
                className="flex w-full items-center space-x-4"
                {...handles}
            />
        </div>
    );
}
