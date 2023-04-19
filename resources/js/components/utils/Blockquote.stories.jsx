import Blockquote from "./Blockquote";
import "../../../css/app.css";

export default {
    title: "Utilities/Blockquote",
    component: Blockquote,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Blockquote = () => (
    <Blockquote>
        "It is rare to meet a Lannister who shares my enthusiasm for dead
        Lannisters."
    </Blockquote>
);

export const WithCaption = () => (
    <Blockquote caption="Oberyn Martell">
        "It is rare to meet a Lannister who shares my enthusiasm for dead
        Lannisters."
    </Blockquote>
);
