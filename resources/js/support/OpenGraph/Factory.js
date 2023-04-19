import { bindings } from ".";
import Response from "./Response/Response";

export function createOpenGraphResponse(type, attrs) {
    const ResponseClass = bindings.hasOwnProperty(type)
        ? bindings[type]()
        : Response;

    return [type, new ResponseClass(attrs)];
}

export function createOpenGraphMedia(response, types) {
    const audios = response._attributes("audios", []);
    const images = response._attributes("images", []);
    const videos = response._attributes("videos", []);

    if (videos.length && types.includes("video")) {
        const playables = videos.filter((video) =>
            ["video/mp4", "video/webm", "video/ogg"].includes(video.type)
        );

        if (playables.length) {
            const data = {
                src: playables.find((video) => !!video).url,
                raw: videos,
            };

            if (images.length) {
                data.poster = images.find((image) => !!image).url;
                data.images = images;
            }

            return ["video", data];
        }
    }

    if (audios.length && types.includes("audio")) {
        const playables = audios.filter((audio) =>
            ["audio/wav", "audio/mpeg", "audio/vnd.facebook.bridge"].includes(
                audio.type
            )
        );

        if (playables.length) {
            const data = {
                src: playables.find((audio) => !!audio).url,
                raw: audios,
            };

            if (images.length) {
                data.poster = images.find((image) => !!image).url;
                data.images = images;
            }

            return ["audio", data];
        }
    }

    if (images.length && types.includes("image")) {
        const data = {
            src: images.find((image) => !!image).url,
            raw: images,
        };

        return ["image", data];
    }

    return [];
}
