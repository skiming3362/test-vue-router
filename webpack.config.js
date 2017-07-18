var path = require("path");
var webpack = require("webpack");
var plugin_html = require("html-webpack-plugin");
var plugin_extract_text = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        'test': './test.js'
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
            { test: /\.css$/, loader: plugin_extract_text.extract({ fallback: 'style-loader', use: 'css-loader!postcss-loader' }) },
            { test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/, loader: "file-loader" },
            { test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/, loader: "file-loader", query: { name: "[name].[ext]?[hash]" } }
        ]
    },
    plugins: [
        new plugin_extract_text({
            filename: "css/style[id].css",
            allChunks: true
        }),
        new plugin_html({
             filename: "test.html",
             template: "./test.html",
             chunks: ["test"],
             hash: true
         })
    ]
};
