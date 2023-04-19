import classNames from "classnames";
import { useState } from "react";
import Checkmark from "@/components/icons/Checkmark";

export default function Radio({
    className,
    onChange,
    checked,
    error,
    ...props
}) {
    const [_checked, setIsChecked] = useState(!!checked);

    function handleChange(e) {
        setIsChecked(e.target.checked);
        onChange(e);
    }

    return (
        <div
            className={classNames(
                className,
                "p-1 border-skin-input-width rounded-full outline-none",
                error
                    ? "text-skin-input-error bg-skin-input-error focus:bg-skin-input-error-focus border-skin-input-error focus:border-skin-input-error-focus focus:text-skin-input-error"
                    : "text-skin-input focus:text-skin-input-focus bg-skin-input focus:bg-skin-input-focus border-skin-input focus:border-skin-input-focus"
            )}
        >
            {_checked && <Checkmark className="w-full" />}
            <input
                className="hidden absolute"
                onChange={handleChange}
                type="radio"
                checked={_checked}
                {...props}
            />
        </div>
    );
}
