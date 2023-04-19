import classNames from "classnames";
import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { Direction, Checkmark } from "@/components/icons";
import { isString } from "lodash-es";

export default function Select({
    className,
    options,
    error,
    value,
    placeholder,
    onChange,
}) {
    const [selectedOption, setSelectedOption] = useState(
        value ? value : placeholder ?? "Select an option"
    );

    function dispatchChange(value) {
        setSelectedOption(value);

        if (onChange) {
            onChange(value);
        }
    }

    function handleChange(v) {
        if (options.includes(v)) {
            return dispatchChange(v);
        }

        const selected = options.filter(({ value }) => v === value);

        if (selected.length !== 1) {
            throw Error(
                "Could not select an option that is not in the options list."
            );
        }

        return dispatchChange(selected[0]);
    }

    return (
        <Listbox
            as="div"
            value={
                isString(selectedOption) ? selectedOption : selectedOption.value
            }
            onChange={handleChange}
            className={classNames(className, "relative")}
        >
            {({ open }) => (
                <React.Fragment>
                    <Listbox.Button
                        className={classNames(
                            "py-1 px-2 w-full text-left flex items-center justify-between border-skin-input-width outline-none",
                            open
                                ? "rounded-t-skin-input"
                                : "rounded-skin-input",
                            error
                                ? "text-skin-input-error placeholder:text-skin-input-error-placeholder bg-skin-input-error border-skin-input-error"
                                : "text-skin-input placeholder:text-skin-input-placeholder bg-skin-input border-skin-input"
                        )}
                    >
                        {isString(selectedOption)
                            ? selectedOption
                            : selectedOption.label}
                        {open ? (
                            <Direction.North className="w-4 h-4" />
                        ) : (
                            <Direction.South className="w-4 h-4" />
                        )}
                    </Listbox.Button>
                    <Listbox.Options
                        className={classNames(
                            "w-full absolute border-x-skin-input-width border-b-skin-input-width",
                            {
                                "rounded-b-skin-input": open,
                            },
                            error
                                ? "text-skin-input-error placeholder:text-skin-input-error-placeholder bg-skin-input-error border-skin-input-error"
                                : "text-skin-input placeholder:text-skin-input-placeholder bg-skin-input border-skin-input"
                        )}
                    >
                        {options.map((option) => (
                            <Listbox.Option
                                key={isString(option) ? option : option.value}
                                value={isString(option) ? option : option.value}
                            >
                                {({ selected }) => (
                                    <div
                                        className={classNames(
                                            "py-1 px-2 flex items-center justify-between space-x-2 cursor-pointer",
                                            error
                                                ? "hover:bg-skin-option-error-hover hover:text-skin-option-error-hover"
                                                : "hover:bg-skin-option-hover hover:text-skin-option-hover",
                                            {
                                                "font-bold": selected,
                                            }
                                        )}
                                    >
                                        <span>
                                            {isString(option)
                                                ? option
                                                : option.label}
                                        </span>
                                        {selected && (
                                            <Checkmark className="w-4 h-4" />
                                        )}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </React.Fragment>
            )}
        </Listbox>
    );
}
