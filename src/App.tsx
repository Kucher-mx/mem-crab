import React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/main/Main.component";
import StartPage from "./pages/start/Start.component";

import "./App.css";
// @ts-ignore
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<StartPage />} />
                {
                    // @ts-ignore
                    <Route path="/app" element={<MainPage />} />
                }
            </Routes>
        </div>
    );
}

export default App;
