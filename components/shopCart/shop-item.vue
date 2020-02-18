<!--
 * @Author: your name
 * @Date: 2020-02-05 12:28:21
 * @LastEditTime : 2020-02-11 20:40:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\components\shopCart\shop-item.vue
 -->
<template>
  <div id="J_OrderHolder" style="height: auto;">
    <div id="J_Order" class="J_Order clearfix order-body">
      <div class="J_ItemHead shop clearfix">
        <div class="shop-info">
          <el-checkbox @change="handleCheckedShopChange" v-model="isChecked"></el-checkbox>
          <span class="shop-icon icon-B"></span>店铺：
          <a target="_blank" :title="shop_name" class="J_MakePoint">{{shop_name}}</a>
          <span
            class="ww-light ww-small"
            data-icon="small"
            :data-nick="shop_name"
            data-display="inline"
          ></span>
        </div>
      </div>
      <slot :goods="goods"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "shop_name", "goods"],
  data() {
    return {
      isChecked: false
    };
  },
  methods: {
    handleCheckedShopChange(val) {
      this.$emit("handleCheckedShopChange", val, this.goods);
    }
  },
  watch: {
    "$store.state.shopCart.checkedGoods"(checkedGoods) {
      for (let index = 0, len = this.goods.length; index < len; index++) {
        if (!Reflect.has(checkedGoods, this.goods[index].id)) {
          this.isChecked = false;
          return;
        }
      }
      this.isChecked = true;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global.scss";
@import "@/assets/css/cart-min.scss";
</style>