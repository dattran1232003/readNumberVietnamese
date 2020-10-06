'use strict'

var { babel } = require('@rollup/plugin-babel')
var { uglify }= require('rollup-plugin-uglify')

var input = 'source/index'

var config = {
  input: input,
  output: {
    format: 'umd',
    name: 'readNumber',
    exports: 'default'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      presets: [['@babel/preset-env', { targets: { ie: '11' } }]]
    })
  ] 
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      warnings: false
    })
  )
}

module.exports = config
