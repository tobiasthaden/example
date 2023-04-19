import Button from "./Button";
import "../../../css/app.css";

export default {
    title: "Utilities/Button",
    component: Button,
    decorators: [
        (Story) => (
            <div className="flex justify-center">
                <Story />
            </div>
        ),
    ],
};

export const Primary = () => <Button>Primary Button</Button>;

export const Secondary = () => <Button secondary>Secondary Button</Button>;
