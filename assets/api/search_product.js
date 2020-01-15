/*
 * @Author: your name
 * @Date: 2020-01-13 18:24:22
 * @LastEditTime : 2020-01-15 17:26:28
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\home.js
 */
import request from '@/assets/util/request'

export function searchGoods(params) {
    return request({
        url: '/goods/searchGoods',
        method: 'get',
        params
    })
}
