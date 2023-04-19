import { Website } from "./OpenGraph";
import "../../css/app.css";
import Response from "@/support/OpenGraph/Response/Response";

export default {
    title: "Components/Open Graph/Website",
    decorators: [
        (Story) => (
            <div
                style={{
                    maxWidth: "500px",
                    minHeight: "400px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const response = new Response({
    siteName: "WikiQuote",
    url: "https://en.wikiquote.org/wiki/Bob_Ross",
    title: "Bob Ross brings brush of zen to 'Joy of Painting'",
    description:
        "In Painting, You Have Unlimited Power. You Have The Ability To Move Mountains. You Can Bend Rivers. But When I Get Home, The Only Thing I Have Power Over Is The Garbage.",
});

export const _Website = () => <Website response={response} />;

const image = new Response({
    url: "https://en.wikiquote.org/wiki/Bob_Ross",
    title: "Bob Ross brings brush of zen to 'Joy of Painting'",
    description:
        "In Painting, You Have Unlimited Power. You Have The Ability To Move Mountains. You Can Bend Rivers. But When I Get Home, The Only Thing I Have Power Over Is The Garbage.",
    images: [{ url: "https://source.unsplash.com/random/640x360" }],
});

export const _Website_Image = () => <Website response={image} />;

const audio = new Response({
    url: "https://en.wikiquote.org/wiki/Bob_Ross",
    title: "Bob Ross brings brush of zen to 'Joy of Painting'",
    description:
        "In Painting, You Have Unlimited Power. You Have The Ability To Move Mountains. You Can Bend Rivers. But When I Get Home, The Only Thing I Have Power Over Is The Garbage.",
    images: [{ url: "https://source.unsplash.com/random/640x360" }],
    audios: [
        {
            url: "https://p.scdn.co/mp3-preview/01dccbca1603d54733df72ba0da52ee263659e62?cid=162b7dc01f3a4a2ca32ed3cec83d1e02",
            type: "audio/vnd.facebook.bridge",
        },
    ],
});

export const _Website_Audio = () => <Website response={audio} />;

const video = new Response({
    url: "https://en.wikiquote.org/wiki/Bob_Ross",
    title: "Bob Ross brings brush of zen to 'Joy of Painting'",
    description:
        "In Painting, You Have Unlimited Power. You Have The Ability To Move Mountains. You Can Bend Rivers. But When I Get Home, The Only Thing I Have Power Over Is The Garbage.",
    images: [{ url: "https://source.unsplash.com/random/640x360" }],
    videos: [
        {
            url: "https://cdn.free-stock.video/3092021/wall-nature-coastline-sea-sand-beach-water-9212-small.mp4",
            type: "video/mp4",
        },
    ],
});

export const _Website_Video = () => <Website response={video} />;
