<!--
 * @Author: your name
 * @Date: 2020-01-10 09:57:03
 * @LastEditTime : 2020-01-10 10:41:42
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\mui-lift.vue
 -->
<template>
  <aside class="mui-lift">
    <div class="sn-nav-wrapper" :class="{'show':liftShow,'hide':!liftShow}">
      <div class="mui-lift-nav nav-header">导航</div>
      <div data-spm="fpLift">
        <a href="#" class="mui-lift-nav color-type-green">
          <div class="mui-lift-nav-name">天猫超市</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-purple">
          <div class="mui-lift-nav-name">天猫国际</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-green">
          <div class="mui-lift-nav-name">居家生活</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-pink">
          <div class="mui-lift-nav-name">美丽人生</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-blue">
          <div class="mui-lift-nav-name">潮电酷玩</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-cyan">
          <div class="mui-lift-nav-name">户外出行</div>
        </a>

        <a href="#" class="mui-lift-nav color-type-red">
          <div class="mui-lift-nav-name">打造爱巢</div>
        </a>

        <a href="#" class="mui-lift-nav">
          <div class="mui-lift-nav-name">猜你喜欢</div>
        </a>
        <a href="#mallPage" class="mui-lift-nav nav-back j_navBack">
          <i class="iconfont iconqiehuanqishang"></i>
          <div>顶部</div>
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  props: ["liftShow"]
};
</script>

<style lang="scss" scoped>
// --------------- mui-lift
.mui-lift {
  margin-left: -673px !important;
  position: fixed;
  bottom: 50px;
  left: 50%;
  z-index: 9999;
  width: 35px;
  text-align: center;
  .mui-lift-nav {
    &.nav-header {
      background-color: #ff0036;
    }
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1px;
    background-color: #666;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    font-size: 12px;
    .mui-lift-nav-name {
      line-height: 12px;
      width: 24px;
      height: 28px;
      margin: 6px auto;
    }
    .nav-back i {
      font-size: 14px;
      margin-top: 5px;
      display: block;
    }
  }
  .mui-lift-cur-nav {
    background-color: #ff0036;
    &:hover {
      background-color: #000;
    }
  }
  .mui-lift-nav.nav-header,
  .mui-lift-nav.nav-header:hover {
    background-color: #ff0036;
  }

  .mui-lift-nav:hover {
    background-color: #000;
  }

  .mui-lift-nav.nav-back {
    line-height: 13px;
    background-color: #666;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .mui-lift-nav.nav-back i {
    font-size: 18px;
    margin-top: 5px;
    display: block;
  }

  .mui-lift-cur-nav {
    background-color: #ff0036;
  }

  .color-type-pink.mui-lift-cur-nav,
  .color-type-pink:hover {
    background-color: #ea5f8d;
  }

  .color-type-blue.mui-lift-cur-nav,
  .color-type-blue:hover {
    background-color: #0aa6e8;
  }

  .color-type-green.mui-lift-cur-nav,
  .color-type-green:hover {
    background-color: #64c333;
  }

  .color-type-cyan.mui-lift-cur-nav,
  .color-type-cyan:hover {
    background-color: #19c8a9;
  }

  .color-type-orange.mui-lift-cur-nav,
  .color-type-orange:hover {
    background-color: #f7a945;
  }

  .color-type-red.mui-lift-cur-nav,
  .color-type-red:hover {
    background-color: #f15453;
  }
  .sn-nav-wrapper {
    &.hide {
      animation: liftReverse 0.5s normal;
      animation-fill-mode: forwards;
    }
    &.show {
      animation: lift 0.5s normal;
    }
    @keyframes lift {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0;
        overflow: hidden;
      }
      100% {
        width: 35px;
        height: 369px;
        opacity: 1;
        overflow: hidden;
      }
    }
    @keyframes liftReverse {
      0% {
        width: 35px;
        height: 369px;
        opacity: 1;
        overflow: hidden;
      }
      100% {
        width: 0px;
        height: 0px;
        opacity: 0;
        overflow: hidden;
      }
    }
  }
}
</style>