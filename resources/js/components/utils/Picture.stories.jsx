import Picture from "./Picture";
import "../../../css/app.css";

export default {
    title: "Utilities/Picture",
    component: Picture,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "800px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Picture = () => (
    <Picture
        src="https://via.placeholder.com/600.png/666/000/?text=default"
        className="w-full"
        alt="alt"
        title="title"
        sizes={[
            [
                "800px",
                "https://via.placeholder.com/600.png/ccc/000/?text=800px",
            ],
            [
                "400px",
                "https://via.placeholder.com/600.png/999/000/?text=400px",
            ],
        ]}
    />
);
