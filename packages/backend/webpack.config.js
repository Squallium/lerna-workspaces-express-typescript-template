const path = require('path');
const pathResolve = pathEntry => path.resolve(__dirname, pathEntry);
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    externals: [
        nodeExternals({
            allowlist: [/^@squallium-template/],
            modulesFromFile: true
        })
    ],
    watch: NODE_ENV === 'development',
    plugins: [
        new NodemonPlugin(),
    ],
}