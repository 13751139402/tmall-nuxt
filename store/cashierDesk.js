/*
 * @Author: your name
 * @Date: 2020-02-09 11:00:56
 * @LastEditTime: 2020-02-18 17:29:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\store\confimOrder.js
 */
export const state = () => ({
  titleData: {
    productName: "",
    shopName: ""
  },
  price: 0,
  orderIdList: []
});

const actions = {
  payOrder({ state }) {
    return new Promise(async (resolve, reject) => {
      if (!state.orderIdList.length) {
        throw new error("没有orderList");
      }
      await this.$axios.$put("/order/payOrder", {
        orderList: state.orderIdList
      });
      resolve();
    });
  }
};

const mutations = {
  CREATE_TITLEDATA(state, { productName, shopName }, count) {
    if (state.orderIdList.length > 1) {
      state.titleData = {
        productName: `合并｜${state.orderIdList.length}笔订单`,
        shopName: false
      };
    } else {
      state.titleData = {
        productName: `天猫Tmall -- ${productName} ${count ? "等多件" : ""}`,
        shopName
      };
    }
  },
  CREATE_ORDERIdList(state, orderIdList) {
    state.orderIdList = orderIdList;
    if (state.orderIdList.length > 1) {
      state.titleData = {
        productName: `合并｜${state.orderIdList.length}笔订单`,
        shopName: false
      };
    }
  },
  CREATE_PRICE(state, price) {
    state.price = price;
  }
};

export default {
  state,
  actions,
  mutations
};
