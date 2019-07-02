const WebpackRTLPlugin = require('webpack-rtl-plugin')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/sass/main.scss";`
      },
    }
  }
}
