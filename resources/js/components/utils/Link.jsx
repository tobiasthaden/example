import { Link as InertiaLink } from "@inertiajs/inertia-react";

const Link = ({ href, target, ...props }) => {
    const isAbsolute = new RegExp("^(//|[a-z]+:)", "i");

    return isAbsolute.test(href) ? (
        <a href={href} target={target ?? "_blank"} {...props} />
    ) : (
        <InertiaLink href={href} {...props} />
    );
};

export default Link;
