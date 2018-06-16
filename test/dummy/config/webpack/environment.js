const { environment } = require('@rails/webpacker')
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')

environment.resolvedModules.append('node_modules', path.resolve('./node_modules'))
environment.resolvedModules.append('simple_form_attachments', path.resolve('../..'))

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    JQuery: 'jquery',
    jquery: 'jquery',
    'window.Tether': "tether",
    Popper: ['popper.js', 'default'], // for Bootstrap 4
  })
)

const envConfig = module.exports = environment
const aliasConfig = module.exports = {
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery'
    }
  }
}

module.exports = merge(envConfig.toWebpackConfig(), aliasConfig)
