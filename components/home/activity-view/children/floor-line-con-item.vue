<!--
 * @Author: your name
 * @Date: 2020-01-08 15:54:45
 * @LastEditTime : 2020-01-24 01:20:20
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\activity\children\floor-line-con-item.vue
 -->
<template>
  <a class="grid one-grid-price" :href="href">
    <div class="floor-item-content-wrap">
      <slot>
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img" :src="img" />
        
        <div class="floor-item-title">{{name}}</div>
        <div class="floor-price">￥{{price}}</div>
      </slot>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    price: {
      type: String
    },
    href: {
      type: String,
      default: "/"
    },
    img: {
      type: String
    }
  }
};
</script>

<style scoped lang="scss">
.grid {
  float: left;
  display: block;
  border-bottom: 15px solid #f5f5f5;
  position: relative;
  background-color: #fff;
  .floor-item-content-wrap {
    width: 234px;
    height: 300px;
    border: 1px solid #fff;
    &:hover {
      border: 1px solid #ff0036;
    }
    .floor-item-tag {
      width: 68px;
      height: 20px;
      color: #fff;
      line-height: 20px;
      font-size: 14px;
      margin: 0 auto;
    }
  }
  .floor-item-title {
    width: 135px;
    height: 40px;
    font-size: 14px;
    color: #333;
    line-height: 20px;
    overflow: hidden;
    margin: 8px auto;
  }
  .floor-price {
    font-size: 18px;
    color: #ff0036;
    line-height: 18px;
    margin: 10px auto;
  }
  img {
    z-index: 1;
    transition: right 0.3s;
  }
}
.one-grid-price {
  width: 235px;
  height: 301px;
  margin-left: 13px;
  text-align: center;
  img {
    width: 185px;
    height: 185px;
  }
}
.grid {
  .title {
    position: absolute;
    top: 20px;
    left: 25px;
    width: 220px;
    font-size: 18px;
    z-index: 10;
    line-height: 24px;
    height: 24px;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
    color: #000;
    white-space: nowrap;
  }
  .sub-title {
    position: absolute;
    top: 49px;
    left: 25px;
    width: 220px;
    font-size: 14px;
    z-index: 10;
    line-height: 18px;
    height: 18px;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
.grid .sub-title,
.tab-item-title {
  color: #7a45e5;
}

.Boutique {
  width: 170px;
  height: 170px;
  margin: 90px 33px 42px 32px;
}
</style>