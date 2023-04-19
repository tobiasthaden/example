import { createOpenGraphMedia } from "../Factory";

export default class Response {
    constructor(attrs) {
        this._attrs = attrs;
    }

    description() {
        return this._attributes("description");
    }

    meta() {
        return this._attributes("meta");
    }

    media(types = ["audio", "image", "video"]) {
        return createOpenGraphMedia(this, types);
    }

    site() {
        return this._attributes("siteName");
    }

    title() {
        return this._attributes("title");
    }

    url() {
        return this._attributes("url");
    }

    _attributes(key, fallback = null) {
        return this._exists(key) ? this._attrs[key] : fallback;
    }

    _first(keys, fallback = null) {
        const key = keys.find(this._exists);

        return this._attributes(key, fallback);
    }

    _contains(key, values) {
        const value = this._attributes(key);

        return values.some((val) => val === value);
    }

    _exists(keys) {
        keys = Array.isArray(keys) ? keys : [keys];

        return Object.keys(this._attrs).some((key) => keys.includes(key));
    }
}
