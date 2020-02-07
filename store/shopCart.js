/*
 * @Author: your name
 * @Date: 2020-02-01 20:37:49
 * @LastEditTime : 2020-02-07 21:13:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\store\goods.js
 */
export const state = () => ({
    checkedGoods: {},
    shopCartData: {}
})

const actions = {
    handleCheckedGoods({ commit }, { value, goodsData }) {
        if (value) {
            commit('ADD_CHECKGOODS', { [goodsData.id]: goodsData })
        } else {
            commit('DEL_CHECKGOODS', goodsData)
        }
    },
    handleCheckedShop({ commit }, { value, shopGoods }) {
        if (value) {
            let goodsData = shopGoods.reduce((target, item) => {
                Reflect.set(target, item.id, item)
                return target;
            }, {});
            commit('ADD_CHECKGOODS', goodsData)
        } else {
            shopGoods.forEach(item => {
                commit('DEL_CHECKGOODS', item)
            });
        }
    },
    handleCheckedAll({ commit }, { value, shopCartData }) {
        if (value) {
            let goodsAll = shopCartData.reduce((target, { goods }) => {
                let goodsData = goods.reduce((target, item) => {
                    Reflect.set(target, item.id, item);
                    return target;
                }, {})
                Object.assign(target, goodsData);
                return target;
            }, {})
            commit('ADD_CHECKGOODS', goodsAll)
        } else {
            commit('NOCHOOSE_CHECKGOODS')
        }
    },
    handleGoodsCount({ commit, state, }, { id, value }) {
        id = Number(id);
        return new Promise((resolve, reject) => {
            let checkedData = state.checkedGoods;
            if (Reflect.has(checkedData, id)) {
                commit('CHANGE_CHECK_GOODSCOUNT', { id, value })
            }
            // let goodsItem = commit('FIND_SHOPCARTDidATA', id)
            commit('CHANGE_SHOPDATA_COUNT', { id, value })

            this.$axios.$post('/order/changeGoodsCount', { id, count: value }).then(() => {
                resolve();
            })
        })
    },
    delGoods({ commit }, ids) {
        return new Promise(() => {
            console.log(ids);
            this.$axios.$delect('/order/delectGoods', ids).then(() => {
                commit('DEL_CHECKGOODS', ids)
                resolve();
            }).catch(() => {
                reject();
            })
        })
    }
}

const mutations = {
    ADD_CHECKGOODS(state, goodsData) {
        state.checkedGoods = Object.assign({}, state.checkedGoods, goodsData);
    },
    DEL_CHECKGOODS(state, { id }) {
        Reflect.deleteProperty(state.checkedGoods, id)
        state.checkedGoods = Object.assign({}, state.checkedGoods)
    },
    NOCHOOSE_CHECKGOODS(state) {
        state.checkedGoods = {};
    },
    CHANGE_CHECK_GOODSCOUNT(state, { id, value }) {
        state.checkedGoods[id].product_amount = value;
        state.checkedGoods = Object.assign({}, state.checkedGoods);
    },
    ADD_shopCartData(state, data) {
        data.forEach(({ goods }) => {
            goods.forEach(goods => {
                let { sku: { specValue } } = goods;
                specValue.forEach(({ spec_value_cover }) => {
                    if (spec_value_cover) {
                        goods.spu.cover = spec_value_cover;
                    }
                });
            });
        });
        state.shopCartData = data;
    },
    CHANGE_SHOPDATA_COUNT(state, { goodsItem, value }) {
        goodsItem.product_amount = value;
        state.shopCartData = Object.assign([], data);
    },
    FIND_SHOPCARTDATA(state, id) {
        let data = state.shopCartData;
        for (let index = 0, len = data.length; index < len; index++) {
            const { goods } = data[index];
            for (let index = 0, len = goods.length; index < len; index++) {
                const goodsItem = goods[index];
                if (goodsItem.id === id) {
                    return goodsItem;
                }
            }
        }
    },
    DEL_CHECKGOODS(state, ids) {
        let checkedGoods = state.checkedGoods;
        let shopCartData = state.shopCartData;
        ids.forEach((id) => {
            if (Reflect.has(checkedGoods, id)) {
                Reflect.deleteProperty(checkedGoods, id);
            }
            for (let index = 0, len = shopCartData.length; index < len; index++) {
                const { goods } = shopCartData[index];
                for (let index = 0, len = goods.length; y < len; y++) {
                    const goodsItem = goods[y];
                    if (goodsItem.id === id) {
                        goods.splice(y, 1);
                        if (shopCartData[index].length === 0) {
                            shopCartData.splice(index, 1);
                        }
                    }
                }
            }
        })
        state.checkedGoods = Object.assign({}, checkedGoods)
        state.shopCartData = Object.assign([], shopCartData)
    }
}

export default {
    state,
    actions,
    mutations,
};