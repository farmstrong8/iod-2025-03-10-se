import React from "react";
import "./Welcome.css"; // Assuming you have a CSS file for styling

type WelcomeProps = {
    name: string;
    title?: string;
    children?: React.ReactNode;
};

export const Welcome: React.FC<WelcomeProps> = ({
    name = "default name",
    title,
    children,
}) => {
    // custom Welcome component
    // component should not return null
    // if (!title) {
    //     return null;
    // }

    return (
        <div className="welcome-container">
            <h3
                style={{
                    color: "blue",
                }}
            >
                Welcome {name}!
            </h3>
            {title ? <p id="title prop">{title}</p> : null}
            {children}
        </div>
    );
};
