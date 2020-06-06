/* eslint-disable */

const webpack = require("webpack");

module.exports = {
  webpack: (config, { dev, vendor }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        }
      ]
    });
    config.module.rules.push({
      test: /\.svg$/,
      use: {
        loader: "react-svg-loader"
      }
    });
    return config;
  }
};
