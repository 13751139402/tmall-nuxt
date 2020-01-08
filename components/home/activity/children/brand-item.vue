<template>
  <div class="brandWall-item" :style="`width:${width}px`">
    <div class="head">
      <span class="cn">{{cn}}</span>
      <span class="en">{{en}}</span>
      <a :href="href" class="more" style="text-indent: -99px;" v-if="width<250">更多</a>
      <a :href="href" class="more" v-else>更多</a>
    </div>
    <a class="body" :href="href">
      <img :src="image" class="img-ks-lazyload" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cn: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    },
    width: {
      type: Number
    }
  }
};
</script>

<style scoped lang="scss">
.brandWall-item {
  display: block;
  width: 485px;
  height: 370px;
  margin-right: 13px;
  background-color: #fff;
  .head {
    height: 54px;
    background: #fff;
    font-size: 0;
    border-style: solid;
    border-width: 0 0 1px;
    border-color: #eee;
    position: relative;
    span {
      display: inline-block;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      line-height: 54px;
      height: 18px;
      margin-left: 10px;
    }
    .en {
      display: inline-block;
      font-size: 14px;
      font-weight: 700;
      color: #333;
      margin-left: 10px;
      line-height: 24px;
      height: 44px;
    }
    .more {
      position: absolute;
      right: 14px;
      top: 0;
      width: 42px;
      height: 54px;
      line-height: 54px;
      z-index: 99;
      background-size: 18px 18px;
      background-image: url(//img.alicdn.com/tfs/TB1B7RoaMMPMeJjy1XcXXXpppXa-36-36.png);
      background-repeat: no-repeat;
      background-position: right center;
      padding-right: 14px;
      font-size: 16px;
      color: #666;
      overflow: hidden;
    }
  }
  .body,
  .body img {
    display: block;
    height: 316px;
    width: 100%;
    &:hover {
      opacity: 0.7;
    }
  }
}
</style>