const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
  devServer: {
    port: 3003,
  },
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').set('@', resolve('src'));
  },

  publicPath: '/Static/chat-system',
  outputDir: undefined,
  assetsDir: 'static',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
};
