const {resolve} = require("path")

module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/style/main.scss'
        })
        .end()
    })
  },

  configureWebpack: {
    /* webpack 配置 */
    /*
      如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
      https://cli.vuejs.org/zh/config/#integrity
    */
    resolve: {
      alias: {
        'vendor': resolve(__dirname, '../src/plugins/2Excel')
      }
    }
  },
}
