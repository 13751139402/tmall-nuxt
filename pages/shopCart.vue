<!--
 * @Author: your name
 * @Date: 2020-01-31 20:28:51
 * @LastEditTime: 2020-02-18 13:14:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\pages\shopCart.vue
 -->
<template>
  <div class="cart-taobao">
    <div id="content">
      <header id="J_Header" class="header tb-header">
        <h1 id="logo" class="cart-logo">
          <a href="/" title="淘宝网 Taobao.com - 阿里巴巴旗下网站" target="_top">
            淘宝网
            <span></span>
          </a>
        </h1>
        <div class="search" id="J_Search" role="search">
          <div class="search-triggers">
            <ul class="ks-switchable-nav" id="J_SearchTab">
              <li data-searchtype="item" data-defaultpage="nogo" class="J_SearchTab selected">
                <a href data-spm-anchor-id="1.1000386.0.34">宝贝</a>
              </li>
              <li
                class="J_SearchTab"
                data-searchtype="mall"
                data-action="//list.tmall.com/search_product.htm"
              >
                <a href data-spm-anchor-id="1.1000386.0.35">天猫</a>
              </li>
              <li
                class="J_SearchTab"
                data-searchtype="shop"
                data-action="//s.taobao.com/search?app=shopsearch"
              >
                <a href>店铺</a>
              </li>
            </ul>
            <s>
              <s></s>
            </s>
          </div>
          <div class="search-panel search-hp-panel ks-switchable-content">
            <form
              target="_top"
              action="//s.taobao.com/search"
              name="search"
              id="J_TSearchForm"
              class
            >
              <div class="search-button">
                <button class="btn-search" type="submit">搜 索</button>
              </div>
              <div class="search-panel-fields search-hp-fields search-common-panel">
                <div class="search-combobox" id="ks-component258">
                  <div class="search-combobox-input-wrap">
                    <input
                      aria-label="请输入搜索文字"
                      class="search-combobox-input"
                      role="combobox"
                      x-webkit-grammar="builtin:translate"
                    />
                  </div>
                </div>
              </div>
              <input type="hidden" name="spm" value="1.1000386.5803581.d4908513" />
            </form>
          </div>
        </div>
      </header>
      <div class="cart-layout-TB">
        <!--banner-->

        <template v-if="shopCartData.length">
          <div id="J_Cart" class="cart">
            <div id="J_FilterBar" class="cart-filter-bar">
              <ul id="J_CartSwitch" class="switch-cart">
                <li class="btn-switch-cart switch-cart-0 current">
                  <a class="J_MakePoint" data-point="tbcart.8.35">
                    <em>全部商品</em>
                    <span class="number">{{total}}</span>
                    <span class="pipe"></span>
                  </a>
                </li>
                <li class="btn-switch-cart switch-cart-2">
                  <a class="J_MakePoint" data-point="tbcart.8.34" style="cursor: not-allowed;">
                    <em>降价商品</em>
                    <span class="number">0</span>
                    <span class="pipe"></span>
                  </a>
                </li>
                <li class="btn-switch-cart switch-cart-4 disabled">
                  <a href="javascript: void(0);" class="J_MakePoint" data-point="tbcart.8.36">
                    <em>库存紧张</em>
                    <span class="number">0</span>
                    <span class="pipe"></span>
                  </a>
                </li>
              </ul>
              <div class="cart-sum">
                <span class="pay-text">已选商品（不含运费）</span>
                <strong class="price">
                  <em id="J_SmallTotal">
                    <span class="total-symbol">&nbsp;</span>
                    {{goodsCheckedAmount}}
                  </em>
                </strong>
                <a
                  id="J_SmallSubmit"
                  class="submit-btn submit-btn-disabled"
                  @click="amount_submit"
                  :class="{amount_submit:goodsCheckedCount!=0}"
                >结&nbsp;算</a>
              </div>
              <div class="wrap-line">
                <div class="floater" style="width: 132px; left: -1px;"></div>
              </div>
            </div>
            <div id="J_CartMain" class="cart-main">
              <div class="cart-table-th">
                <div class="wp">
                  <div class="th th-chk">
                    <div id="J_SelectAll1" class="select-all J_SelectAll">
                      <el-checkbox @change="handleCheckedAll" v-model="isChecked"></el-checkbox>&nbsp;全选
                    </div>
                  </div>
                  <div class="th th-item">
                    <div class="td-inner">商品信息</div>
                  </div>
                  <div class="th th-info">
                    <div class="td-inner">&nbsp;</div>
                  </div>
                  <div class="th th-price">
                    <div class="td-inner">单价</div>
                  </div>
                  <div class="th th-amount">
                    <div class="td-inner">数量</div>
                  </div>
                  <div class="th th-sum">
                    <div class="td-inner">金额</div>
                  </div>
                  <div class="th th-op">
                    <div class="td-inner">操作</div>
                  </div>
                  <div class="th th-vil hidden">
                    <div class="td-inner">购买客户信息</div>
                  </div>
                </div>
              </div>
              <div id="J_OrderList">
                <shop-item
                  v-for="item in shopCartData"
                  :key="item.key"
                  v-bind="item"
                  @handleCheckedShopChange="handleCheckedShopChange"
                >
                  <template #default="{goods}">
                    <shop-item-goods
                      v-for="item of goods"
                      :key="item.id"
                      :data="item"
                      @handleCheckedGoodsChange="handleCheckedGoodsChange"
                    ></shop-item-goods>
                  </template>
                </shop-item>
              </div>
            </div>
            <div id="J_FloatBarHolder" class="float-bar-holder">
              <div
                id="J_FloatBar"
                class="float-bar clearfix default"
                :class="{floatBar_float:isBarFloat}"
              >
                <div
                  id="J_SelectedItems"
                  class="group-wrapper group-popup hidden"
                  style="display: none;"
                >
                  <div id="J_SelectedItemsList" class="group-content"></div>
                  <span class="arrow"></span>
                </div>
                <div class="float-bar-wrapper">
                  <div id="J_SelectAll2" class="select-all J_SelectAll">
                    <el-checkbox @change="handleCheckedAll" v-model="isChecked"></el-checkbox>&nbsp;全选
                  </div>
                  <div class="operations">
                    <a href="#" hidefocus="true" class="J_DeleteSelected" @click="delGoods">删除</a>
                    <a
                      href="#"
                      hidefocus="true"
                      class="J_ClearInvalid hidden"
                      style="display: inline;"
                    >清除失效宝贝</a>
                    <a href="#" hidefocus="true" class="J_BatchFav">移入收藏夹</a>
                    <a href="#" hidefocus="true" class="J_BatchShare">分享</a>
                  </div>
                  <div class="float-bar-right">
                    <div id="J_ShowSelectedItems" class="amount-sum">
                      <span class="txt">已选商品</span>
                      <em id="J_SelectedItemsCount">{{goodsCheckedCount}}</em>
                      <span class="txt">件</span>
                      <div class="arrow-box">
                        <span class="selected-items-arrow"></span>
                        <span class="arrow"></span>
                      </div>
                    </div>
                    <div id="J_CheckCOD" class="check-cod" style="display: none;">
                      <span class="icon-cod"></span>
                      <span class="s-checkbox J_CheckCOD"></span>货到付款
                    </div>
                    <div class="pipe"></div>
                    <div class="price-sum">
                      <span class="txt">合计（不含运费）：</span>
                      <strong class="price">
                        <em id="J_Total">
                          <span class="total-symbol">&nbsp;</span>
                          {{goodsCheckedAmount}}
                        </em>
                      </strong>
                    </div>
                    <div class="btn-area">
                      <a
                        href="javascript:void(0)"
                        id="J_Go"
                        class="submit-btn submit-btn-disabled"
                        :class="{amount_submit:goodsCheckedCount!=0}"
                        @click="amount_submit"
                        aria-label="请注意如果没有选择宝贝，将无法结算"
                      >
                        <span>结&nbsp;算</span>
                        <b></b>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div id="empty">
            <h2>您的购物车还是空的，赶紧行动吧！您可以：</h2>
            <ul>
              <li>
                看看
                <a href="/boughtList">已买到的宝贝</a>
              </li>
            </ul>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import shopItemGoods from '@/components/shopCart/shop-item-goods'
import shopItem from '@/components/shopCart/shop-item'
import axios from '@/assets/common/request.js'

export default {
  layout: 'highNav',
  components: {
    'shop-item': shopItem,
    'shop-item-goods': shopItemGoods
  },
  data() {
    return {
      isChecked: false,
      floatBartrigger: false,
      isBarFloat: true
    }
  },
  async fetch({ $axios, store }) {
    let shopCartData = await $axios.$get('/order/shopCartList')
    store.commit('shopCart/ADD_shopCartData', shopCartData)
  },
  computed: {
    shopCartData() {
      return this.$store.state.shopCart.shopCartData
    },
    total() {
      return this.$store.state.goods.total
    },
    goodsCheckedCount() {
      return Object.keys(this.$store.state.shopCart.checkedGoods).length
    },
    goodsCheckedAmount() {
      let checkedGoods = this.$store.state.shopCart.checkedGoods
      let checkedAmount = 0.0
      for (const {
        product_amount: amount,
        sku: { price }
      } of Object.values(checkedGoods)) {
        checkedAmount += amount * price
      }
      return checkedAmount.toFixed(2)
    }
  },
  methods: {
    amount_submit() {
      let checkedGoods = this.$store.state.shopCart.checkedGoods
      let keys = Object.keys(checkedGoods)
      if (!keys[0]) {
        return
      }
      let confirmOrder = keys.reduce((target, item) => {
        let { skuId, product_amount } = checkedGoods[item]
        target.push({
          skuId,
          product_amount
        })
        return target
      }, [])
      this.$store.commit('confirmOrder/CREATE_PARAMS', confirmOrder)
      this.$router.push('/confirmOrder')
    },
    delGoods(value) {
      let checkedGoods = this.$store.state.shopCart.checkedGoods
      let ids = Object.keys(checkedGoods)
      this.$store
        .dispatch('shopCart/delGoods', ids)
        .then(() => {
          this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
        })
        .catch(() => {
          this.$message({
            showClose: true,
            message: '删除失败',
            type: 'error'
          })
        })
    },
    handleCheckedGoodsChange(value, goodsData) {
      this.$store.dispatch('shopCart/handleCheckedGoods', {
        value,
        goodsData
      })
    },
    handleCheckedShopChange(value, shopGoods) {
      this.$store.dispatch('shopCart/handleCheckedShop', {
        value,
        shopGoods
      })
    },
    handleCheckedAll(value) {
      this.$store.dispatch('shopCart/handleCheckedAll', {
        value,
        shopCartData: this.shopCartData
      })
    },
    handleFloatBar() {
      let scrollTop = document.documentElement.scrollTop
      this.isBarFloat = scrollTop >= this.floatBartrigger ? false : true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleFloatBar)
    let scroll = document.getElementById('J_FloatBarHolder')
    if (scroll) {
      let { offsetTop: barTop, offsetHeight: barHeight } = scroll
      let { clientHeight } = document.documentElement
      this.floatBartrigger = barTop + barHeight - clientHeight
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleFloatBar)
  }
}
</script>

 <style scoped lang="scss">
@import '@/assets/css/global.scss';
@import '@/assets/css/cart-min.scss';
/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
/deep/.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #f40;
  border-color: #f40;
}
.floatBar_float {
  position: fixed;
  bottom: 0;
  background: #e5e5e5;
  z-index: 9;
}
.amount_submit {
  background: #f40 !important;
  cursor: pointer !important;
}
</style>