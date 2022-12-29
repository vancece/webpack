const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 跟环境有关
    entry: {
        index: "./src/index.js",
        print: './src/print.js',
    },
    devtool: "inline-source-map",
    plugins: [
        // html-webpack-plugin 的作用是：当使用 webpack打包时，创建一个 html 文件，并把 webpack 打包后的静态文件自动插入到这个 html 文件当中。
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        runtimeChunk: 'single'
    }
}