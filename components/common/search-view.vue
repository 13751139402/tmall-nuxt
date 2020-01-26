<!--
 * @Author: your name
 * @Date: 2020-01-15 10:42:02
 * @LastEditTime : 2020-01-26 10:47:58
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\common\.vue
 -->
<!--
 * @Author: your name
 * @Date: 2020-01-15 10:42:02
 * @LastEditTime : 2020-01-16 10:43:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\common\search-view.vue
 -->
<template>
  <!------- 搜索栏 ------->
  <article id="header_layout">
    <main class="header_con">
      <h1 id="mallH1" title="天猫Tmall.com">天猫Tmall.com</h1>
      <slot name="logo"></slot>
      <section id="header_input">
        <input
          v-model="valueData"
          class="search_input"
          placeholder="搜索 天猫 商品/品牌/店铺"
          @input="$emit('input', $event.target.valueData)"
        />
        <nuxt-link :to="{ path: '/redirect/searchGoods', query: { searchKey: valueData }}">
          <button class="search_button">搜索</button>
        </nuxt-link>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      valueData: this.value
    };
  }
};
</script>

<style scoped lang='scss'>
.header_con {
  width: 1190px;
  display: flex;
  justify-content: center;
  position: relative;
}
#mallH1 {
  display: none;
}
#header_layout {
  display: flex;
  justify-content: center;
  height: 130px;
}
#header_input {
  width: 625px;
  height: 40px;
  margin-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff0036;
  border-width: 2px 0 2px 2px;
  box-sizing: border-box;
  .search_input {
    width: 491px;
    height: 100%;
    border: 0;
    font: 16px/22px arial;
    padding: 5px 3px 5px 5px;
    box-sizing: border-box;
  }
  .search_button {
    width: 132px;
    cursor: pointer;
    height: 36px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    background-color: #ff0036;
    color: #fff;
    font-family: "\5FAE\8F6F\96C5\9ED1", arial, "\5b8b\4f53";
  }
}
</style>