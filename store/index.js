/*
 * @Author: your name
 * @Date: 2020-01-25 13:40:13
 * @LastEditTime : 2020-01-30 15:03:03
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\store\index.js
 */
import JwtService from "@/assets/common/JwtService.js";

const actions = {
    randGoods(context, params) {
        return this.$axios.$get('/goods/randGoods', {
            params
        })
    },
    nuxtServerInit({ dispatch, commit }, { req }) {
        let cookie = req.headers.cookie;
        if (cookie) {
            let token = cookie.split("=")[1];
            JwtService.setReplaceToken(token)
        }
    }
}

export default {
    actions,
};