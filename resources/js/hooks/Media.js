import { tap } from "lodash-es";
import { useEffect, useState } from "react";

/**
 * The media player hook.
 *
 * @param {React.Ref} ref
 * @returns {Object} Response
 * @returns {number} Response.currentTime
 * @returns {number} Response.paused
 * @returns {number} Response.ended
 * @returns {number} Response.volume
 * @returns {number} Response.muted
 * @returns {Function} Response.play
 * @returns {Function} Response.pause
 * @returns {Function} Response.mute
 * @returns {Function} Response.unmute
 * @returns {Function} Response.updateTime
 * @returns {Function} Response.updateVolume
 */
function useMedia(ref) {
    const [actions, setActions] = useState({
        play() {},
        pause() {},
        mute() {},
        unmute() {},
        updateTime(value) {},
        updateVolume(value) {},
    });

    const [states, setStates] = useState({});

    useEffect(() => {
        const media = ref.current;

        const listeners = [
            "pause",
            "play",
            "ended",
            "loadedmetadata",
            "timeupdate",
            "volumeChange",
        ];

        setActions({
            play: () => media.play(),
            pause: () => media.pause(),
            mute: () => tap((media.muted = true), update),
            unmute: () => tap((media.muted = false), update),
            updateTime: (value) => (media.currentTime = value),
            updateVolume: (value) => (media.volume = value),
        });

        function update() {
            const { muted, paused, volume, currentTime, duration } = media;
            setStates({ muted, paused, volume, currentTime, duration });
        }

        update();

        listeners.forEach((event) => media.addEventListener(event, update));

        return () => {
            listeners.forEach((event) =>
                media.removeEventListener(event, update)
            );
        };
    }, [ref]);

    return { ...actions, ...states };
}

export const useAudio = (ref) => useMedia(ref);
export const useVideo = (ref) => useMedia(ref);
