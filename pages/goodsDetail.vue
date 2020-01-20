
<template>
  <div>
    <site-nav>
      <template v-slot:left-con>
        <div>
          <i class="iconfont icon31shouyexuanzhong" style="color:#FF0036"></i>
          <i>天猫首页</i>
        </div>
      </template>
    </site-nav>
    <nav class="navigation-con">
      <ul class="navigation-bar">
        <li>logo</li>
        <li>首页</li>
        <li>新品到店</li>
        <li>男士特区</li>
        <li>女士特区</li>
        <li>处理中心</li>
        <li>会员臻选</li>
        <li>全部商品</li>
        <li>搜索</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import siteNav from "~/components/home/site-nav.vue";
export default {
  components: {
    "site-nav": siteNav
  }
};
</script>

<style scoped lang="scss">
.navigation-con {
  width: 100%;
  height: 45px;
  background: #333;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  .navigation-bar {
    display: flex;
    width: 990px;
    justify-content: space-around;
    align-items: center;
  }
}
</style>