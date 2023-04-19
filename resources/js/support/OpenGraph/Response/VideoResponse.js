import { createOpenGraphMedia } from "../Factory";
import Response from "./Response";

export default class VideoResponse extends Response {
    constructor(attrs) {
        super(attrs);
    }

    media() {
        return createOpenGraphMedia(this, ["video", "image"]);
    }
}
