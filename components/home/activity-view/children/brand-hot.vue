<!--
 * @Author: your name
 * @Date: 2020-01-08 10:39:58
 * @LastEditTime : 2020-01-08 11:19:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\activity\children\brand-hot.vue
 -->
<template>
  <li class="brand-item">
    <div class="brand-img">
      <img :src="img" />
    </div>
    <a class="brand-mask">
      <div class="coupon">
        <span>{{name}}</span>
      </div>
      <div class="enter">
        <span>点击进入</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.brand-item {
  width: 122px;
  height: 108px;
  margin-right: 1px;
  margin-bottom: 1px;
  float: left;
  position: relative;
  .brand-img {
    margin: 0 auto;
    display: block;
    text-align: center;
    line-height: 108px;
    background-color: #fff;
    img {
      width: 82%;
      height: 50px;
    }
  }
  .brand-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #333;
    background-color: rgba(0, 0, 0, 0.8);
    transition: all 0.3s ease-out;
    opacity: 0;
    filter: alpha(opacity=0);
    &:hover {
      opacity: 1;
    }
    .coupon {
      color: #fff;
      text-align: center;
      line-height: 90px;
      height: 60px;
      span {
        display: block;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .enter {
      text-align: center;
      height: 32px;
      span {
        display: inline-block;
        color: #fff;
        width: 63px;
        height: 18px;
        font-size: 12px;
        line-height: 15px;
        background-color: #ff0036;
        border-radius: 9px;
      }
    }
  }
}
</style>