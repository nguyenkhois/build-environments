const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { entryPoints, distDir, htmlTemplate } = require('./webpack.custom'); // Using your own configs

module.exports = {
    entry: entryPoints,// which file(s) to begin with
    output: {
        path: path.resolve(__dirname, distDir), // what folder to put bundle in
        filename: '[name].[hash].js' // what name to use for bundle
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new HtmlWebpackPlugin({ template: htmlTemplate }),
        new CleanWebpackPlugin(),
        new WriteFilePlugin({
            test: /\.(png|jpg|gif|svg)$/i
        }),
        new CopyWebpackPlugin([
            { from: 'src/images', to: 'images' }
        ])
    ]
};