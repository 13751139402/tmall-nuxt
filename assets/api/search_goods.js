/*
 * @Author: your name
 * @Date: 2020-01-13 18:24:22
 * @LastEditTime : 2020-01-20 10:59:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\home.js
 */
import request from '@/assets/common/request'

export function searchGoods({ searchKey, pageNum = 1, pageSize = 60 }) {
    return request({
        url: '/goods/searchGoods',
        method: 'get',
        params: {
            searchKey, pageNum, pageSize
        }
    })
}
