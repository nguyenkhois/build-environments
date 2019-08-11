const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const devconfig = require('./webpack.dev');
const { host, serverPort, browserSyncPort } = require('./webpack.custom');

module.exports = merge(devconfig, {
    plugins: [
        new BrowserSyncPlugin({
            host: host,
            port: browserSyncPort,
            proxy: `http://${host}:${serverPort}`,
            open: false,
            notify: false,
            browser: 'chrome',
            watchOptions: {
                ignoreInitial: true,
                ignored: /node_modules/
            }
        },{ reload: false })
    ]
});