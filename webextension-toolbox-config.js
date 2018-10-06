/* eslint-disable */

const webpack = require("webpack");

module.exports = {
    webpack: (config, { dev, vendor }) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
            ]
        })
        return config;
    }
};
