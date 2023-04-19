import { Radio } from ".";
import "../../../../css/app.css";

export default {
    title: "Utilities/Controls/Radio",
    component: Radio,
    decorators: [
        (Story) => (
            <label className="flex items-center space-x-2" htmlFor="id">
                <Story /> <span>Label</span>
            </label>
        ),
    ],
};

const className = "w-5 h-5 inline-block";

export const _Radio = () => <Radio className={className} id="id" />;

export const Error = () => <Radio className={className} id="id" error />;
