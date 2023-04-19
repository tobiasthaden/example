import classNames from "classnames";

export default function Skip({ className, ...props }) {
    return (
        <a
            className={classNames(
                "absolute -top-40 w-full left-0 h-0 p-4 text-center overflow-hidden bg-skin-button-primary text-skin-button-primary duration-200 transition-all focus:h-auto focus:top-0 focus:overflow-auto",
                className
            )}
            {...props}
        />
    );
}
