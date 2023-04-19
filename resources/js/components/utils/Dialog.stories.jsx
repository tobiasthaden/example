import Dialog from "./Dialog";
import "../../../css/app.css";

export default {
    title: "Utilities/Dialog",
    component: Dialog,
    decorators: [
        (Story) => (
            <div
                style={{
                    maxWidth: "500px",
                    minHeight: "500px",
                    margin: "auto",
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const className = "bg-skin-fill max-w-lg space-y-5 p-10 shadow-lg";

export const _Dialog = () => (
    <Dialog className={className} backdrop="bg-black/80" open>
        Tyrion may be a monster but at least he killed our father on purpose.
        You killed him by mistake.
    </Dialog>
);
