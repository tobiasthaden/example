import { Direction } from "@/components/icons";
import { Disclosure } from "@headlessui/react";
import React from "react";

export default function Details({ children, title, ...props }) {
    return (
        <Disclosure {...props}>
            {({ open }) => (
                <React.Fragment>
                    <Disclosure.Button className="w-full flex justify-between items-center">
                        {title}
                        {open ? (
                            <Direction.North className="w-3" />
                        ) : (
                            <Direction.South className="w-3" />
                        )}
                    </Disclosure.Button>
                    <Disclosure.Panel>{children}</Disclosure.Panel>
                </React.Fragment>
            )}
        </Disclosure>
    );
}
