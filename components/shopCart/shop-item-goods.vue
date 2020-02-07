<template>
  <div class="order-content">
    <div id="J_BundleList" class="item-list">
      <div id="J_Bundle" class="bundle bundle-last">
        <div class="item-holder">
          <div class="J_ItemBody item-body clearfix item-normal first-item last-item">
            <ul class="item-content clearfix" :class="{checkBackground:isChecked}">
              <li class="td td-chk">
                <div class="td-inner">
                  <div style="height: 82px;position: relative;float: right;margin-right: 5px;">
                    <el-checkbox @change="handleCheckedGoodsChange" v-model="isChecked"></el-checkbox>
                  </div>
                </div>
              </li>
              <li class="td td-item">
                <div class="td-inner">
                  <div class="item-pic J_ItemPic img-loaded">
                    <a
                      :href="`/goodsDetail/${data.spuId}`"
                      target="_blank"
                      :data-title="data.spu.goods_name"
                      class="J_MakePoint J_GoldReport"
                    >
                      <img :src="data.spu.cover" class="itempic J_ItemImg" />
                    </a>
                  </div>
                  <div class="item-info">
                    <div class="item-basic-info">
                      <a
                        :href="`/goodsDetail/${data.spuId}`"
                        target="_blank"
                        class="item-title J_GoldReport J_MakePoint"
                      >{{data.spu.goods_name}}</a>
                    </div>
                    <div class="item-other-info">
                      <div class="promo-logos"></div>
                      <div class="item-icon-list clearfix">
                        <div class="item-icons J_ItemIcons item-icons-fixed">
                          <span class="item-icon item-icon-0" title="支持信用卡支付">
                            <img src="//assets.alicdn.com/sys/common/icon/trade/xcard.png" alt />
                          </span>
                          <a
                            href="//pages.tmall.com/wow/seller/act/seven-day"
                            target="_blank"
                            class="item-icon item-icon-1 J_MakePoint"
                            data-point="tbcart.8.26"
                            title="消费者保障服务，卖家承诺7天退换"
                          >
                            <img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" alt />
                          </a>
                          <a
                            href="//www.taobao.com/go/act/315/xfzbz_rsms.php?ad_id=&amp;am_id=130011830696bce9eda3&amp;cm_id=&amp;pm_id="
                            target="_blank"
                            class="item-icon item-icon-2 J_MakePoint"
                            data-point="tbcart.8.26"
                            title="消费者保障服务，卖家承诺如实描述"
                          >
                            <img src="//img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png" alt />
                          </a>
                        </div>
                      </div>
                      <div class="item-tips"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="td td-info">
                <div class="item-props item-props-can">
                  <p
                    class="sku-line"
                    v-for=" {id,spec,spec_value} of data.sku.specValue"
                    :key="id"
                  >{{`${spec.spec_name} : ${spec_value}`}}</p>
                  <span class="btn-edit-sku J_BtnEditSKU J_MakePoint">修改</span>
                </div>
              </li>
              <li class="td td-price">
                <div class="td-inner">
                  <div class="item-price price-promo-">
                    <div class="price-content">
                      <div class="price-line">
                        <em class="J_Price price-now" tabindex="0">{{`￥${data.sku.price}`}}</em>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="td td-amount">
                <div class="td-inner">
                  <div class="amount-wrapper">
                    <div class="item-amount">
                      <el-input-number
                        v-model="count"
                        @change="changeCount"
                        size="mini"
                        style="width:80px"
                        :min="1"
                        :max="data.sku.stock"
                      ></el-input-number>
                    </div>
                    <div class="amount-msg J_AmountMsg"></div>
                  </div>
                </div>
              </li>
              <li class="td td-sum">
                <div class="td-inner">
                  <em tabindex="0" class="J_ItemSum number">{{`￥${total}`}}</em>
                  <div class="J_ItemLottery"></div>
                </div>
              </li>
              <li class="td td-op">
                <div class="td-inner">
                  <a title="移入收藏夹" class="btn-fav J_Fav J_MakePoint">移入收藏夹</a>
                  <a class="J_Del J_MakePoint" @click="delGoods">删除</a>
                  <div class="find-similar J_find_similar close">
                    <div class="J_find_similar_trigger">
                      <a href="javascript:;" class="new-find-similar">相似宝贝</a>
                      <span class="arrow"></span>
                      <i class="icon-bd-title"></i>
                    </div>
                    <div class="find-similar-body">
                      <img
                        src="//gtd.alicdn.com/tps/i2/T1Q2BUXaxFXXXXXXXX-32-32.gif"
                        class="find-similar-loading"
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
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
  },
  data() {
    return {
      isChecked: false,
      count: this.data.product_amount
    };
  },
  methods: {
    handleCheckedGoodsChange(value) {
      this.$emit("handleCheckedGoodsChange", value, this.data);
    },
    changeCount(value) {
      this.$store
        .dispatch("shopCart/handleGoodsCount", {
          id: this.data.id,
          value
        })
        .catch(() => {
          this.$message({
            showClose: true,
            message: "添加数量错误,请稍后再试",
            type: "error"
          });
        });
    },
    delGoods() {
      this.$store
        .dispatch("shopCart/delGoods", [this.data.id])
        .then(() => {
          this.$message({
            showClose: true,
            message: "删除成功",
            type: "scuess"
          });
        })
        .catch(() => {
          this.$message({
            showClose: true,
            message: "删除失败",
            type: "error"
          });
        });
    }
  },
  computed: {
    total() {
      let price = new Number(this.data.sku.price);
      return (price * this.count).toFixed(2);
    }
  },
  watch: {
    "$store.state.shopCart.checkedGoods"(checkedGoods) {
      if (Reflect.has(checkedGoods, this.data.id)) {
        this.isChecked = true;
      } else {
        this.isChecked = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/global.scss";
@import "@/assets/css/cart-min.scss";
/deep/.el-input-number--mini .el-input-number__decrease,
/deep/.el-input-number--mini .el-input-number__increase {
  width: 14px !important;
}
/deep/.el-input--mini .el-input__inner {
  padding: 0 14px;
}
.checkBackground {
  background: #fff8e1;
}
</style>