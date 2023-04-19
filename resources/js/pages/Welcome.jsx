import React from "react";
import { Head } from "@inertiajs/inertia-react";
import { useI18n } from "../hooks/I18n";

export default function Welcome(props) {
    const __ = useI18n();
    return (
        <React.Fragment>
            <Head title="Starter Kit" />

            <div className="text-center p-10 text-3xl flex items-center justify-center min-h-screen w-full">
                {__("Have a {good} start", { good: '"great"' })}! 👋
            </div>
        </React.Fragment>
    );
}
