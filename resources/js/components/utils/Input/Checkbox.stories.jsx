import { Checkbox } from ".";
import "../../../../css/app.css";

export default {
    title: "Utilities/Controls/Checkbox",
    component: Checkbox,
    decorators: [
        (Story) => (
            <div className="flex justify-center">
                <label className="flex items-center space-x-2" htmlFor="id">
                    <Story /> <span>Label</span>
                </label>
            </div>
        ),
    ],
};

const className = "w-5 h-5 inline-block";

export const _Checkbox = () => <Checkbox className={className} id="id" />;

export const Error = () => <Checkbox className={className} id="id" error />;
