import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {compose, createStore} from "redux";

import App from "./App";
import reducer from "./reducer/reducer";

import "./index.css";

declare global {
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION__: any
    }
}

const store = createStore(
    reducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>,
    document.getElementById("root")
);
