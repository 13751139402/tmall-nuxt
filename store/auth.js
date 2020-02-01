/*
 * @Author: your name
 * @Date: 2020-01-25 09:48:08
 * @LastEditTime : 2020-01-30 15:09:35
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\store\auth.js
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
    async check_auth({ commit }) {
        return new Promise(async (resolve, reject) => {
            if (JwtService.getToken()) {
                this.$axios.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`
                await this.$axios.$get('/member/user')
                    .then((data) => {
                        commit("SET_AUTH", data.user);
                        resolve();
                    })
                    .catch(({ response }) => {
                        commit("SET_ERROR", response.data.errors);
                        reject(response.data.message); // 认证失败，token错误或过期
                    });
            } else {
                commit('PURGE_AUTH');
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