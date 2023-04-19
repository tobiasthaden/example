import React from "react";
import "../../../css/app.css";
import Textarea from "./Textarea";

export default {
    title: "Utilities/Controls/Textarea",
    component: Textarea,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => (
    <Textarea defaultValue="The Iron Throne is mine and I will take it." />
);

export const Error = () => (
    <Textarea
        error
        defaultValue="The Iron Throne is mine and I will take it."
    />
);
