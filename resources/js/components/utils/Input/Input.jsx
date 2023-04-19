import classNames from "classnames";

export default function Input({ className, error, ...props }) {
    return (
        <input
            className={classNames(
                className,
                "py-1 px-2 border-skin-input-width rounded-skin-input outline-none",
                error
                    ? "text-skin-input-error placeholder:text-skin-input-error-placeholder bg-skin-input-error focus:bg-skin-input-error-focus border-skin-input-error focus:border-skin-input-error-focus focus:text-skin-input-error"
                    : "text-skin-input focus:text-skin-input-focus placeholder:text-skin-input-placeholder bg-skin-input focus:bg-skin-input-focus border-skin-input focus:border-skin-input-focus"
            )}
            {...props}
        />
    );
}
