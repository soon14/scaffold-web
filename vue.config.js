const {defineConfig} = require('@vue/cli-service')

const port = 9999

module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        port: port,
        proxy: {
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
    }
}
