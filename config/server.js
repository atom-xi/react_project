const webpackDevServer = require("webpack-dev-server")
const webpack = require("webpack")
const config = require("./webpack.dev.js")
// let proxies = require("./proxyTable.js")
let proxies = {}
let port = 3030


const options = {
  hot: true,
  contentBase: "../dist",
  host: '0.0.0.0', // 允许通过其他ip访问
  port: port, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
  proxy: Object.assign(proxies, {
    '/api/': {
      target: 'http://localhost:3002',// 记得 "http://" 不然接口504
      changeOrigin: true,
      // toProxy: false,
      // prependPath: false,
      secure: false, // 接受 运行在 https 上的服务
    }
  })
  // cookiePathRewrite: {
  //   "/old.path/": "/new.path/",
  // }
}

webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(port, "localhost", () => {
  console.log(`dev server listening on port ${port}`)
})
