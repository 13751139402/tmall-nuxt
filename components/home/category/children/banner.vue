<!--
 * @Author: your name
 * @Date: 2020-01-07 14:27:29
 * @LastEditTime : 2020-01-09 16:34:09
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\category\children\banner.vue
 -->
<!--
 * @Author: your name
 * @Date: 2020-01-07 14:27:29
 * @LastEditTime : 2020-01-07 14:29:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\category\children\banner.vue
 -->
<template>
  <section class="banner">
    <el-carousel arrow="never" height="500px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <a href>
          <img :src="item.src" alt />
        </a>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bannerList: [
        { href: "", src: "http://hsid.top/images/1578558771089-1.jpg" },
        { href: "", src: "http://hsid.top/images/1578558773748-2.jpg" },
        { href: "", src: "http://hsid.top/images/1578558775749-3.jpg" },
        { href: "", src: "http://hsid.top/images/1578558778163-4.jpg" },
        { href: "", src: "http://hsid.top/images/1578558780547-5.jpg" },
        { href: "", src: "http://hsid.top/images/1578558782602-6.jpg" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 500px;
  overflow: hidden;
  position: relative;
  z-index: 0;
  width: 1230px;
  margin: 0 auto;
  height: 500px;
  padding-right: 30px;
  box-sizing: content-box;
  img {
    width: 100%;
  }
  /deep/.el-carousel__button {
    width: 25px;
    height: 5px;
  }
}
</style>