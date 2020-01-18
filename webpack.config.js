//@ts-check

"use strict"

const path = require("path")

/**@type {import('webpack').Configuration}*/
const config = {
    target: "node",

    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        libraryTarget: "commonjs",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
            {
                test: /\.ts$/,
                exclude: /misc/,
            },
        ],
    },
}
module.exports = config
