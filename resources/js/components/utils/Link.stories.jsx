import Link from "./Link";
import "../../../css/app.css";

export default {
    title: "Utilities/Link",
    component: Link,
    decorators: [
        (Story) => (
            <div className="flex justify-center">
                <Story />
            </div>
        ),
    ],
};

export const InternalURL = () => (
    <Link href="/?path=/story/documentation--page">Hodor?</Link>
);

export const ExternalURL = () => (
    <Link href="http://www.convoyinteractive.com" target="_self">
        Hodor!
    </Link>
);

export const Email = () => (
    <Link href="mailto:bran@stark.com">Mail to the holy raven</Link>
);
