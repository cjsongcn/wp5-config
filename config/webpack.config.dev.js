const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    devtool: 'inline-source-map',

    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[name][ext]'
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'assets/[name].css'
        })
    ]
};