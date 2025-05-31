import { useState } from "react";
import { MoviesList } from "./MoviesList";
import { Welcome } from "./Welcome";
import { ComplexComment } from "./ComplexComment";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MoodChanger } from "./MoodChanger";
import ExplodingBomb from "./Bomb";

const App = () => {
    const [count, setCount] = useState(0);
    const testVariable = "This is a test variable";

    const comment = {
        date: new Date(),
        text: "I hope you enjoy learning React!",
        author: {
            // author is also an object
            name: "Hello Kitty",
            avatarUrl: "https://placekitten.com/g/64/64",
        },
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <p>{testVariable}</p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <Welcome name="John Doe">
                <p>This is a child of Welcome</p>
            </Welcome>
            <Welcome name="Susan" title="Welcome to the App">
                <p>This is a child of Welcome</p>
            </Welcome>
            <ComplexComment
                date={comment.date}
                text={comment.text}
                author={comment.author}
            />
            <MoviesList />
            <MoodChanger />
            <ExplodingBomb />
        </>
    );
};

export default App;
