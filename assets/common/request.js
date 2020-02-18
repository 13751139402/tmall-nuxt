/*
 * @Author: your name
 * @Date: 2020-01-13 18:23:18
 * @LastEditTime : 2020-02-08 00:28:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\util\request.js
 */
import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
    baseURL: process.env.DEV_BASE_URL, // url = 基本url +请求url
    changeOrigin: true, // 允许跨域
    withCredentials: false, // 当跨域请求时发送cookie,当允许发送cookie时,access-contron-allow-origin不能为*,安全
    timeout: 5000 // 请求超时
})

export default service;
