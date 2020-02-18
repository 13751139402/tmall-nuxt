<!--
 * @Author: your name
 * @Date: 2020-02-14 18:44:59
 * @LastEditTime : 2020-02-15 12:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\components\boughtList\order.vue
 -->
<template>
  <div class="index-mod__order-container___1ur4- js-order-container">
    <div data-id="590775820497733601" class="bought-wrapper-mod__trade-order___2lrzV">
      <table class="bought-table-mod__table___3u4gN bought-wrapper-mod__table___3xFFM">
        <colgroup>
          <col class="bought-table-mod__col1___17JqJ" />
          <col class="bought-table-mod__col2___1Y_Kl" />
          <col class="bought-table-mod__col3___SzfHd" />
          <col class="bought-table-mod__col4___3pLN6" />
          <col class="bought-table-mod__col5___3dqJ_" />
          <col class="bought-table-mod__col6___ImeZT" />
          <col class="bought-table-mod__col7___RQijo" />
        </colgroup>
        <tbody class="bought-wrapper-mod__head___2vnqo">
          <tr>
            <td class="bought-wrapper-mod__head-info-cell___29cDO">
              <label class="bought-wrapper-mod__checkbox-label___3Va60">
                <span class="bought-wrapper-mod__checkbox___11anQ">
                  <input type="checkbox" />
                </span>
                <span class="bought-wrapper-mod__create-time___yNWVS">{{order_time.slice(0,10)}}</span>
              </label>
              <span>
                <span>订单号</span>
                <span>:</span>
                <span>{{order_no}}</span>
              </span>
            </td>
            <td colspan="2" class="bought-wrapper-mod__seller-container___3dAK3">
              <span class="seller-mod__container___1w0Cx">
                <img
                  src="//gtd.alicdn.com/tps/i2/TB1aJQKFVXXXXamXFXXEDhGGXXX-32-32.png"
                  class="seller-mod__icon___2YmBd"
                />
                <a class="seller-mod__name___37vL8" :title="shopName">{{shopName}}</a>
              </span>
            </td>
            <td>
              <span id="webww1">
                <span class="ww-light ww-large" data-display="inline">
                  <a
                    target="_blank"
                    class="ww-inline ww-online"
                    title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"
                  >
                    <span>旺旺在线</span>
                  </a>
                </span>
              </span>
            </td>
            <td colspan="3" class="bought-wrapper-mod__thead-operations-container___2LwDA">
              <span></span>
              <a
                href="//trade.taobao.com/trade/memo/update_buy_memo.htm?bizOrderId=590775820497733601&amp;buyerId=3195730136&amp;user_type=0&amp;pageNum=1&amp;auctionTitle=null&amp;daetBegin=null&amp;dateEnd=null&amp;commentStatus=null&amp;sellerNick=null&amp;auctionStatus=null&amp;isArchive=false&amp;logisticsService=null&amp;visibility=true"
                class="bought-wrapper-mod__th-operation___yRtHm"
                title="编辑标记信息，仅自己可见"
                target="_blank"
                rel="noopener noreferrer"
                id="flag"
              >
                <i
                  style="height:17px;width:1px;padding-left:17px;overflow:hidden;vertical-align:middle;font-size:0px;display:inline-block;background:url(//img.alicdn.com/tps/i1/TB1heyGFVXXXXXpXXXXR3Ey7pXX-550-260.png) no-repeat -30px -176px;"
                ></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <order-product
            :productName="firstProduct[0].product_name"
            :price="firstProduct[0].product_price"
            :count="firstProduct[0].product_amount"
            :image="firstProduct[0].spuId.cover"
            :specValue="firstProduct[0].skuId.specValue"
          >
            <template>
              <td class>
                <div>
                  <div class="price-mod__price___157jz">
                    <p>
                      <strong>
                        <span>￥</span>
                        <span>{{amount}}</span>
                      </strong>
                    </p>
                  </div>
                  <p style="color:#6c6c6c;font-family:verdana;">
                    <span>(含运费：</span>
                    <span>￥0.00</span>
                    <span></span>
                    <span></span>
                    <span>)</span>
                  </p>
                  <div style="font-family:verdana;">
                    <div></div>
                  </div>
                  <p>
                    <span title="支持信用卡支付" alt="支持信用卡支付" style="margin-right:5px;" target="_blank">
                      <img src="//assets.alicdn.com/sys/common/icon/trade/xcard.png" />
                    </span>
                  </p>
                </div>
              </td>
              <td class>
                <div
                  data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0"
                >
                  <p
                    style="margin-bottom:3px;"
                    data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0.0"
                  >
                    <span
                      class="text-mod__link___19F14"
                      data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0.0.0"
                    >等待买家付款</span>
                  </p>
                  <div
                    data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0.1"
                  >
                    <p
                      style="margin-bottom:3px;"
                      data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0.1.$0"
                    >
                      <a
                        href="//trade.tmall.com/detail/orderDetail.htm?bizOrderId=590775820497733601"
                        class="text-mod__link___19F14 text-mod__hover___ew25K"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="viewDetail"
                        data-reactid=".0.7:$order-590775820497733601.$590775820497733601.0.1:1:0.$0.$5.0.1.$0.0"
                      >订单详情</a>
                    </p>
                  </div>
                </div>
              </td>
              <td class>
                <div>
                  <p style="margin-bottom:3px;">
                    <a
                      class="button-mod__button___3XSV8 button-mod__primary___17-Uv button-mod__button___2WM0P"
                      target="_blank"
                      id="pay"
                      @click="pay"
                    >立即付款</a>
                  </p>
                  <p style="margin-bottom:3px;">
                    <a
                      class="text-mod__link___19F14 text-mod__hover___ew25K"
                      target="_blank"
                      id="helpPay"
                    >找朋友帮忙付</a>
                  </p>
                  <p style="margin-bottom:3px;">
                    <span
                      class="text-mod__link___19F14 text-mod__hover___ew25K"
                      action="a8"
                      id="cancelOrder"
                      title="请与卖家协商取消订单，每天不得取消超过5笔订单。"
                    >取消订单</span>
                  </p>
                  <p style="margin-bottom:3px;">
                    <a
                      class="text-mod__link___19F14 text-mod__hover___ew25K"
                      target="_blank"
                      rel="noopener noreferrer"
                    >修改订单</a>
                  </p>
                </div>
              </td>
            </template>
          </order-product>
          <order-product
            v-for="item of otherProduct"
            :key="item.key"
            :productName="item.product_name"
            :price="item.product_price"
            :count="item.product_amount"
            :image="item.spuId.cover"
            :specValue="item.skuId.specValue"
          ></order-product>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import orderProduct from './order-product'
export default {
  components: {
    'order-product': orderProduct
  },
  props: {
    id: {},
    order_no: {},
    itemCount: {},
    order_time: {},
    status: {},
    orderProduct: {
      type: Array,
      default: []
    }
  },
  computed: {
    firstProduct() {
      return this.orderProduct.slice(0, 1)
    },
    otherProduct() {
      return this.orderProduct.slice(1)
    },
    amount() {
      let amount = 0
      this.orderProduct &&
        this.orderProduct.forEach(({ product_price, product_amount }) => {
          amount += product_price * product_amount
        })
      return amount.toFixed(2)
    },
    shopName() {
      return this.firstProduct[0].shop.shop_name
    }
  },
  methods: {
    pay() {
      this.$store.commit('cashierDesk/CREATE_TITLEDATA', {
        productName: this.firstProduct[0].product_name,
        shopName: this.shopName,
        count: this.orderProduct.length >= 1
      })
      let amount = this.orderProduct.reduce(
        (target, { product_amount, product_price }) => {
          return (target += product_amount * product_price)
        },
        0
      )

      this.$store.commit('cashierDesk/CREATE_PRICE', amount.toFixed(2))
      this.$store.commit('cashierDesk/CREATE_ORDERIdList', [this.id])
      this.$router.push('/cashierDesk')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/boughtList.css';
</style>