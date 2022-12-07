const path = require('path');

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.join(__dirname,'./src/assets/styles/variables.less'),
        path.join(__dirname,'./src/assets/styles/mixins.less')
      ]
    }
  },
  devServer:{
    proxy:{      
      '/api':{
        target:'http://www.xlitongx.fun:3000',//本地接口，自己的服务器
        ws:true,
        changeOrigin:true,
        pathRewrite:{//重写路径
          '^/api':''
        }
      },
    },
  }
  
})
