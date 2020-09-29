const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isDev = process.env.NODE_ENV  === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config;
}

const cssLoaders = extra => {
    const loaders = [
            {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hrm: isDev,
                reloadAll: true
            },
          } ,'css-loader'
        ]
        if (extra) {
            loaders.push(extra);
        }
        return loaders;
        
}
const fileName = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill','./index.js']
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
      },
      resolve: {
        extensions: ['.js', '.jsx', '.png']
      },
      optimization: optimization(),
      devServer: {
        port: 4001,
        hot: isDev
    },
    devtool: isDev ? 'source-map': '',
      module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
              },
              {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            }, 
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },

        ]
      },
      plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: fileName('css')
        })
      ]
}