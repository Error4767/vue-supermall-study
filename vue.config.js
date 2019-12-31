let webpack = require('webpack');
let path = require('path');
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/assets/css/GlobalVar.scss";
        `
      }
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        components: '@/components',
        assets: '@/assets',
        views: '@/views',
        network: '@/network',
        common: '@/common',
        _node_modules: __dirname + '/node_modules'
      }
    },
    module: {
      rules: []
    },
    plugins: [
      new webpack.DefinePlugin({
        def1: '"def1"',
        def2: '"def2"'
      }),
      new webpack.ProvidePlugin({
        vuex1: 'vuex',
        baseFunction: '@/common/baseFunction.js'
      })
    ]
  }
};

