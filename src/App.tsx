import React from "react";
import {Route} from "react-router-dom";

import MainPage from "./pages/main/Main.component";
import StartPage from "./pages/start/Start.component";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={StartPage} />
            <Route exact path="/app" component={MainPage} />
        </div>
    );
}

export default App;


