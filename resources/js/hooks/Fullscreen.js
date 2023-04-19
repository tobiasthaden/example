import Job from "@/support/Job";
import { useEffect, useState } from "react";

/**
 * The fullscreen hook.
 *
 * @param {React.Ref} ref
 * @returns {Object} Response
 * @returns {Boolean} Response.active
 * @returns {Boolean} Response.allowed
 * @returns {Function} Response.enter
 * @returns {Function} Response.leave
 */
export function useFullscreen(ref) {
    const [active, setActive] = useState();
    const [allowed, setAllowed] = useState();

    const [actions, setActions] = useState({
        enter() {},
        leave() {},
    });

    const job = new Job();

    useEffect(() => {
        const element = ref.current;

        setAllowed(
            document.fullscreenEnabled || document.webkitFullscreenEnabled
        );

        setActions({
            enter,
            leave,
        });

        function changeState() {
            setActive(
                !!document.fullscreenElement ||
                    !!document.webkitFullscreenElement
            );
        }

        function enter() {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            }

            job.replace(changeState, 100);
        }

        function leave() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }

            job.replace(changeState, 100);
        }

        element.addEventListener("fullscreenchange", changeState);
        element.addEventListener("webkitFullscreenchange", changeState);

        return () => {
            element.removeEventListener("fullscreenchange", changeState);
            element.removeEventListener("webkitFullscreenchange", changeState);
        };
    }, [ref]);

    return { active, allowed, ...actions };
}
