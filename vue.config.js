'use strict'
const path = require('path')
const Global = require('./src/global.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = Global.title // 网站标题
const port = 9999 // 端口号

module.exports = {
  publicPath: '/', // 部署应用包时的基本 URL
  outputDir: 'dist', // 执行build时生成的生产环境构建文件的目录
  assetsDir: 'static', // 放置生成的静态资源
  lintOnSave: false, // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: { // 通过设置代理处理跨域
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/auth': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/auth': '/auth'
        }
      }
    }
  },
  configureWebpack: {
    // 在 webpack 的 name 字段中提供应用程序的标题，以便
    // 可以在 index.html 中访问它以注入正确的标题。
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // 设置 preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial' // 只打包最初依赖的第三方
              },
              elementUI: {
                name: 'chunk-elementUI', // 将 elementUI 拆分为单个包
                priority: 20, // 权重需要大于 libs 和 app 否则会被打包到 libs 或 app 中
                test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // 为了适应cnpm
              },
              commons: {
                name: 'chunk-commons',
                test: resolve('src/components'), // 可以自定义您的规则
                minChunks: 3, //  最小公用数
                priority: 5,
                reuseExistingChunk: true
              }
            }
          })
          config.optimization.runtimeChunk('single')
        }
      )
  }
}
