import React from "react";
import "../../css/app.css";
import Card from "./Card";

export default {
    title: "Components/Card",
    component: Card,
    decorators: [
        (Story) => (
            <div style={{ maxWidth: "500px", height: "250px", margin: "auto" }}>
                <Story />
            </div>
        ),
    ],
};

export const _Card = () => (
    <Card className="shadow p-16 space-y-16">
        <Card.Header className="text-2xl font-bold">
            A lame and basic Card
        </Card.Header>
        <Card.Panel className="text-lg font-light">
            “You want to know the horrible truth? I can't even remember what she
            looked like. I only know she was the one thing I ever wanted...
            someone took her away from me, and seven kingdoms couldn't fill the
            hole she left behind.”
        </Card.Panel>
        <Card.Footer className="text-sm">- Robert Baratheon</Card.Footer>
    </Card>
);
