const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    target: "node",
    entry: ["@babel/polyfill", "./src/server.tsx"],
    externals: [webpackNodeExternals()],
    output: {
        filename: "server.js",
        path: path.resolve(__dirname, "./server"),
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(js|(j|t)sx?)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/react",
                        "@babel/preset-typescript",
                        [
                            "@babel/env",
                            {
                                targets: {
                                    browsers: ["last 2 versions"],
                                },
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    "isomorphic-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            esModule: false,
                            importLoaders: 1,
                        },
                    },
                    "postcss-loader",
                ],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
