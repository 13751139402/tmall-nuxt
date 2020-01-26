/*
 * @Author: your name
 * @Date: 2020-01-25 10:06:12
 * @LastEditTime : 2020-01-26 12:17:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\auth.js
 */
import request from '@/assets/common/request'
import JwtService from '@/assets/common/JwtService'

export function apiCheckAuth() {
    return request({
        url: '/member/user',
        method: 'get'
    })
}

export function api_register(data) {
    return request({
        url: '/member/create',
        method: 'post',
        data
    })
}


export function api_login(data) {
    return request({
        url: '/member/login',
        method: 'post',
        data
    })
}

export function setAxiosAuthHeader() {
    request.defaults.headers.common["Authorization"] = `Token ${JwtService.getToken()}`;
}