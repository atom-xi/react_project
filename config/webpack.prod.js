const path = require("path")
const merge = require("webpack-merge")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const TerserWebpackPlugin = require("terser-webpack-plugin")
const common = require("./webpack.common.js")


const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const ENV = process.env.NODE_ENV //这里的环境变量是node的环境

let option = {
  mode: "production",
  output: {
    filename: "js/[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "./"
  },
  plugins: [
    new CleanWebpackPlugin(), //新版本默认删除webpack输出中的所有文件
    // new CleanWebpackPlugin(["./dist"], {
    //   root: path.resolve(__dirname, "..")
    // }),
    new UglifyJSPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            drop_console: false,//去掉console.log
          },
        },
      }),
    ]
  },
}

if (ENV === "production_test") {
  let BundleAnalyzer = new BundleAnalyzerPlugin({
    analyzerPort: 9500
  })
  option.plugins.push(BundleAnalyzer)
}

module.exports = merge(common, option)
