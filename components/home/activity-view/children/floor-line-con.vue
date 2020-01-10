<!--
 * @Author: your name
 * @Date: 2020-01-08 14:43:04
 * @LastEditTime : 2020-01-10 16:30:13
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\activity\children\floor-line-con.vue
 -->
<template>
  <article class="floor-line-con">
    <slot name="title">
      <i class="color-mark"></i>
      <div class="floor-name">
        <div class="floor-title">
          {{title}}
          <div class="floor-sub-name">{{subTitle}}</div>
        </div>
      </div>
    </slot>
    <div class="line-body">
      <slot name="bigBanner"></slot>
      <div class="middle-column-con">
        <slot :list="list"></slot>
      </div>
    </div>
  </article>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "subTitle", "httpRequest"],
  data() {
    return {
      list: []
    };
  },
  beforeMount() {
    axios.get(this.httpRequest).then(({ data }) => {
      this.list = data;
    });
  }
};
</script>

<style scoped lang="scss">
.floor-line-con {
  margin-top: 20px;
  width: 100%;
  height: 665px;
  position: relative;
  img {
    vertical-align: middle;
    width: 214px;
    height: 25px;
  }
  .color-mark {
    display: inline-block;
    background-color: #333;
    width: 5px;
    height: 18px;
    vertical-align: middle;
  }
  .floor-name {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    color: #000;
    height: 28px;

    .floor-title {
      margin-left: 10px;
      margin-right: 10px;
      vertical-align: middle;
      .floor-sub-name {
        display: inline-block;
        font-size: 14px;
        color: #000;
        margin-left: 10px;
        line-height: 24px;
        height: 18px;
      }
    }
  }
  .line-body {
    width: 100%;
    height: 618px;
    margin-top: 10px;
    overflow: hidden;
    .middle-column-con {
      width: 995px;
      height: 618px;
      float: left;
      overflow: hidden;
    }
  }
}
</style>