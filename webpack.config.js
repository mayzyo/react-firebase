const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = env => {
    return {
        mode: env && env.production ? 'production' : 'development',
        entry: ['babel-polyfill', './src/index.ts'],
        devtool: env && env.production ? '' : 'inline-source-map',
        devServer: {
            contentBase: './dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            presets: [
                                [
                                    "@babel/preset-env",
                                    { targets: { browsers: "last 2 versions" } } 
                                    // or whatever your project requires
                                ],
                                "@babel/preset-typescript",
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "react-hot-loader/babel"
                            ]
                        }
                    }
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: 'file-loader'
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@components': path.join(__dirname, 'src', 'components'),
                '@models': path.join(__dirname, 'src', 'models'),
                '@hooks': path.join(__dirname, 'src', 'hooks'),
                '@config': path.join(__dirname, 'src', 'assets/config'),
            },
        },
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, 'dist'),
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    }
                }
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'React Firebase | Welcome'
            }),
            new ForkTsCheckerWebpackPlugin()
        ]
    }
}