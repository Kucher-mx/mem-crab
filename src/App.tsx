import * as React from "react";
import {Route, Routes} from "react-router-dom";

import MainPage from "./pages/main/Main.component";
import StartPage from "./pages/start/Start.component";
import withStyles from "isomorphic-style-loader/withStyles";
//@ts-ignore
import s from "./App.module.css";

function App() {
    return (
        <div className={s.App}>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/app/:m/:n/:x" element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default withStyles(s)(App);
