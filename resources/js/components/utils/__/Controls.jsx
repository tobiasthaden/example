import Job from "@/support/Job";
import classNames from "classnames";
import React, { useEffect } from "react";
import { Media } from "@/components/icons";
import { useState } from "react";

function Button({ className, ...props }) {
    return (
        <button
            className={classNames(
                "cursor-pointer ease-in-out duration-300",
                className
            )}
            {...props}
        />
    );
}

function Range({ className, value, max, onChange }) {
    const [progress, setProgress] = useState(0);
    const [controlled, setControlled] = useState(false);

    const jobs = {
        controlled: new Job(),
        timeupdate: new Job(),
    };

    function handleInput(e) {
        setControlled(true);

        jobs.controlled.replace(() => setControlled(false), 100);
        jobs.timeupdate.replace(() => onChange((e.target.value / 100) * max));

        setProgress(e.target.value);
    }

    useEffect(() => {
        if (!controlled) {
            setProgress(Math.round((value / max) * 100));
        }
    }, [value, max]);

    return (
        <div className="w-full h-2 relative bg-black/20 rounded-full overflow-hidden">
            <div
                className={classNames(
                    "h-full bg-black",
                    controlled
                        ? "transition-none"
                        : "transition-all ease-linear duration-500"
                )}
                style={{ width: progress + "%" }}
            ></div>
            <input
                className="absolute inset-0 w-full h-full opacity-0"
                type="range"
                min="0"
                max="100"
                value={Number.isNaN(progress) ? 0 : progress ?? 0}
                onInput={handleInput}
            />
        </div>
    );
}

export function Audio({
    currentTime,
    paused,
    ended,
    volume,
    play,
    pause,
    updateTime,
    updateVolume,
    duration,
    ...props
}) {
    return (
        <div {...props}>
            <Button onClick={() => (paused ? play() : pause())}>
                {paused ? (
                    <Media.Play className="block w-6 h-6" />
                ) : (
                    <Media.Pause className="block w-6 h-6" />
                )}
            </Button>
            <Range max={duration} value={currentTime} onChange={updateTime} />
        </div>
    );
}

export function Video({
    currentTime,
    paused,
    ended,
    volume,
    muted,
    play,
    pause,
    mute,
    unmute,
    updateTime,
    updateVolume,
    duration,
    fullscreen,
    ...props
}) {
    return (
        <div {...props}>
            <Button onClick={() => (paused ? play() : pause())}>
                {paused ? (
                    <Media.Play className="block w-6 h-6" />
                ) : (
                    <Media.Pause className="block w-6 h-6" />
                )}
            </Button>
            <Range max={duration} value={currentTime} onChange={updateTime} />
            <Button onClick={() => (muted ? unmute() : mute())}>
                {muted ? (
                    <Media.Mute className="block w-6 h-6" />
                ) : (
                    <Media.Loud className="block w-6 h-6" />
                )}
            </Button>
            {fullscreen.allowed && (
                <Button
                    onClick={() =>
                        fullscreen.active
                            ? fullscreen.leave()
                            : fullscreen.enter()
                    }
                >
                    <Media.Fullscreen className="block w-6 h-6" />
                </Button>
            )}
        </div>
    );
}
