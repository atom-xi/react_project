const HtmlWebpackPlugin = require("html-webpack-plugin")
// const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const ENV = process.env.NODE_ENV

module.exports = {
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.tsx",
    ventor: ["axios", "react", "react-dom", "react-router-dom"]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "HtmlWebpackPlugin" //如果设置了 template 则 title 失效
    }),
    new MiniCssExtractPlugin({
      filename: ENV === "production" ? "css/[name].[chunkhash:8].css" : "css/[name].css",
      chunkFilename: ENV === "production" ? "css/[name].[id].[chunkhash:8].css" : "css/[name].css"
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   names: ["vendor"],
    //   minChunks: Infinity,
    //   filename: "js/common.bundle.[chunkhash:8].js"
    // })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor",
          chunks: "initial",
          minChunks: 1
        },
        styles: {
          name: 'styles',
          test: /\.(css|scss|sass)$/,
          chunks: 'initial',
          minChunks: 5,
          enforce: true,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          // loader: "awesome-typescript-loader",
          loader: "ts-loader",
        }
      },
      {
        //处理css/scss/sass
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        loaders: [
          ENV === "production" ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,    //是否允许模块
              importLoaders: 20,
              localIdentName: "[path][name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
          },
          {
            //使用postcss
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")
              ]
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"]
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
}
