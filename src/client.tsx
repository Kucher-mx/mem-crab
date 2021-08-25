import {BrowserRouter as Router} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";

import App from "./App";
import {createStore} from "redux";
import reducer from "./reducer/reducer";
import {stateTypes} from "./typeScript/types";

declare global {
    interface Window {
        __PRELOADED_STATE__: stateTypes;
    }
}

const preloadedState = window.__PRELOADED_STATE__;

const store = createStore(reducer, preloadedState);

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss());
    return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
    <StyleContext.Provider value={{insertCss}}>
        <Provider store={store}>
            <Router>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Router>
        </Provider>
    </StyleContext.Provider>,
    document.getElementById("root")
);
