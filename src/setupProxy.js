const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'https://www.google.com',
    changeOrigin: true
}
const proxy2 = {
    target: 'https://gateway.pinata.cloud',
    changeOrigin: true,
}
module.exports = function(app) {
  app.use(
    '/search',
    createProxyMiddleware(proxy)
  );


  app.use(
    '/ipfs',
    createProxyMiddleware(proxy2)
  );
};