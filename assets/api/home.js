/*
 * @Author: your name
 * @Date: 2020-01-13 18:24:22
 * @LastEditTime : 2020-01-14 17:11:57
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\home.js
 */
import request from '@/assets/util/request'

export function getSearchGoods(params) {
    return request({
        url: '/getUserCensus',
        method: 'get',
        params
    })
}
