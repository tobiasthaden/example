import { useAudio, useVideo } from "@/hooks";
import classNames from "classnames";
import { useRef } from "react";
import * as Icon from "./icons/Media";

function Card({ className, ...props }) {
    return (
        <div
            className={classNames(
                "overflow-hidden shadow rounded-skin",
                className
            )}
            {...props}
        />
    );
}

function Media({ response, className }) {
    const [type, props] = response.media();

    if ("video" === type) {
        const video = useRef();
        const { play, pause, paused } = useVideo(video);
        return (
            <div className={classNames("relative", className)}>
                <button
                    className="w-10 h-10 absolute bottom-5 left-5 text-white"
                    onClick={paused ? play : pause}
                >
                    {paused ? <Icon.Play /> : <Icon.Pause />}
                </button>
                <video ref={video} {...props} />
            </div>
        );
    }

    if ("audio" === type) {
        const audio = useRef();
        const { play, pause, paused } = useAudio(audio);

        return (
            <div className={classNames("relative object-cover", className)}>
                {!!props.poster && (
                    <img src={props.poster} className="w-full h-full" />
                )}
                <button
                    className="w-16 h-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                    onClick={paused ? play : pause}
                >
                    {paused ? <Icon.Loud /> : <Icon.Mute />}
                </button>
                <audio
                    ref={audio}
                    className="absolute hidden"
                    src={props.src}
                />
            </div>
        );
    }

    if ("image" === type) {
        return (
            <a
                target="_blank"
                href={response.url()}
                className={classNames("object-cover", className)}
            >
                <img {...props} className="w-full h-full" />
            </a>
        );
    }

    return null;
}

export function Website({ response, className }) {
    return (
        <Card className={className}>
            <Media response={response} className="aspect-video" />
            <a
                href={response.url()}
                target="_blank"
                className="block px-5 py-4 space-y-3"
            >
                {!!response.title() && (
                    <div className="text-xl">{response.title()}</div>
                )}
                {!!response.description() && (
                    <div className="line-clamp-2">{response.description()}</div>
                )}
                <div className="text-xs opacity-60 text-ellipsis whitespace-nowrap overflow-hidden">
                    {!!response.site() && (
                        <span>{response.site()} &middot;</span>
                    )}{" "}
                    {response.url()}
                </div>
            </a>
        </Card>
    );
}

export function Music({ response, className }) {
    return (
        <Card className={classNames("flex", className)}>
            <Media response={response} className="aspect-square w-1/3" />
            <a
                href={response.url()}
                target="_blank"
                className="block px-5 py-4 space-y-3 w-2/3"
            >
                {!!response.title() && (
                    <div className="text-xl">{response.title()}</div>
                )}
                {!!response.description() && (
                    <div className="line-clamp-2">{response.description()}</div>
                )}
                <div className="text-xs opacity-60 text-ellipsis whitespace-nowrap overflow-hidden">
                    {!!response.site() && (
                        <span>{response.site()} &middot;</span>
                    )}{" "}
                    {response.url()}
                </div>
            </a>
        </Card>
    );
}
