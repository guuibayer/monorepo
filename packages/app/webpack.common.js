const webpack = require('webpack')

const PATH = require('./path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: `${PATH.source}/index.js`
  },

  output: {
    path: PATH.build
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js'],
    symlinks: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.public}/index.html`
    })
  ]
}
