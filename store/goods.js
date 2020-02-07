/*
 * @Author: your name
 * @Date: 2020-02-01 20:37:49
 * @LastEditTime : 2020-02-07 12:20:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\store\goods.js
 */
export const state = () => ({
    total: false
})

const actions = {
    addShopCart({dispatch}, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post('/order/addShopCart', data)
                .then((data) => {
                    dispatch('selectShopCartTotal')
                    resolve();
                })
                .catch(({ response }) => {
                    reject(response.data.errors)
                });
        });
    },
    findSku(context, data) {
        return new Promise((resolve, reject) => {
            this.$axios.$post('/goods/findSku', data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({ response }) => {
                    reject(response.data.errors)
                });
        });
    },
    selectShopCartTotal({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.$get('/order/shopCartTotal').then((data) => {
                commit('SET_TOTAL', data)
                resolve()
            }).catch((errors) => {
                reject(reject);
            })
        })
    }
}

const mutations = {
    SET_TOTAL(state, total) {
        state.total = total;
    }
}

export default {
    state,
    actions,
    mutations,
};