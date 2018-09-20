const Agent = require('agentkeepalive');
console.log('setting up proxy');
let url = 'http://localhost:';  //add your localhost here
var proxySettings = {
    target: url,
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    agent: new Agent({
        maxSockets: 100,
        keepAlive: true,
        maxFreeSockets: 10,
        keepAliveMsecs: 1000,
        timeout: 60000,
        keepAliveTimeout: 30000
    }),
    onProxyRes: proxyRes => {
        let key = 'www-authenticate';
        proxyRes.headers[key] = proxyRes.headers[key] && proxyRes.headers[key].split(',');
    }
};
module.exports = {
    '/api': proxySettings,
    '/help': proxySettings
}