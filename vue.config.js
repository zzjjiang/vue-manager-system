module.exports = {
  devServer: {
    port: 1117,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variable.scss";`
      }
    }
  }
}
