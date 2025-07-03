import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ActivityFinder } from "./ActivityFinder";
import { RefCounter } from "./RefCounter";

const App = () => {
    return (
        <div>
            <ActivityFinder />
            <RefCounter />
        </div>
    );
};

export default App;
