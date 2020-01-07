<!--
 * @Author: your name
 * @Date: 2020-01-07 14:26:41
 * @LastEditTime : 2020-01-07 14:33:07
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\category\index.vue
 -->
<template>
  <article class="category-con">
    <category></category>
    <banner></banner>
  </article>
</template>

<script>
import category from "./children/category";
import banner from "./children/banner";
export default {
  components: {
    category,
    banner
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.category-con {
  position: relative;
  height: 500px;
  width: 100%;
}
</style>