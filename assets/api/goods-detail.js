/*
 * @Author: your name
 * @Date: 2020-01-21 14:57:00
 * @LastEditTime : 2020-01-27 20:28:40
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\goodsDetail.js
 */
import request from '@/assets/common/request'

export function goodsDetails({spu_id=""}) {
    return request({
        url: '/goods/goodsDetails',
        method: 'get',
        params:{
            spu_id
        }
    })
}
