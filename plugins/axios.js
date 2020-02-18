/*
 * @Author: your name
 * @Date: 2020-02-08 10:34:57
 * @LastEditTime : 2020-02-08 11:00:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\plugins\axios.js
 */
import JwtService from "@/assets/common/JwtService.js";
export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        if (!config.headers.common.Authorization && JwtService.getToken()) {
            config.headers.common.Authorization = `Bearer ${JwtService.getToken()}`
        }
    })

    // $axios.onError(error => {
    //   const code = parseInt(error.response && error.response.status)
    //   if (code === 400) {
    //     redirect('/400')
    //   }
    // })
}