/*
 * @Author: your name
 * @Date: 2020-01-21 14:57:00
 * @LastEditTime : 2020-01-21 15:31:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\goodsDetail.js
 */
import request from '@/assets/util/request'

export function goodsDetails(params) {
    return request({
        url: '/goods/goodsDetails',
        method: 'get',
        params
    })
}
