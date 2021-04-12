const path = require("path");
const { SourceMapDevToolPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js"
  },
  node: {
    Buffer: false,
    process: false
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          outputPath: "fonts"
        }
      }
    ]
  },
  plugins: [
    new SourceMapDevToolPlugin(),
    new CleanWebpackPlugin(),
    new FaviconsWebpackPlugin("./assets/esig.png"),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: "index.html" }
      ]
    })
  ]
};
