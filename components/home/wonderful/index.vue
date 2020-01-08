<!--
 * @Author: your name
 * @Date: 2020-01-08 17:59:34
 * @LastEditTime : 2020-01-08 18:05:30
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\wonderful\index.vue
 -->
<template>
  <article class="wonderful-con">
    <h2 class="wonderful-title">
      <span class="text-ctn">
        <i class="iconfont iconzan fp-iconfont"></i>猜你喜欢
      </span>
    </h2>
  </article>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.wonderful-con {
  padding-right: 30px;
  width: 1230px;
  margin: 30px auto 0;
  .wonderful-title {
    color: #666;
    text-align: center;
    height: 43px;
    font-weight: 100;
    .text-ctn {
      position: relative;
      font-size: 18px;
      line-height: 20px;
      font-family: "Microsoft YaHei", SimSun, sans-serif,
        "\65b9\6b63\5170\4ead\9ed1";
      &:before {
        content: "";
        left: -38px;
        position: absolute;
        width: 30px;
        height: 1px;
        background-color: #979797;
        top: 12px;
      }
      &:after {
        content: "";
        right: -38px;
        position: absolute;
        width: 30px;
        height: 1px;
        background-color: #979797;
        top: 12px;
      }
      .fp-iconfont {
        position: relative;
        top: 1px;
        margin-right: 4px;
        font-size: 20px;
        color: #ff0036;
      }
    }
  }
}
</style>