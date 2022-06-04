const path = require("path");
const webpack = require("webpack");
const dotenv = require('dotenv').config( {
    path: path.join(__dirname, '.env')
} );

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                //exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        https: false,
        host: "0.0.0.0",
        port: 3000,
        publicPath: "/",
        hotOnly: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // makes dotenv variables available during build
        new webpack.DefinePlugin({
            'process.env': {
                "API_HOST": JSON.stringify(dotenv.parsed.API_HOST),
                "AUTH_CALLBACK_URI": JSON.stringify(dotenv.parsed.AUTH_CALLBACK_URI)
            }
        })
    ]
};