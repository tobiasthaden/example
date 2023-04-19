import { useI18n } from "@/hooks/I18n";
import React from "react";
import "../../../css/app.css";
import Skip from "./A11ySkip";

export default {
    title: "Utilities/Skip",
    component: Skip,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", height: "250px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Skip = () => {
    const __ = useI18n();
    return (
        <React.Fragment>
            <Skip href="#main">{__("Skip to main")}</Skip>
            <p>press 'tab' key ⇥ to show the skip link</p>
            <main
                id="main"
                className="mt-10 bg-skin-fill px-10 py-10 h-screen space-y-10"
            >
                <h1>Main section</h1>
                <p>
                    To use this feature on your mac, enable "Use keyboad
                    navigation to move focus between controls" in:
                </p>
                <p>System Preference `&gt;` Keyboard `&gt;` Shortcuts</p>
            </main>
        </React.Fragment>
    );
};
