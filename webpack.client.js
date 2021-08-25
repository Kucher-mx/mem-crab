const path = require("path");
const {TypedCssModulesPlugin} = require("typed-css-modules-webpack-plugin");

module.exports = {
    entry: ["@babel/polyfill", "./src/client.tsx"],
    output: {
        filename: "bundle.client.js",
        path: path.resolve(__dirname, "./build/static"),
    },
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
                    // "typings-for-css-modules-loader?modules",
                ],
            },
        ],
    },
    plugins: [
        new TypedCssModulesPlugin({
            globPattern: "src/**/*.css",
        }),
    ],
    devServer: {
        port: 8080,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".css"],
    },
};
