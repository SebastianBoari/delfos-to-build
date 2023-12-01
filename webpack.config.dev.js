const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[hash][ext][query]",
        publicPath: '/'
    },
    mode: "development",
    devtool: "source-map",
    resolve: {
        extensions: [".js"],
        alias: {
            "@utils": path.resolve(__dirname, "src/utils/"),
            "@templates": path.resolve(__dirname, "src/templates/"),
            "@pages": path.resolve(__dirname, "src/pages/"),
            "@css": path.resolve(__dirname, "src/css/"),
            "@images": path.resolve(__dirname, "src/assets/images/"),
            "@icons": path.resolve(__dirname, "src/assets/icons/"),
            "@routes": path.resolve(__dirname, "src/routes/"),
            "@script": path.resolve(__dirname, "src/js/"),
            "@managers": path.resolve(__dirname, "src/managers/"),
            "@utils": path.resolve(__dirname, "src/utils.js")
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg)$/,
                type: "asset/resource"
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "./[name].[contenthash].css"
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        historyApiFallback: {
            index: '/'
        },
        port: 3000,
    }
}