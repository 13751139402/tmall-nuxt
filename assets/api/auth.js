/*
 * @Author: your name
 * @Date: 2020-01-25 10:06:12
 * @LastEditTime : 2020-01-29 22:29:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\assets\api\auth.js
 */
import request from '@nuxtjs/axios'
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
    request.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`;
}