// const path = require('path');
// const pathResolve = pathEntry => path.resolve(__dirname, pathEntry);
// const nodeExternals = require('webpack-node-externals');
// const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding


import path from 'path';
import * as url from 'url'

import nodeExternals from "webpack-node-externals";
import NodemonPlugin from 'nodemon-webpack-plugin';

const pathResolve = pathEntry => path.resolve(__dirname, pathEntry);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const {
    NODE_ENV = 'production',
} = process.env;

const config = {
// module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'async-node',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        module: true,
        chunkFormat: 'module',
        chunkLoading: 'import'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    'eslint-loader',
                ],
            },
            // {
            //     test: /\.ts/,
            //     exclude: /node_modules/,
            //     use: ['ts-loader'],
            // },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            // {
            //     test: /\.node$/,
            //     exclude: /node_modules/,
            //     loader: "node-loader",
            // },
        ]
    },
    experiments: {
        outputModule: true,
    },
    externalsType: 'module',
    externals: [
        nodeExternals({
            allowlist: [
                /^@squallium-template/,
            ],
            modulesFromFile: true,
            importType: 'module',
            additionalModuleDirs: [
                path.resolve(__dirname, '../../node_modules')
            ],
        }),
        // nodeExternals(),
        // nodeExternals({
        //     modulesDir: path.resolve(__dirname, '../../node_modules'),
        // }),
    ],
    watch: NODE_ENV === 'development',
    plugins: [
        new NodemonPlugin(),
    ],
}

export default config;