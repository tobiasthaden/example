import MusicResponse from "./Response/MusicResponse";
import VideoResponse from "./Response/VideoResponse";

export const bindings = {
    music: () => MusicResponse,
    video: () => VideoResponse,
};

export { createOpenGraphResponse } from "./Factory";
