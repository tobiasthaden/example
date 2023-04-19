import React from "react";
import "../../../css/app.css";
import Audio from "./Audio";

export default {
    title: "Utilities/Audio",
    component: Audio,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Audio = () => (
    <Audio src="https://file-examples.com/storage/fe52cb0c4862dc676a1b341/2017/11/file_example_MP3_700KB.mp3" />
);
