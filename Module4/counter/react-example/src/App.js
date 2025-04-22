import React from "react";
import logo from "./logo.svg";
import { Counter } from "./Counter";
import "./App.css";

function App({ name }) {
    const names = ["John", "Jane", "Doe"];

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React, {name}
                </a>
                <Counter />
                {names.map((name) => (
                    <div key={name}>
                        <h1>{name}</h1>
                    </div>
                ))}
            </header>
        </div>
    );
}

export default App;
