import classNames from "classnames";

export default function Toast({ className, ...props }) {
    return <div {...props} />;
}

export function Success({ className, ...props }) {
    return (
        <Toast className={classNames("success-styles", className)} {...props} />
    );
}

export function Error({ className, ...props }) {
    return (
        <Toast className={classNames("error-styles", className)} {...props} />
    );
}
