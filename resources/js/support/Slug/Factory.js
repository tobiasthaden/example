import Slug from "./Slug";

export function createSlug(title, replacements = []) {
    const slug = new Slug(title);

    replacements.forEach((reference) => slug.replace(reference));

    return slug.generate();
}
