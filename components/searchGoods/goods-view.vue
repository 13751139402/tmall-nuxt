<template>
  <section class="product">
    <div class="product-iWrap">
      <figure class="productImg-wrap">
        <a @click="linkDetails">
          <img :src="cover" lazy />
        </a>
      </figure>
      <p class="productPrice">
        <em :title="price">
          <b>¥</b>
          {{price}}
        </em>
      </p>
      <div class="productTitle productTitle-spu">
        <a @click="linkDetails">{{goods_name}}</a>
      </div>
      <div class="productShop">
        <a class="productShop-name">{{shop_name}}</a>
      </div>
      <p class="productStatus">
        <span>
          月成交
          <em v-focus="turnover"></em>
        </span>
        <span class="ww-light">
          <a class="ww-online"></a>
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    cover: {
      type: String
    },
    price: {
      type: String
    },
    goods_name: {
      type: String
    },
    shop_name: {
      type: String
    },
    turnover: {
      type: String
    }
  },
  computed: {
    href() {
      return `/goodsDetail?spu_id=${this.id}`;
    }
  },
  methods: {
    linkDetails() {
      let routeData = this.$router.resolve({
        path: "/goodsDetail",
        query: {
          spu_id: this.id
        }
      });
      window.open(routeData.href, "_blank");
    }
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      bind: function(el, { value }) {
        // 聚焦元素
        if (value > 10000) {
          value = parseFloat((value / 10000).toFixed(2)) + "万";
        }
        el.innerHTML = value;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  width: 220px;
  margin-bottom: 20px;
  font-size: 12px;
  margin-right: 20px;
  &.product:hover .product-iWrap {
    height: auto;
    margin: -3px;
    border: 4px solid #ff0036;
    border-radius: 0;
    transition: border-color 0.2s ease-in;
  }
  .product-iWrap {
    background-color: #fff;
    margin: 0;
    padding: 4px 4px 0;
    border: 1px solid #f5f5f5;
    border-radius: 3px;
    .productImg-wrap {
      display: table;
      table-layout: fixed;
      height: 210px;
      width: 100%;
      padding: 0;
      margin: 0 0 5px;
      .productImg {
        display: table-cell;
        width: 100%;
        text-align: center;
      }
    }
    .productPrice {
      font-family: arial, verdana, sans-serif !important;
      color: #ff0036;
      font-size: 14px;
      height: 30px;
      line-height: 30px;
      margin: 0 0 5px;
      letter-spacing: normal;
      overflow: inherit !important;
      white-space: nowrap;
      .productPrice {
        position: relative;
        top: 0;
        right: 0;
        float: right;
        width: 30px;
        height: 30px;
        background-position: center 0;
        margin-right: -6px;
      }
      em {
        float: left;
        font-family: arial;
        font-weight: 400;
        font-size: 20px;
        color: #ff0036;
        b {
          margin-right: 2px;
          font-weight: 700;
          font-size: 14px;
        }
      }
    }
    .productShop {
      position: relative;
      height: 22px;
      line-height: 20px;
      margin-bottom: 5px;
      color: #999;
      white-space: nowrap;
      overflow: visible;
      .productShop-name {
        float: left;
        line-height: 20px;
        height: 20px;
        max-width: 144px;
        color: #999;
        text-decoration: underline;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .productTitle {
      display: block;
      color: #666;
      height: 14px;
      line-height: 12px;
      margin-bottom: 3px;
      word-break: break-all;
      font-size: 0;
      position: relative;
      a {
        color: #333;
      }
      * {
        font-size: 12px;
        font-family: \5fae\8f6f\96c5\9ed1;
        line-height: 14px;
      }
    }
    .productStatus {
      position: relative;
      height: 32px;
      border: none;
      border-top: 1px solid #eee;
      margin-bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #999;
      em {
        color: #b57c5b;
        margin-top: -8px;
        font-family: arial;
        font-size: 12px;
        font-weight: 700;
      }
      .ww-light {
        border-right: none;
        width: 9%;
        text-align: center;
        a {
          background: url(//img.alicdn.com/tps/i1/T11lggFoXcXXc1v.nr-93-93.png)
            center center no-repeat !important;
          background-size: 16px !important;
          position: relative;
          display: block;
          width: 16px;
          height: 16px;
          margin-top: -3px;
          span {
            padding: 0;
            display: none;
            white-space: nowrap;
            color: #999;
            top: 18px;
            left: -2px;
            height: 14px;
            position: absolute;
            width: 2em !important;
            overflow: hidden;
            margin-left: -2px;
            border-right: none;
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
      span {
        white-space: nowrap;
      }
      span {
        display: inline-block;
        border-right: 1px solid #eee;
        width: 39%;
        padding: 10px 1px;
        margin-right: 6px;
        line-height: 12px;
        text-align: left;
        white-space: nowrap;
      }
    }
  }
}
.productAttrs,
.productIcons,
.productPrice,
.productShop,
.productStatus,
.productTitle {
  display: block;
  overflow: hidden;
  margin-bottom: 3px;
}
.productImg-wrap a,
.productImg-wrap img {
  max-width: 100%;
  max-height: 210px;
}
</style>