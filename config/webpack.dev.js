const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const webpack = require("webpack")
const path = require("path")
const OpenBrowserPlugin = require("open-browser-webpack-plugin")

const option = {
  mode: "development",
  output: {
    filename: "js/[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./"
  },
  devtool: "inline-source-map",
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new OpenBrowserPlugin({ url: "http://localhost:3000" })
  ]
}

module.exports = merge(common, option)
