const webpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("./webpack.dev.js")
// let proxies = require("./proxyTable.js")
let proxies = {}

const options = {
  hot: true,
  contentBase: "../dist",
  host: '0.0.0.0', // 允许通过其他ip访问
  port: 3003, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  proxy: Object.assign(proxies, {
    '/': {
      target: 'localhost:3002',
      changeOrigin: true,
      toProxy: false,
      prependPath: false,
      secure: false, // 接受 运行在 https 上的服务
    },
  }),

}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(3003, "localhost", () => {
  console.log("dev server listening on port 3003")
})
