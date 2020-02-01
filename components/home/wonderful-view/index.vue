<!--
 * @Author: your name
 * @Date: 2020-01-08 17:59:34
 * @LastEditTime : 2020-01-29 13:17:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\wonderful\index.vue
 -->
<template>
  <article class="wonderful-con">
    <h2 class="wonderful-title">
      <span class="text-ctn">
        <i class="iconfont iconzan fp-iconfont"></i>猜你喜欢
      </span>
    </h2>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <floor-item
        v-for="item in list"
        :key="item.spu_no"
        :price="item.price"
        href="/"
        :name="item.goods_name"
        :img="item.cover"
        style="margin: 0;"
      ></floor-item>
    </div>
    <div class="tm-end show"></div>
  </article>
</template>

<script>
import floorItem from "@/components/home/activity-view/children/floor-line-con-item";
import { randGoods } from "@/assets/api/home.js";
export default {
  components: {
    "floor-item": floorItem
  },
  data() {
    return {
      list: []
    };
  },
  async beforeMount() {
    this.list = await this.$store.dispatch("randGoods", { num: 60 });
  }
};
</script>

<style scoped lang="scss">
.wonderful-con {
  padding-right: 30px;
  width: 1230px;
  margin: 30px auto 0;
  .wonderful-title {
    color: #666;
    text-align: center;
    height: 43px;
    font-weight: 100;
    .text-ctn {
      position: relative;
      font-size: 18px;
      line-height: 20px;
      font-family: "Microsoft YaHei", SimSun, sans-serif,
        "\65b9\6b63\5170\4ead\9ed1";
      &:before {
        content: "";
        left: -38px;
        position: absolute;
        width: 30px;
        height: 1px;
        background-color: #979797;
        top: 12px;
      }
      &:after {
        content: "";
        right: -38px;
        position: absolute;
        width: 30px;
        height: 1px;
        background-color: #979797;
        top: 12px;
      }
      .fp-iconfont {
        position: relative;
        top: 1px;
        margin-right: 4px;
        font-size: 20px;
        color: #ff0036;
      }
    }
  }
}
.infinite-list-wrapper {
  overflow: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.wonderful-con .tm-end {
  background: url(//img.alicdn.com/tps/TB1wQDAPXXXXXXgaFXXXXXXXXXX-62-35.png)
    no-repeat;
  position: relative;
  display: none;
  content: "\20";
  text-align: center;
  width: 80px;
  height: 45px;
  margin: 0 auto 10px;
  background-size: cover;
  z-index: 9;
  &.show {
    display: block;
  }
}
</style>