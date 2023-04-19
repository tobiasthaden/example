import Details from "./Details";
import "../../../css/app.css";

export default {
    title: "Utilities/Details",
    component: Details,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

const className =
    "bg-skin-fill text-skin-primary text-sm space-y-3 p-5 shadow-lg";

export const Closed = () => (
    <Details
        as="div"
        className={className}
        title={
            <h1 className="text-lg">Daenerys Stormborn of House Targaryen</h1>
        }
    >
        the First of Her Name, Queen of the Andals and the First Men, Protector
        of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great
        Grass Sea, the Unburnt, the Breaker of Chains, though the style was
        occasionally shortened to Daenerys of the House Targaryen, the First of
        Her Name, Breaker of Chains and Mother of Dragons
    </Details>
);

export const Open = () => (
    <Details
        as="div"
        className={className}
        title={
            <h1 className="text-lg">Daenerys Stormborn of House Targaryen</h1>
        }
        defaultOpen
    >
        the First of Her Name, Queen of the Andals and the First Men, Protector
        of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great
        Grass Sea, the Unburnt, the Breaker of Chains, though the style was
        occasionally shortened to Daenerys of the House Targaryen, the First of
        Her Name, Breaker of Chains and Mother of Dragons
    </Details>
);
