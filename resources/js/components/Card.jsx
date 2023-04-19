import classNames from "classnames";
import React from "react";

export default function Card(props) {
    return <div {...props} />;
}

Card.Header = function ({ className, ...props }) {
    return <header className={classNames(className, "block")} {...props} />;
};

Card.Panel = function (props) {
    return <div {...props} />;
};

Card.Footer = function ({ className, ...props }) {
    return <footer className={classNames(className, "block")} {...props} />;
};
