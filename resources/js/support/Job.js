export default class Job {
    constructor() {
        this.id = null;
    }

    dispatch(callback, release = 0) {
        this._lock(release).then(callback);
    }

    replace(callback, release) {
        this.cancel();
        this.dispatch(callback, release);
    }

    cancel() {
        clearTimeout(this.id);
    }

    _lock(release) {
        return new Promise((resolve) => {
            this.id = setTimeout(resolve, release);
        });
    }
}
