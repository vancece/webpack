const path = require('path');
const yaml = require('yaml');
const toml = require('toml');
const json5 = require('json5');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(tff)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(csv)$/i,
                use: ['csv-loader']
            },
            {
                test: /\.(xml)$/i,
                use: ['xml-loader']
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                }
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse
                }
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse
                }
            }
        ]
    }
}