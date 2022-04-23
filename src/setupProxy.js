// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://lulzsec-tulahack-api-server.herokuapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/', //remove /service/api
      },
    }),
  )
}
