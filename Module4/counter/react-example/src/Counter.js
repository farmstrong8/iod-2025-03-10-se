import React from "react";

export const Counter = () => {
    const [count, setCount] = React.useState(0);
    const countTitle = `Count: ${count}`;

    return (
        <div>
            <h1>{countTitle}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        </div>
    );
};
