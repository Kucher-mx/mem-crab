import {renderToString} from "react-dom/server";
import App from "./App";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import StyleContext from "isomorphic-style-loader/StyleContext";
import React from "react";

import {genInitialState, renderFullPage} from "./utils/server.utils";
import {createStore} from "redux";
import reducer from "./reducer/reducer";

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 8080;
const context = {};

const requestListener = async (req, res) => {
    if (req.url === "/static/bundle.client.js") {
        const htmlPath: string = path.join(process.cwd(), "build", "static", "bundle.client.js");
        fs.readFile(htmlPath, "utf-8", (err, data: string) => {
            if (err) {
                res.end(err);
            }
            res.end(data);
        });
    } else if (req.url.includes("/app/")) {
        const queryParams = req.url.split("/").splice(2, 3);
        const params = {M: +queryParams[0], N: +queryParams[1], X: +queryParams[2]};
        const preloadedState = genInitialState(params);

        const serverStore = createStore(reducer, preloadedState);

        const serverState = serverStore.getState();

        const css = new Set();
        const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

        const reactMarkup = renderToString(
            <StyleContext.Provider value={{insertCss}}>
                <Provider store={serverStore}>
                    <MemoryRouter context={context} location={req.url}>
                        <App />
                    </MemoryRouter>
                </Provider>
            </StyleContext.Provider>
        );

        res.end(renderFullPage(reactMarkup, serverState, css));
    } else if (req.url.includes("/app?")) {
        const {m, n, x} = url.parse(req.url, true).query;
        const genStart = genInitialState({M: +m, N: +n, X: +x});

        res.end(JSON.stringify(genStart));
    } else if (req.url === "/") {
        const emptyPreloadedState = {
            M: 0,
            N: 0,
            X: 0,
            table: [],
            rowSum: [],
            colAverage: [],
            cellsToHighlight: {},
            amountObj: {},
        };
        const serverStore = createStore(reducer, emptyPreloadedState);
        const css = new Set();
        const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

        const reactMarkup = renderToString(
            <StyleContext.Provider value={{insertCss}}>
                <Provider store={serverStore}>
                    <MemoryRouter location={req.url} context={context}>
                        <App />
                    </MemoryRouter>
                </Provider>
            </StyleContext.Provider>
        );
        res.end(renderFullPage(reactMarkup, {}, css));
    }
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}/`);
});
