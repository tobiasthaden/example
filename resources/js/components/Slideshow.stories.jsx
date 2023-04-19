import React from "react";
import "../../css/app.css";
import "@splidejs/splide/css/core";
import Slideshow, { Slide } from "./Slideshow";

export default {
    title: "Components/Slideshow",
    component: Slideshow,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", height: "250px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

const className = "h-60 flex items-center justify-center bg-slate-200 text-5xl";

export const _Slideshow = () => (
    <Slideshow>
        <Slide className={className}>1</Slide>
        <Slide className={className}>2</Slide>
    </Slideshow>
);

export const Fade = () => (
    <Slideshow autoplay type="fade" options={{ speed: 3000 }}>
        <Slide className={className}>1</Slide>
        <Slide className={className}>2</Slide>
    </Slideshow>
);

export const Controls = () => (
    <Slideshow arrows bullets>
        <Slide className={className}>1</Slide>
        <Slide className={className}>2</Slide>
    </Slideshow>
);
