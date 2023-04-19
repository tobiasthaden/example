import classNames from "classnames";

export default function Button({
    as = "button",
    secondary,
    className,
    ...props
}) {
    const Element = as;

    return (
        <Element
            className={classNames(
                className,
                secondary
                    ? "bg-skin-button-secondary hover:bg-skin-button-secondary-hover text-skin-button-secondary hover:text-skin-button-secondary-hover rounded-skin-button border-skin-button-secondary hover:border-skin-button-secondary-hover border-skin-button-secondary-width"
                    : "bg-skin-button-primary hover:bg-skin-button-primary-hover text-skin-button-primary hover:text-skin-button-primary-hover rounded-skin-button border-skin-button-primary hover:border-skin-button-primary-hover border-skin-button-primary-width",
                "text-center py-1 px-4"
            )}
            {...props}
        />
    );
}
