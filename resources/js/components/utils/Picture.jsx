import { uniqueId } from "lodash-es";

export default function Picture({ sizes = [], ...props }) {
    return (
        <picture className="block">
            {sizes.map(([size, source]) => (
                <source
                    key={uniqueId("picture")}
                    srcSet={source}
                    media={`(min-width: ${size})`}
                />
            ))}
            {/* NOTE: set h-full with flex-stretch */}
            <img {...props} />
        </picture>
    );
}
