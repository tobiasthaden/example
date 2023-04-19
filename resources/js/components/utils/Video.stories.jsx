import React from "react";
import "../../../css/app.css";
import Video from "./Video";

export default {
    title: "Utilities/Video",
    component: Video,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

const url =
    "https://cdn.free-stock.video/3092021/wall-nature-coastline-sea-sand-beach-water-9212-small.mp4";

export const Autoplay = () => <Video src={url} autoPlay muted />;

export const Controls = () => <Video src={url} controls />;
