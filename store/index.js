/*
 * @Author: your name
 * @Date: 2020-01-25 13:40:13
 * @LastEditTime : 2020-02-08 10:32:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\store\index.js
 */
import JwtService from "@/assets/common/JwtService.js";
import { apiCheckAuth, api_register, api_login, setAxiosAuthHeader } from '@/assets/api/auth.js'
export const state = () => ({
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
})

const getters = {
    currentUser(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
};
const actions = {
    async nuxtServerInit({ dispatch, commit }, { req }) {
        const cookie = req.headers.cookie;
        if (cookie) {
            const cookieObj = cookie.split("; ").reduce((target, item) => {
                const cookieItem = item.split("=");
                target[cookieItem[0]] =
                    cookieItem[1];
                return target;
            }, {})
            if (cookieObj.token) {
                let userObj = JSON.parse(decodeURIComponent(cookieObj.token).replace('j:', ''));
                this.$axios.setHeader('Authorization', `Bearer ${userObj.token}`)
                await dispatch('goods/selectShopCartTotal')
                commit("SET_AUTH", userObj);
            }
        }
    },
    randGoods({ commit }, params) {
        return this.$axios.$get('/goods/randGoods', {
            params
        })
    },
    login(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post('/member/login', data)
                .then((data) => {
                    context.commit("SET_AUTH", data.user);
                    resolve();
                })
                .catch(({ response }) => {
                    context.commit("SET_ERROR", response.data.errors);
                    reject(response.data.errors)
                });
        });
    },
    /**
     * @description: 登出清楚store和localstorage数据
     * @param {type} 
     * @return: 
     */
    logout(context) {
        context.commit('PURGE_AUTH');
        context.commit("goods/SET_TOTAL", false);
    },
    /**
     * @description: 创建新用户
     * @param {type} 
     * @return: 
     */
    register(context, credentials) {
        return new Promise((resolve, reject) => {
            api_register({ user: credentials })
                .then(({ data }) => {
                    context.commit("SET_AUTH", data.user);
                    resolve(data);
                })
                .catch(({ response }) => {
                    context.commit("SET_ERROR", response.data.errors);
                    reject(response);
                });
        });
    },
    /**
     * @description: 检查localstorage的token数据，获取用户数据
     * @param {type} 
     * @return: 
     */
    async check_auth({ commit, dispatch }) {
        return new Promise(async (resolve, reject) => {
            if (JwtService.getToken()) {
                this.$axios.setHeader('Authorization', `Bearer ${JwtService.getToken()}`)
                await this.$axios.$get('/member/user')
                    .then((data) => {
                        dispatch('goods/selectShopCartTotal')
                        commit("SET_AUTH", data.user);
                        resolve();
                    })
                    .catch(({ response }) => {
                        commit("SET_ERROR", response.data.errors);
                        reject(response.data.message); // 认证失败，token错误或过期
                    });
            } else {
                commit('PURGE_AUTH');
                commit("goods/SET_TOTAL", false);
            }
        })
    }
}

const mutations = {
    SET_ERROR(state, error) {
        state.errors = error;
    },
    SET_AUTH(state, user) {
        state.isAuthenticated = true;
        state.user = user;
        state.errors = {};
        JwtService.saveToken(state.user.token);
    },
    PURGE_AUTH(state) {
        state.isAuthenticated = false;
        state.user = {};
        state.errors = {};
        JwtService.destroyToken();
    }
};
export default {
    state,
    actions,
    mutations,
    getters
};