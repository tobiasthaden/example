import { Button, Input, Picture, Select } from "@/components/utils";
import { useState } from "react";
import "../../css/app.css";

export default function Playground() {
    const [vars, setVars] = useState({
        "--background": "254, 249, 239, 1",
        "--text-primary": "11, 40, 50, 1",
        "--text-secondary": "40, 146, 184, 1",
        "--text-link": "254, 109, 115, 1",
        "--text-link-hover": "40, 146, 184, 1",
        "--border-color": "40, 146, 184",
        "--border-width": "1px",
        "--border-radius": "10px",
        "--button-primary-text": "254, 249, 239, 1",
        "--button-primary-text-hover": "254, 249, 239, 1",
        "--button-primary-bg": "40, 146, 184, 1",
        "--button-primary-bg-hover": "34, 124, 157, 1",
        "--button-primary-border": "40, 146, 184, 1",
        "--button-primary-border-hover": "34, 124, 157, 1",
        "--button-primary-border-width": "1px",
        "--button-secondary-text": "254, 109, 115, 1",
        "--button-secondary-text-hover": "254, 109, 115, 1",
        "--button-secondary-bg": "255, 214, 216, 0",
        "--button-secondary-bg-hover": "255, 214, 216, 1",
        "--button-secondary-border": "254, 109, 115, 1",
        "--button-secondary-border-hover": "255, 214, 216, 1",
        "--button-secondary-border-width": "1px",
        "--button-border-radius": "5px",
        "--input-border-radius": "4px",
        "--input-border-width": "1px",
        "--input-text": "40, 146, 184, 1",
        "--input-text-focus": "30, 110, 138, 1",
        "--input-text-placeholder": "140, 180, 200, 1",
        "--input-bg": "230, 240, 255, 1",
        "--input-bg-focus": "200, 240, 255, 1",
        "--input-border": "40, 146, 184, 1",
        "--input-border-focus": "30, 110, 138, 1",
        "--input-error-text": "255, 0, 0, 1",
        "--input-error-text-placeholder": "255, 160, 160, 1",
        "--input-error-bg": "255, 240, 240, 1",
        "--input-error-bg-focus": "255, 220, 220, 1",
        "--input-error-border": "255, 0, 0, 1",
        "--input-error-border-focus": "255, 20, 20, 1",
        "--option-bg-hover": "34, 124, 157, 1",
        "--option-text-hover": "255, 255, 200, 1",
        "--option-error-bg-hover": "255, 20, 20, 1",
        "--option-error-text-hover": "255, 255, 255, 1",
    });

    function update(e) {
        setVars({ ...vars, [e.target.name]: e.target.value });
        document.documentElement.style.setProperty(
            e.target.name,
            e.target.value
        );
    }

    return (
        <div id="playground" className="flex items-start -mx-5">
            <div className="w-2/3 sticky top-0 p-5 max-h-screen overflow-y-auto">
                <div className="bg-skin-fill p-10 rounded-skin space-y-5 shadow-lg">
                    <h2 className="text-xl font-semibold">
                        Happy little clouds
                    </h2>
                    <p className="text-skin-primary">
                        I will take some magic white, and a little bit of
                        Vandyke brown and a little touch of yellow. This is
                        probably the greatest thing that's ever happened in my
                        life. Just let this happen. We just{" "}
                        <a className="text-skin-link hover:text-skin-link-hover cursor-pointer">
                            let this flow
                        </a>{" "}
                        right out of our minds.
                    </p>
                    <Picture
                        className="block my-10"
                        src="https://images.unsplash.com/photo-1535118694-2e22b08a1d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=450&q=80"
                    />
                    <p className="text-skin-secondary italic">
                        All you need to paint is a few tools, a little
                        instruction, and a vision in your mind. We don't have to
                        be concerned about it. We just have to let it fall where
                        it will.
                    </p>
                    <div className="space-y-4">
                        <div className="flex space-x-4">
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Name"
                            />
                            <Input
                                className="w-full"
                                type="text"
                                placeholder="Error"
                                error
                            />
                        </div>
                        <div className="flex space-x-4">
                            <Select
                                className="w-full"
                                options={[
                                    "Robert Baratheon",
                                    "Arya Stark",
                                    "Daenerys Targaryen",
                                    "Jon Snow",
                                    "Tyrion Lannister",
                                ]}
                            />
                            <Select
                                className="w-full"
                                error
                                options={[
                                    "Robert Baratheon",
                                    "Arya Stark",
                                    "Daenerys Targaryen",
                                    "Jon Snow",
                                    "Tyrion Lannister",
                                ]}
                            />
                        </div>
                    </div>

                    <hr className="!my-10 border-skin border-b-skin-width border-t-0" />

                    <div className="space-x-4">
                        <Button>Happy little clouds</Button>
                        <Button secondary>Happy little trees</Button>
                    </div>
                </div>
            </div>
            <div className="p-5 space-y-4 w-1/3">
                {Object.entries(vars).map(([key, value]) => (
                    <div>
                        <label
                            className="block text-sm"
                            style={{ color: "#828282" }}
                            htmlFor={key}
                        >
                            {key}
                        </label>
                        <input
                            className="py-1 px-3 rounded"
                            style={{ background: "#ececec" }}
                            id={key}
                            value={value}
                            name={key}
                            type="text"
                            onInput={update}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
