const plugins = ['@vue/babel-plugin-transform-vue-jsx', '@babel/plugin-transform-modules-commonjs']
// 生产环境移除 console
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}

module.exports = {
  plugins: plugins,
  presets: [
    ['@vue/app', {
      useBuiltIns: "entry"
    }],
    ['@babel/env', {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1"
      }
    }]
  ]
}
