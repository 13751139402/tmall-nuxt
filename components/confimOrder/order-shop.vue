<!--
 * @Author: your name
 * @Date: 2020-02-08 13:59:58
 * @LastEditTime : 2020-02-11 21:35:39
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\components\confimOrder\order-shop.vue
 -->
<template>
  <div class="order_content">
    <div data-halo-id="seller_e356b50a13aa8ad35e00aafb2d6a1ff9" data-halo-type="seller">
      <div class="order-orderInfo" id="seller_e356b50a13aa8ad35e00aafb2d6a1ff9">
        <img src="//gw.alicdn.com/tfs/TB1CzD7SXXXXXXJaXXXXXXXXXXX-32-32.png" class="shopIcon" />
        <span class="shop-name">店铺:&nbsp;</span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          :title="shop_name"
          class="order-link shop-url"
        >{{shop_name}}</a>
      </div>
    </div>
    <slot :goods="goods"></slot>
    <div>
      <div
        style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: 0px; padding: 0px; background-color: rgb(242, 247, 255); border-bottom: 1px dotted rgb(128, 178, 255);"
      >
        <div style="padding: 0px; border-top: 1px solid rgb(255, 255, 255);">
          <div
            data-halo-id="orderExtUpperPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
            data-halo-type="flex"
          >
            <div
              id="orderExtUpperPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
              style="display: grid; grid-template-columns: 1fr 1fr; margin: 0px;"
            >
              <div
                style="padding: 0px; border-right: 1px solid rgb(255, 255, 255); border-top: 1px solid rgb(255, 255, 255);"
              >
                <div
                  data-halo-id="orderExtLeftPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                  data-halo-type="flex"
                >
                  <div
                    id="orderExtLeftPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                    style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: -5px 0px; padding: 0px;"
                  >
                    <div style="padding: 5px; border-top: 1px solid rgb(255, 255, 255);">
                      <div
                        data-halo-id="invoicePC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                        data-halo-type="invoice"
                      >
                        <div class="invoice" id="invoicePC_e356b50a13aa8ad35e00aafb2d6a1ff9">
                          <div class="invoice-box">
                            <label class="next-checkbox-wrapper invoice-checkbox checked disabled">
                              <span class="next-checkbox">
                                <span class="next-checkbox-inner">
                                  <i class="next-icon next-icon-select next-xs"></i>
                                </span>
                                <input
                                  disabled
                                  type="checkbox"
                                  aria-checked="true"
                                  class="next-checkbox-input"
                                  checked
                                />
                              </span>
                              <span class="next-checkbox-label">开具发票</span>
                            </label>
                            <div class="invoice-operate">
                              <div
                                class="invoice-type"
                                data-spm-anchor-id="a220l.1.0.i3.2eb57f33nK6Bf0"
                              >
                                <label
                                  class="title-label"
                                  data-spm-anchor-id="a220l.1.0.i2.2eb57f33nK6Bf0"
                                >发票类型：</label>
                                <span>电子发票</span>
                              </div>
                              <div class="einvoice-msg">
                                <label class="title-label">&nbsp;</label>
                                <div class="attention">
                                  <i class="icon icon-jingshi"></i>电子发票金额范围及使用说明
                                  <span class="widget-tips-box">
                                    <img
                                      src="//img.alicdn.com/tps/TB1QFFkMXXXXXcNXFXXXXXXXXXX-32-32.png"
                                      class="wtip-icon"
                                    />
                                    <div class="wtip-msg-box">
                                      <div class="wtip-arrow-icon"></div>
                                      <ins class="wtip-msg-icon"></ins>
                                      <div class="wtip-wrap-txt">
                                        <p>1. 发票金额不包括点券、积分或其他类似折扣券抵减的金额;</p>
                                        <p>2. 电子发票可以作为售后维权的有效凭证</p>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                              <!-- <div class="invoice-info">
                                <label class="title-label">发票信息：</label>
                                <el-select v-model="value" placeholder="请选择">
                                  <el-option :label="1" :value="明细"></el-option>
                                </el-select>
                              </div>-->
                              <div class="invoice-info">
                                <label class="title-label">发票抬头类型：</label>
                                <el-radio-group v-model="invoiceRadio">
                                  <el-radio :label="3">个人</el-radio>
                                  <el-radio :label="6">企业</el-radio>
                                </el-radio-group>
                              </div>
                              <div class="invoice-header">
                                <label class="title-label">发票抬头：</label>
                                <span class>
                                  <span>个人</span>
                                  <a class="edit-header">修改</a>
                                </span>
                                <span class="header-box">
                                  <span class="next-input next-medium header-input hide">
                                    <input height="100%" autocomplete="off" value="个人" />
                                  </span>
                                  <span class="header-err-message hide">
                                    <ins class="icon icon-chucuo"></ins>
                                    <span>&nbsp;请填写发票抬头</span>
                                    <ins class="arrow-top"></ins>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style="padding: 5px; border-top: 1px solid rgb(255, 255, 255);">
                      <div
                        data-halo-id="memoPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                        data-halo-type="textArea"
                      >
                        <div class="textarea" id="memoPC_e356b50a13aa8ad35e00aafb2d6a1ff9">
                          <label
                            class="textarea__title"
                            for="textarea_memoPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                          >
                            <div>给卖家留言：</div>
                          </label>
                          <div class="textarea__wrapper">
                            <el-input
                              type="textarea"
                              :rows="1"
                              :show-word-limit="true"
                              placeholder="选填,请先和商家协商一致"
                              v-model="textarea"
                            ></el-input>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="padding: 0px; border-right: 1px solid rgb(255, 255, 255); border-top: 1px solid rgb(255, 255, 255);"
              >
                <div
                  data-halo-id="orderExtRightPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                  data-halo-type="flex"
                >
                  <div
                    id="orderExtRightPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                    style="display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; margin: -5px 0px; padding: 0px;"
                  >
                    <div style="padding: 5px; border-top: 1px solid rgb(255, 255, 255);">
                      <div
                        data-halo-id="deliveryMethodPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                        data-halo-type="deliveryMethod"
                      >
                        <div
                          class="delivery-method"
                          id="deliveryMethodPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                        >
                          <div class="delivery-select">
                            <span class="delivery-title">运送方式：</span>
                            <div class="delivery-box">
                              <span class="single-method">
                                <label class="title-text">普通配送</label>
                                <label class="delivery-type"></label>
                                <span>快递 免邮</span>
                              </span>
                              <div class="appoint-container"></div>
                            </div>
                          </div>
                          <span class="select-price" style="color: rgb(255, 0, 54);">0.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding: 0px; border-top: 1px solid rgb(255, 255, 255);">
          <div
            data-halo-id="orderPayLayoutPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
            data-halo-type="flex"
          >
            <div
              id="orderPayLayoutPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
              style="display: flex; flex-direction: column; justify-content: flex-end; align-items: flex-end; margin: 0px; padding: 10px 0px;"
            >
              <div style="padding: 0px;">
                <div
                  data-halo-id="orderPayPC_e356b50a13aa8ad35e00aafb2d6a1ff9"
                  data-halo-type="label"
                >
                  <div id="orderPayPC_e356b50a13aa8ad35e00aafb2d6a1ff9" class="label">
                    <span
                      class="label__header"
                      style="font-weight: normal; font-style: normal; text-decoration: none; font-size: 14px; min-width: 100px; margin-right: 10px;"
                    >店铺合计(含运费)</span>
                    <span
                      style="font-weight: bold; font-style: normal; text-decoration: none; color: rgb(255, 0, 54); font-size: 14px; min-width: 100px;"
                    >￥{{amount}}</span>
                  </div>
                </div>
              </div>
              <div style="padding: 0px;">
                <div
                  data-halo-id="presellDescGroupPC_presellDescGroup_presellDescGroupe356b50a13aa8ad35e00aafb2d6a1ff9"
                  data-halo-type="descriptionGroup"
                ></div>
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
  data() {
    return {
      invoiceRadio: 3,
      textarea: ""
    };
  },
  props: ["id", "shop_name", "goods"],
  computed: {
    amount() {
      let amount = 0;
      this.goods.forEach(({ product_amount, price }) => {
        amount += product_amount * price;
      });
      return amount.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/confirmOrder/orderShop.scss";
.order_content {
  border: 0px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
}
</style>