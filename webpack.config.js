const path = require('path');
const webpack = require('webpack')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: 'coffee-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  externals: {
    'handlebars/dist/handlebars.min.js': 'Handlebars',
    'jquery': 'jquery',
    'numeraljs': 'numeral',
    'sortablejs': 'Sortable'
  },
  entry: './package/src/index.js',
  output: {
    library: '@tomasc/simple_form_attachments',
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'package/dist')
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'index.css' }),
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
