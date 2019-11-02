const proxyTargets = [
  {
    targetName: "ddwallet-app",
    target: "http://www3.ddwallet.net/",
  }
]

const proxies = {}
const BASE_URL = process.env.BASE_URL || ""

proxyTargets.forEach((proxyTarget) => {
  proxies[`/${proxyTarget.targetName}${BASE_URL}`] = {
    target: proxyTarget.target,
    pathRewrite: { [`/${proxyTarget.targetName}${BASE_URL}`]: proxyTarget.baseURL || BASE_URL || "" },
    changeOrigin: true,
    toProxy: false,
    prependPath: false,
  }
})

module.exports = proxies