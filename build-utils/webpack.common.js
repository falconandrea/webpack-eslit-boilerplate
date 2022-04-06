const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  plugins: [
    new ESLintPlugin({
      extensions: ['js'],
      exclude: [
        '/node_modules/'
      ]
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    static: './dist'
  }
}
