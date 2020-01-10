<!--
 * @Author: your name
 * @Date: 2020-01-08 14:59:26
 * @LastEditTime : 2020-01-08 17:08:23
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\activity\children\floor-line-con-item1.vue
 -->
<template>
  <div class="big-banner-con-2">
    <a class :href="href">
      <img :src="img" />

      <div class="banner-detail">
        <div class="left-title-wrap">
          <span class="left-title">{{category}}</span>
        </div>
        <div class="right-title-wrap">
          <div class="right-title-absolute">
            <span class="right-title">{{title1}}</span>
            <span class="right-title">{{title2}}</span>
          </div>
        </div>
      </div>

      <div class="detail-wrap">
        <img
          class="floor-arrow-big"
          src="https://img.alicdn.com/tfs/TB1IQBtXaagSKJjy0FbXXa.mVXa-68-68.png"
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    title1: {
      type: String
    },
    title2: {
      type: String
    },
    href: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.big-banner-con-2 {
  float: left;
  position: relative;
  width: 235px;
  height: 618px;
  img {
    display: block;
    width: 100%;
    transition: opacity 0.3s ease-out;
    height: 100%;
  }
  .banner-detail {
    position: absolute;
    vertical-align: middle;
    bottom: 20%;
    width: 218px;
    height: 64px;
    .left-title-wrap {
      background: rgba(0, 0, 0, 0.9);
      width: 70px;
      height: 64px;
      overflow: hidden;
      color: #fff;
      text-align: center;
      display: table-cell;
      vertical-align: middle;
      .left-title {
        display: inline-block;
        vertical-align: middle;
        line-height: 24px;
        font-size: 18px;
        width: 36px;
        overflow: hidden;
      }
    }
    .right-title-wrap {
      left: 70px;
      top: 0;
      position: absolute;
      background: rgba(0, 0, 0, 0.6);
      overflow: hidden;
      width: 128px;
      height: 64px;
      color: #fff;
      vertical-align: middle;
      .right-title-absolute {
        margin-top: 8px;
        margin-left: 14px;
        .right-title {
          display: block;
          line-height: 24px;
          font-size: 18px;
        }
      }
    }
  }
  .detail-wrap {
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 4%,
      rgba(0, 0, 0, 0.36) 100%
    );
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    left: 0;
    .floor-arrow-big {
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 32px;
      height: 32px;
    }
  }
}
</style>