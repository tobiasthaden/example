const replacements = ["ü->ue", "ä->ae", "ö->oe", "ß->ss"];

export default class Slug {
    constructor(title) {
        this.title = title;
        this.replacements = replacements;
    }

    replace(reference) {
        this.replacements.push(reference);
    }

    generate() {
        return this._handleReplacements().replace(/\s/g, "-");
    }

    _handleReplacements() {
        const characters = this.replacements.reduce((latest, current) => {
            const [key, value] = current.split("->");

            latest[key] = value;

            return latest;
        }, {});

        const haystack = Object.keys(characters).join("|");

        return this.title
            .toLowerCase()
            .replace(
                new RegExp(`[${haystack}]`, "g"),
                (match) => characters[match]
            );
    }
}
