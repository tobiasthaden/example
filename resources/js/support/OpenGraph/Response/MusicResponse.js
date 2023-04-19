import { createOpenGraphMedia } from "../Factory";
import Response from "./Response";

export default class MusicResponse extends Response {
    constructor(attrs) {
        super(attrs);
    }

    media() {
        return createOpenGraphMedia(this, ["audio", "image"]);
    }
}
