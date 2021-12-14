const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    chunkFilename: '[chunkhash].js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
          test: /\.ts$/i,
          use: 'ts-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset'
      }
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: '基于webpack5构建的工程',
        inject: 'body'
      }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};