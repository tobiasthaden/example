import { default as Button } from "@/components/utils/Link";
import { useI18n } from "@/hooks/I18n";
import { uniqueId } from "lodash-es";

export default function Pagination({ items = [], children, ...props }) {
    const __ = useI18n();

    return (
        <nav
            role="navigation"
            aria-label={__("Pagination Navigation")}
            {...props}
        >
            {items.map(([Component, props], key) => (
                <Component key={uniqueId(key)} {...props} />
            ))}
            {children}
        </nav>
    );
}

export function Current({ page, ...props }) {
    const __ = useI18n();

    return (
        <span
            aria-label={__("Current Page, Page {page}", { page })}
            aria-current="true"
            {...props}
        >
            {page}
        </span>
    );
}

export function Link({ page, href, ...props }) {
    const __ = useI18n();

    return (
        <Button
            href={href}
            aria-label={__("Goto Page {page}", { page })}
            {...props}
        >
            {page}
        </Button>
    );
}

export function Space({ ...props }) {
    return (
        <span aria-hidden="true" {...props}>
            ...
        </span>
    );
}
