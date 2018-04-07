const path = require('path');
const webpack = require('webpack')

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const extractSass = new ExtractTextPlugin({ filename: "index.css" })

module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: ['babel-loader', 'coffee-loader']
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: ["css-loader", "sass-loader"],
          fallback: "style-loader"
        })
      }
    ],
  },
  externals: {
    jquery: 'jquery'
  },
  entry: './package/src/index.js',
  output: {
    library: '@tomasc/simple_form_attachments',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'index.js',
    path: path.resolve(__dirname, 'package/dist')
  },
  plugins: [
    extractSass,
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    extensions: ['.coffee', '.js'],
    alias: {
      'load-image': 'blueimp-load-image/js/load-image.js',
      'load-image-meta': 'blueimp-load-image/js/load-image-meta.js',
      'load-image-exif': 'blueimp-load-image/js/load-image-exif.js',
      'canvas-to-blob': 'blueimp-canvas-to-blob/js/canvas-to-blob.js',
      'jquery-ui/widget': 'blueimp-file-upload/js/vendor/jquery.ui.widget.js'
    }
  }
};
