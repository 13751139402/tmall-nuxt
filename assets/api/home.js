/*
 * @Author: your name
 * @Date: 2020-01-13 18:24:22
 * @LastEditTime : 2020-01-29 12:46:46
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\home.js
 */
import request from '@nuxtjs/axios'

export function randGoods(params) {
    return request({
        url: '/goods/randGoods',
        method: 'get',
        params
    })
}
