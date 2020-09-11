'use strict'
const path = require('path')
function resolve(dir) {
  console.log(path.join(__dirname, dir));
  return path.join(__dirname, dir)
}


// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following methods:
// port = 9528 npm run dev OR npm run dev --port = 9528
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    // proxy: {
    //     '/api': { // 匹配所有以 '/api'开头的请求路径
    //         target: 'http://localhost:3000', // 代理目标的基础路径
    //         changeOrigin: true, // 支持跨域
    //         secure: false
    //     }
    // }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'layout': '@/layout',
        'styles': '@/styles'
      }
    }
  },
}
