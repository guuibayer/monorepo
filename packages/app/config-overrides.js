const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

const directory = fs.realpathSync(process.cwd())
const resolving = paths => path.resolve(directory, paths)

const including = [
  resolving('src'),
  resolving('../components/src'),
  resolving('../core/src')
]

module.exports = function override(config) {
  config.resolve.alias['deepmerge$'] = 'deepmerge/dist/umd.js'

  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin'
  )

  config.module.rules[0].include = including
  config.module.rules[1] = null
  config.module.rules[2].oneOf[1].include = including
  config.module.rules = config.module.rules.filter(Boolean)

  return config
}
