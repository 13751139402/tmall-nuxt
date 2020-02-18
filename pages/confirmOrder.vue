<!--
 * @Author: your name
 * @Date: 2020-01-31 21:32:43
 * @LastEditTime : 2020-02-14 16:23:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\pages\confirmOrder.vue
 -->
<template>
  <div>
    <header id="J_Header" class="header tb-header">
      <h1 id="logo" class="cart-logo">
        <a href="//www.taobao.com/" title="淘宝网 Taobao.com - 阿里巴巴旗下网站" target="_top">
          淘宝网
          <span></span>
        </a>
      </h1>
      <header id="header" class="header-order-app">
        <div class="headerLayout">
          <div class="headerCon">
            <h1 id="mallLogo">
              <span class="mlogo">
                <a href="//www.tmall.com/" title="天猫Tmall.com">
                  <s></s>天猫Tmall.com
                </a>
              </span>
              <span class="slogo">
                <a href></a>
              </span>
            </h1>
          </div>
          <el-steps
            :active="active"
            finish-status="success"
            style="width:700px;margin-top: 24px;"
            :align-center="true"
          >
            <el-step title="查看购物车"></el-step>
            <el-step title="拍下商品"></el-step>
            <el-step title="付款到支付宝"></el-step>
            <el-step title="确认收货"></el-step>
            <el-step title="评价"></el-step>
          </el-steps>
        </div>
      </header>
    </header>
    <content id="content">
      <div id="container" style="width: 990px;margin: 0 auto">
        <div>
          <div class="order-address TwoRow" id="addressPC_1">
            <div class="header-wrapper">
              <h2 class="header-title">选择收货地址</h2>
            </div>
            <div class="address-tips-top"></div>
            <div class="address-list">
              <div class="addr-item-wrapper TwoRow addr-selected addr-default">
                <div class="inner-infos">
                  <div class="addr-hd">
                    <span>广东</span>
                    <span>深圳</span>
                    <span>（戴训伟收）</span>
                  </div>
                  <div class="addr-bd">
                    <span>龙岗</span>
                    <span>龙城</span>
                    <span>五联社区将军帽路1号深圳技师学院</span>
                    <span>13751139402</span>
                  </div>
                  <a title="修改地址" class="modify-operation">修改</a>
                </div>
                <div class="set-default" title="设置当前地址为默认">设为默认</div>
                <div class="default-tip">默认地址</div>
                <div class="curMarker"></div>
              </div>
            </div>
            <div class="address-tips TwoRow"></div>
            <div class="operations">
              <button
                type="button"
                class="next-btn next-medium next-btn-normal operation TwoRow"
              >使用新地址</button>
            </div>
          </div>
        </div>
        <div>
          <div class="station-service-tab tmall-red wrapped">
            <div class="next-tabs next-tabs-wrapped next-tabs-top next-medium">
              <div class="next-tabs-bar" style="border-bottom: 1px solid #eee;">
                <div class="next-tabs-nav-container">
                  <div class="next-tabs-nav-wrap">
                    <div class="next-tabs-nav-scroll">
                      <ul role="tablist" aria-multiselectable="false" class="next-tabs-nav">
                        <li
                          role="tab"
                          aria-hidden="false"
                          aria-selected="true"
                          tabindex="0"
                          class="next-tabs-tab active service-tab-item"
                        >
                          <div class="custom-tab-item">
                            <span class="tab-title">菜鸟驿站代收服务</span>
                            <span class="tab-tip">免费</span>
                            <a
                              class="tab-help-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              href="//www.cainiao.com/markets/cnwww/userhelpdoc"
                            >
                              <ins class="link-icon"></ins>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="next-tabs-content">
                <div role="tabpanel" aria-hidden="false" class="next-tabs-tabpane active">
                  <div data-halo-id="stationAgencyService_1" data-halo-type="stationAgencyService">
                    <div class="station-service TwoRow">
                      <span class="service-label">
                        <ins class="agency-service-icon"></ins>
                        <span class="station-description">收货不便，可以使用</span>
                      </span>
                      <a class="another-choose-operation">菜鸟驿站代收服务</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="item-headers" id="orderDesc_orderDesc_1">
            <div class="header-wrapper">
              <h2 class="header-title">确认订单信息</h2>
            </div>
            <div class="item-headers-wrap item-headers-column-6">
              <div class="item-headers-content item-headers-0">店铺宝贝</div>
              <div class="item-headers-content item-headers-1">商品属性</div>
              <div class="item-headers-content item-headers-2">单价</div>
              <div class="item-headers-content item-headers-3">数量</div>
              <div class="item-headers-content item-headers-4">优惠方式</div>
              <div class="item-headers-content item-headers-5">小计</div>
            </div>
          </div>
        </div>
        <order-shop v-for="item of list" :key="item.id" v-bind="item">
          <template #default="{goods}">
            <order-goods v-for="item of goods" :key="item.id" :data="item"></order-goods>
          </template>
        </order-shop>
        <div data-halo-id="realPayPC_1" data-halo-type="realPay">
          <div class="realpay order-payInfo" id="realPayPC_1">
            <div class="box">
              <div class="box__wrapper">
                <div class="box__shadow">
                  <div>
                    <span class="realpay--title">实付款：</span>
                    <span class="realpay--price-symbol">¥</span>
                    <span class="realpay--price" style="color: rgb(255, 0, 54);">{{amount}}</span>
                  </div>
                  <div class="order-confirmAddr">
                    <div class="confirmAddr-addr">
                      <span class="confirmAddr-title">寄送至：</span>
                      <span class="confirmAddr-addr-bd">广东 深圳 龙岗 龙城 五联社区将军帽路1号深圳技师学院</span>
                    </div>
                    <div class="confirmAddr-addr-user">
                      <span class="confirmAddr-title">收货人：</span>
                      <span class="confirmAddr-addr-bd">戴训伟 13751139402</span>
                    </div>
                  </div>
                  <div class="order-confirm-eticket"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-halo-id="submitOrderPC_1" data-halo-type="submitOrder">
          <div class="submitOrder-container" id="submitOrderPC_1">
            <div class="wrapper">
              <a
                role="button"
                title="提交订单"
                class="go-btn"
                @click="confirmOrder"
                style="background-color: rgb(255, 0, 54);"
              >
                <i class="el-icon-loading" v-if="submitBtnLoading"></i>
                <template v-else>提交订单</template>
              </a>
            </div>
          </div>
        </div>
        <div data-halo-id="tipsPC_tmallHkPCTips" data-halo-type="tips">
          <div class="tips-container" id="tipsPC_tmallHkPCTips">
            <div class="tips__balloon tips__balloon_right">
              <span class="tips-direct-show">
                <i class="tip-icon"></i>提交订单则表示您同意服务和授权协议、消费者告知书、代理购汇及配送服务协议等
                <a
                  href="//www.tmall.hk/wow/import/act/tmallhkprotocol"
                  class="widget-tips-question"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    class="ins-question-icon"
                    src="//img.alicdn.com/tps/TB1zNZ_LVXXXXasapXXXXXXXXXX-32-32.png"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </content>
  </div>
</template>

<script>
import orderShop from '@/components/confimOrder/order-shop'
import orderGoods from '@/components/confimOrder/order-goods'
export default {
  components: {
    'order-shop': orderShop,
    'order-goods': orderGoods
  },
  data() {
    return {
      submitBtnLoading: false,
      active: 0
    }
  },
  computed: {
    amount() {
      let amount = 0
      this.list.forEach(({ goods }) => {
        goods.forEach(({ product_amount, price }) => {
          amount += product_amount * price
        })
      })
      return amount.toFixed(2)
    }
  },
  async asyncData({ store, $axios, error }) {
    let params = store.state.confirmOrder.params
    if (!params.length) {
      error({ statusCode: 400, message: '没有需要下单的商品' })
    }
    let list = await $axios.$post('/order/findSku', { params })

    return { list }
  },
  methods: {
    async confirmOrder() {
      this.submitBtnLoading = true
      let orderList = await this.$store.dispatch('confirmOrder/createOrder')
      const orderIdList = orderList.map(item => {
        return item.id
      })
      this.$store.commit('cashierDesk/CREATE_TITLEDATA', {
        productName: orderList[0].orderProduct[0].product_name,
        shopName: orderList[0].orderProduct[0].shop.shop_name,
        count: orderList[0].orderProduct.length >= 1
      })
      let amount = orderList.reduce((target, { orderProduct }) => {
        return (target += orderProduct.reduce(
          (target, { product_amount, product_price }) => {
            return (target += product_amount * product_price)
          },
          0
        ))
      }, 0)
      this.$store.commit('cashierDesk/CREATE_ORDERIdList', orderIdList)
      this.$store.commit('cashierDesk/CREATE_PRICE', amount.toFixed(2))
      this.submitBtnLoading = false
      this.$router.push('/cashierDesk')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/confirmOrder/global.scss';
@import '@/assets/css/confirmOrder/index.scss';
@import '@/assets/css/confirmOrder/temTwoRow.scss';
.header-wrapper .header-title {
  line-height: 25px;
  color: #333;
  font-weight: 700;
  font-size: 14px;
}
.order-address .addr-item-wrapper.TwoRow .inner-infos {
  z-index: 2;
  position: relative;
  padding: 17px 15px;
  background: url(//img.alicdn.com/tps/i2/T1VPiBXvpeXXbjLKQ7-237-106.png)
    no-repeat;
  overflow: hidden;
}
.order_content {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
}
#orderDesc_orderDesc_1 {
  font-size: 0;
}
.next-btn.next-medium {
  border-radius: 3px;
  padding: 0 12px;
  height: 28px;
  line-height: 26px;
  font-size: 12px;
  border-width: 1px;
  border: 1px solid #c4c6cf;
  background: white;
}
.next-tabs-bar {
  border-bottom: 1px solid #fff;
}
* {
  margin: 0px;
  padding: 0px;
}
.headerLayout {
  display: flex;
  justify-content: space-between;
}
/deep/.el-step__head.is-process,
/deep/.el-step__title.is-process {
  color: #ff0036;
  border-color: #ff0036;
}
/deep/.el-step__icon.is-text {
  border-radius: 50%;
  width: 24px;
  width: 32px;
  height: 32px;
}
/deep/.el-step__line {
  height: 2px;
  top: 15px;
}
</style>