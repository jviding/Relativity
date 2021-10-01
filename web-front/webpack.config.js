const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: [
        path.resolve(__dirname, './app/main.tsx'),
        path.resolve(__dirname, './app/style.scss')
    ],
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] 
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    output: {
        path: path.resolve(__dirname, './static/'),
        filename: 'app.js'
    },
    devServer: {
        allowedHosts: ['*'],
        port: 8080,
        static: {
            directory: './static/',
            publicPath: '/'
        }
    }
}