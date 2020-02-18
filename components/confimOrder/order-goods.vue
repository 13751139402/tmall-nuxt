<!--
 * @Author: your name
 * @Date: 2020-02-08 15:23:02
 * @LastEditTime : 2020-02-11 21:28:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\components\confimOrder\order-goods.vue
 -->
<template>
  <div>
    <div
      style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: 0px; padding: 0px; background-color: rgb(251, 252, 255); border-bottom: 1px dotted rgb(221, 221, 221);"
    >
      <div style="padding: 0px;">
        <div style="white-space: nowrap;font-size:0">
          <div class="item-row">
            <div class="order-itemInfo">
              <div class="info-detail info-cell">
                <a
                  href="//detail.tmall.com/item.htm?id=558509313522"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="order-link info-cell"
                >
                  <img class="info-img" :src="data.spu.cover" />
                </a>
                <div class="info-cell info-msg">
                  <a
                    href="//detail.tmall.com/item.htm?id=558509313522"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="order-link info-title"
                  >{{data.spu.goods_name}}</a>
                  <div class="info-icon-list">
                    <div>
                      <a
                        href="//pages.tmall.com/wow/seller/act/seven-day"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="消费者保障服务，卖家承诺7天退换"
                        class="order-link icon-main"
                      >
                        <img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" />
                      </a>
                      <a
                        href="//www.taobao.com/go/act/315/xfzbz_rsms.php?ad_id=&amp;am_id=130011830696bce9eda3&amp;cm_id=&amp;pm_id="
                        target="_blank"
                        rel="noopener noreferrer"
                        title="消费者保障服务，卖家承诺如实描述"
                        class="order-link icon-main"
                      >
                        <img src="//img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="支持信用卡支付"
                        class="order-link icon-main"
                      >
                        <img src="//assets.alicdn.com/sys/common/icon/trade/xcard.png" />
                      </a>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div class="info-sku info-cell">
                <p
                  class="sku-line"
                  v-for=" {id,spec,spec_value} of data.specValue"
                  :key="id"
                >{{`${spec.spec_name} : ${spec_value}`}}</p>
              </div>
              <div class="info-price info-cell">{{data.price}}</div>
            </div>
            <div class="order-quantity">
              <div class="quantity-inner">
                <p>{{data.product_amount}}</p>
              </div>
            </div>
            <div class="item-row__select">
              <p class="item-row__text">无优惠</p>
            </div>
            <div class="item-row__price">
              <div class="label item-row__price-item">
                <span
                  style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 0, 54); font-size: 14px; min-width: 100px;"
                >{{(data.price*data.product_amount).toFixed(2)}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/confirmOrder/orderGoods.scss";
.info-cell,
.order-quantit,
.item-row__select,
.order-quantity,
.item-row__price {
  font: 12px/1.5 tahoma, arial, "\5b8b\4f53" !important;
  box-sizing: border-box;
}
</style>