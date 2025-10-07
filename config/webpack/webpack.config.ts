import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import webpack, {RuleSetRule} from 'webpack';
import 'webpack-dev-server'; // чтобы не было ошибки типов
import dotenv from 'dotenv';
import alias from '../aliases.js';
import globals from '../globals.js';

dotenv.config();

const development = process.env.NODE_ENV !== 'production';

export default (): webpack.Configuration[] => [
    {
        devtool: development && 'source-map',
        mode: 'development',
        entry: {
            main: ['./src/main.ts'],
        },
        target: 'electron-main',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
            ]
        },
        output: {
            path: path.resolve(process.cwd(), 'build'),
            filename: 'main.js',
        },
    },
    {
        devtool: development && 'source-map',
        mode: 'development',
        entry: './src/preload.ts',
        target: 'electron-preload',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
            ]
        },
        output: {
            path: path.resolve(process.cwd(), 'build'),
            filename: 'preload.js',
        },
    },
    {
        devtool: development && 'source-map',
        mode: 'development',
        entry: './src/renderer.ts',
        target: 'electron-renderer',
        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
            ]
        },
        output: {
            path: path.resolve(process.cwd(), 'build'),
            filename: 'renderer.js',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    },
];
