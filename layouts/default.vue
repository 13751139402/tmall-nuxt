<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-31 21:25:05
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\layouts\default.vue
 -->
<template>
  <div>
    <site-nav>
      <template v-slot:left-con>
        <nuxt-link to="/">
          <div>
            <i class="iconfont icon31shouyexuanzhong" style="color:#FF0036"></i>
            <i class="goHome">天猫首页</i>
          </div>
        </nuxt-link>
      </template>
    </site-nav>
    <nuxt />
  </div>
</template>

<script>
import siteNav from "~/components/common/site-nav.vue";
export default {
  components: {
    "site-nav": siteNav
  }
};
</script>
<style>
</style>
