import Pagination, { Current, Link, Space } from "./Pagination";
import "../../../css/app.css";

export default {
    title: "Components/Pagination",
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Pagination = () => (
    <Pagination className="flex space-x-4">
        <Link page="1" href="#" />
        <Space />
        <Link page="4" href="#" />
        <Current page="5" className="underline" />
    </Pagination>
);
