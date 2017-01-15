/**
 * Created by Jenson on 23.12.16.
 */

const path = require('path');
const webpack = require('webpack');

const srcPath = path.join(__dirname, '/src');
const dfltPort = 8000;

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, '/assets'),
        filename: 'app.js',
        publicPath: '/assets/',
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 8000,
        publicPath: '/assets/',
        noInfo: false
    },
    devtool: 'cheap-eval-source-map',
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'sass'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};