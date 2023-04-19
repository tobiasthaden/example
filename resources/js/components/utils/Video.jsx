import { useRef } from "react";
import { useVideo, useFullscreen } from "@/hooks";
import { Video as Controls } from "@/components/utils/__/Controls";

export default function Video({ className, controls, ...props }) {
    const video = useRef();
    const player = useRef();
    const handles = useVideo(video);
    const fullscreen = useFullscreen(player);

    return (
        <div ref={player} className={className}>
            <video className="w-full" {...props} ref={video} />
            {controls && (
                <Controls
                    className="flex w-full items-center space-x-4 py-2"
                    fullscreen={fullscreen}
                    {...handles}
                />
            )}
        </div>
    );
}
