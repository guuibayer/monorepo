const { resolve } = require('path')
const webpack = require('webpack')

const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const PATH = {
  entries: resolve(__dirname, 'src'),
  public: resolve(__dirname, '')
}

module.exports = {
  entry: {},

  output: {
    path: PATH.public
  },

  resolve: {
    extensions: ['.js', '.ts']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },

  optimization: {
    minimize: true
  },

  watchOptions: {
    ignored: /node_modules/
  },

  plugins: [
    new BrowserSyncPlugin(
      {
        port: 3000,
        open: false,
        host: 'localhost'
      },
      {
        reload: true
      }
    )
  ]
}
