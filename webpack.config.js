const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: 'C:\\Users\\jonty\\Desktop\\IntelliNotes-AI.2\\src\\popup.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: 'popup.html',
    }),

        new CopyPlugin({ //could do for node modules?
            patterns: [
                {from: "public"},
            ],
        })
    ],
};