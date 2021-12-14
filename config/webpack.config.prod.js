const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',

    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[contenthash][ext]'
    },

    plugins: [
        new MiniCssExtractPlugin({
          filename: 'assets/[name]_[contenthash].css'
        })
    ]
};