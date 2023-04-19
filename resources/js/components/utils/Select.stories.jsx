import Select from "./Select";
import "../../../css/app.css";

export default {
    title: "Utilities/Controls/Select",
    component: Select,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "320px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

const options = [
    "Robert Baratheon",
    "Arya Stark",
    "Daenerys Targaryen",
    { label: "Jon Snow", value: "john-snow" },
    { label: "Tyrion Lannister", value: "tyrion-lannister" },
];

export const Default = () => <Select options={options} value={options[3]} />;

export const Error = () => (
    <Select error options={options} placeholder="Who is gonna die next?" />
);
