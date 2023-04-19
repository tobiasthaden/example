import Input from "./Input";
import "../../../../css/app.css";

export default {
    title: "Utilities/Controls/Input",
    component: Input,
    decorators: [
        (Story) => (
            <div className="flex justify-center">
                <Story />
            </div>
        ),
    ],
};

export const Text = () => <Input type="text" placeholder="Textfield" />;

export const Error = () => <Input type="text" placeholder="Textfield" error />;

export const Number = () => <Input type="number" placeholder="Numberfield" />;

export const Password = () => (
    <Input type="password" placeholder="Passwordfield" />
);
