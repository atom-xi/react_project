const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const ENV = process.env.NODE_ENV;

module.exports = {
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/index.tsx",
    ventor: ["axios", "react", "react-dom", "react-router-dom"]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
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
          name: "styles",
          test: /\.(css|scss|sass)$/,
          chunks: "initial",
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
      //静态检查TS
      {
        test: /\.tsx$/,
        use: [
          {
            loader: "eslint-loader"
          }
        ],
        enforce: "pre",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "../src")], // 指定检查的目录
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        }
      },
      {
        //处理css/scss/sass
        test: /\.(css|scss|sass)$/,
        exclude: /node_modules/,
        use: [
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
            //使用postcss
            loader: "postcss-loader",
            options: {
              plugins: [
                require("autoprefixer")
              ]
            }
          },
          {
            loader: "sass-loader",
          }

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
};
