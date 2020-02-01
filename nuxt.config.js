/*
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-29 22:48:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\nuxt.config.js
 */
import dotenv from 'dotenv'
dotenv.config() // 要在此配置env才能生效

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss',
    '@/assets/iconfont/iconfont.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    // '@nuxtjs/auth',
  ],
  axios: {
    
    changeOrigin: true, // 允许跨域
    withCredentials: false, // 当跨域请求时发送cookie,当允许发送cookie时,access-contron-allow-origin不能为*,安全
    timeout: 5000, // 请求超时
    proxy: true
  },
  proxy: {
    '/api/': { target: 'http://hsid.top:3000', pathRewrite: { '^/api/': '' } },
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/member/user' },
  //         // logout: { url: '/auth/logout' },
  //         user: { url: '/member/login', propertyName: false }
  //       }
  //       // tokenRequired: true,
  //       // tokenType: 'bearer'
  //     }
  //   }
  // },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) {
    }
  },
  router: {
    middleware: 'auth'
  },
}
