const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');

// 使用 dotenv 加载 .env 文件
dotenv.config();

// 从环境变量中获取 URL
const baseUrl = process.env.VUE_APP_BASE_URL;
console.log(process.env.VUE_APP_BASE_URL);
module.exports = {
  ...defineConfig({
    transpileDependencies: [
      'vuetify'
    ]
  }),

  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: baseUrl,
  //       changeOrigin: true,
  //       secure: false
  //     }
  //   }
  // }
};
