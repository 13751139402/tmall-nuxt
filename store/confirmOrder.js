/*
 * @Author: your name
 * @Date: 2020-02-09 11:00:56
 * @LastEditTime : 2020-02-12 21:43:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\store\confimOrder.js
 */
export const state = () => ({
  orderList: [],
  params: []
});

const actions = {
  createOrder({ commit, state: { params } }) {
    return new Promise(async resolve => {
      const orderList = await this.$axios.$post("/order/confirmOrder", {
        params
      });
      resolve(orderList);
    });
  }
};

const mutations = {
  CREATE_ORDERLIST(state, orderList) {
    state.orderList = orderList;
  },
  CREATE_PARAMS(state, params) {
    state.params = params;
  }
};

export default {
  state,
  actions,
  mutations
};
