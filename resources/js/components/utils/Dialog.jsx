import classNames from "classnames";

export default function Dialog({ className, open, backdrop, ...props }) {
    return (
        open && (
            <div>
                {!!backdrop && (
                    <div
                        className={classNames(backdrop, "fixed inset-0")}
                        aria-hidden="true"
                    />
                )}
                <div className={classNames(className, "fixed")} {...props} />
            </div>
        )
    );
}
