<!--
 * @Author: your name
 * @Date: 2020-01-07 14:27:29
 * @LastEditTime: 2020-02-18 18:09:01
 * @LastEditors: Please set LastEditors
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
        {
          href: '',
          src: 'https://img.alicdn.com/tps/i4/TB18G8QvUH1gK0jSZSySuttlpXa.jpg'
        },
        {
          href: '',
          src:
            'https://img.alicdn.com/imgextra/i1/161/O1CN01Gjg9zF1D3mLs76oSw_!!161-0-luban.jpg_q100.jpg_.webp'
        },
        {
          href: '',
          src: 'https://img.alicdn.com/tps/i4/TB13ytWiaL7gK0jSZFBSutZZpXa.jpg'
        },
        { href: '', src: 'https://img.alicdn.com/imgextra/i3/71/O1CN0103VpmH1COYhjGyjHc_!!71-0-luban.jpg_q100.jpg_.webp' },
        { href: '', src: 'https://img.alicdn.com/imgextra/i1/139/O1CN01ERiHeT1Cthdbx1h0f_!!139-0-luban.jpg_q100.jpg_.webp' },
        { href: '', src: 'https://img.alicdn.com/imgextra/i1/35/O1CN01UuRatx1C84RiaA3CN_!!35-0-luban.jpg_q100.jpg_.webp' }
      ]
    }
  }
}
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