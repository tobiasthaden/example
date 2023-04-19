import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { Arrows, Bullets } from "@/components/navigations";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import { uniqueId } from "lodash-es";
import { useI18n } from "@/hooks/I18n";

export default function Slideshow({
    arrows = false,
    autoplay = false,
    className,
    children,
    bullets = false,
    perPage = 1,
    type = "loop",
    breakpoints = {},
    options = {},
}) {
    options = Object.assign(options, {
        arrows: false,
        autoplay: !!autoplay,
        pagination: false,
        type,
        breakpoints,
        perPage,
    });

    const __ = useI18n();

    const [slidesCount, setSlidesCount] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const ref = useRef();

    const controls = {
        arrows: Array.isArray(arrows)
            ? createControls(arrows)
            : createControls([Arrows.Prev, Arrows.Next]),
        bullets: Array.isArray(bullets)
            ? createPagination(bullets)
            : createPagination([Bullets.Active, Bullets.Item]),
    };

    function createControls([Prev, Next]) {
        return [
            <Prev
                key={uniqueId("prev")}
                aria-label={__("Goto Previous Slide")}
                onClick={() => ref.current.go("<")}
            />,
            <Next
                key={uniqueId("next")}
                aria-label={__("Goto Next Slide")}
                onClick={() => ref.current.go(">")}
            />,
        ];
    }

    function createPagination([Active, Bullet]) {
        const slides = Array.from({ length: slidesCount });

        return slides.map((_, index) => {
            if (activeSlide === index) {
                return (
                    <Active
                        key={uniqueId(index)}
                        aria-label={__("Current Slide, Slide {slide}", {
                            slide: index + 1,
                        })}
                        aria-current="true"
                    >
                        {index}
                    </Active>
                );
            }

            return (
                <Bullet
                    key={uniqueId(index)}
                    onClick={() => ref.current.go(index)}
                    aria-label={__("Goto Slide {slide}", { slide: index + 1 })}
                >
                    {index}
                </Bullet>
            );
        });
    }

    function handleActive(e) {
        setActiveSlide(e.index);
        setSlidesCount(e.Components.Slides.get(true).length);
    }

    return (
        <Splide
            onActive={handleActive}
            className={classNames("relative", className)}
            hasTrack={false}
            options={options}
            ref={ref}
        >
            <SplideTrack>{children}</SplideTrack>

            {!!arrows && <React.Fragment>{controls.arrows}</React.Fragment>}
            {!!bullets && (
                <Bullets.Nav aria-label={__("Pagination Navigation")}>
                    {controls.bullets}
                </Bullets.Nav>
            )}
        </Splide>
    );
}

export function Slide(props) {
    return <SplideSlide {...props} />;
}
