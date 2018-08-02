const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    entry: './src/index.tsx',// which file to begin with, 
    output: {
        path: path.resolve(__dirname, "./dist"), // what folder to put bundle in
        filename: 'bundle.js' // what name to use for bundle
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {   test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {   enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
    plugins: [
        new webpack.DefinePlugin({'process.env.NODE_ENV':JSON.stringify('production')}),
        new WebpackNotifierPlugin({alwaysNotify: true})
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }    
};