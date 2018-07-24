const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "./dist"), // the root for the server
        watchContentBase: true, // so we reload if other stuff like CSS changes
        port: 9090, // it'll now be at http://localhost:9000
        watchOptions: {
            ignored: /node_modules/
        }
    }
});