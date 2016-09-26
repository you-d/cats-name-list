var path = require("path");
var webpack = require("webpack");

module.exports = {
    debug: true,
    cache: false,
    entry: {
        jsCombo: path.join(__dirname, "src/js/main.js")
    },
    output: {
        path: path.join(__dirname, "public/"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    resolve: {},
    plugins: []
};
