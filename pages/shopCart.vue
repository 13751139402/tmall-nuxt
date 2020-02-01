<!--
 * @Author: your name
 * @Date: 2020-01-31 20:28:51
 * @LastEditTime : 2020-01-31 21:55:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\pages\shopCart.vue
 -->
<template>
  <div class="cart-taobao">
    <div id="content">
      <header id="J_Header" class="header tb-header">
        <h1 id="logo" class="cart-logo">
          <a href="//www.taobao.com/" title="淘宝网 Taobao.com - 阿里巴巴旗下网站" target="_top">
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
                      id="q"
                      name="q"
                      aria-label="请输入搜索文字"
                      accesskey="s"
                      autofocus="true"
                      autocomplete="off"
                      class="search-combobox-input"
                      aria-haspopup="true"
                      aria-combobox="list"
                      role="combobox"
                      x-webkit-grammar="builtin:translate"
                    />
                  </div>
                </div>
              </div>
              <input type="hidden" name="spm" value="1.1000386.5803581.d4908513" />
              <!--[if lt IE 9]><s class="search-fix search-fix-panellt"></s><s class="search-fix search-fix-panellb"></s>
              <![endif]-->
            </form>
          </div>
        </div>
      </header>
      <div class="cart-layout-TB">
        <!--banner-->

        <div id="J_Cart" class="cart">
          <div id="J_FilterBar" class="cart-filter-bar">
            <ul id="J_CartSwitch" class="switch-cart">
              <li class="btn-switch-cart switch-cart-0 current">
                <a class="J_MakePoint" data-point="tbcart.8.35">
                  <em>全部商品</em>
                  <span class="number">11</span>
                  <span class="pipe"></span>
                </a>
              </li>
              <li class="btn-switch-cart switch-cart-2">
                <a class="J_MakePoint" data-point="tbcart.8.34">
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
                  <span class="total-symbol">&nbsp;</span>0.00
                </em>
              </strong>
              <a id="J_SmallSubmit" class="submit-btn submit-btn-disabled">结&nbsp;算</a>
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
                    <div class="cart-checkbox">
                      <input
                        class="J_CheckBoxShop"
                        id="J_SelectAllCbx1"
                        type="checkbox"
                        name="select-all"
                        value="true"
                      />
                      <label for="J_SelectAllCbx1">勾选购物车内所有商品</label>
                    </div>&nbsp;&nbsp;全选
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
              <div id="J_OrderHolder_s_1666576242_1" style="height: auto;">
                <div id="J_Order_s_1666576242_1" class="J_Order clearfix order-body">
                  <div class="J_ItemHead shop clearfix">
                    <div class="shop-info">
                      <div class="cart-checkbox">
                        <input
                          class="J_CheckBoxShop"
                          id="J_CheckShop_s_1666576242_1"
                          type="checkbox"
                          name="orders[]"
                          value="s_1666576242_1"
                        />
                        <label for="J_CheckShop_s_1666576242_1">勾选此店铺下所有商品</label>
                      </div>&nbsp;&nbsp;
                      <span class="shop-icon icon-B"></span>店铺：
                      <a
                        href="//store.taobao.com/shop/view_shop.htm?user_number_id=1666576242"
                        target="_blank"
                        title="同迅数码专营店"
                        class="J_MakePoint"
                        data-point="tbcart.8.15"
                      >同迅数码专营店</a>
                      <span
                        class="ww-light ww-small"
                        data-items="s_1666576242_1"
                        data-icon="small"
                        data-nick="同迅数码专营店"
                        data-display="inline"
                      >
                        <a
                          href="https://amos.alicdn.com/getcid.aw?v=3&amp;groupid=0&amp;s=1&amp;charset=utf-8&amp;uid=%E5%90%8C%E8%BF%85%E6%95%B0%E7%A0%81%E4%B8%93%E8%90%A5%E5%BA%97&amp;site=cntaobao&amp;fromid=cntaobao维他柠檬哥"
                          target="_blank"
                          class="ww-inline ww-online"
                          title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。"
                        >
                          <span>旺旺在线</span>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div class="order-content">
                    <div id="J_BundleList_s_1666576242_1" class="item-list">
                      <div id="J_Bundle_s_1666576242_1_0" class="bundle bundle-last">
                        <div id="J_ItemHolder_1111408930574" class="item-holder">
                          <div
                            id="J_Item_1111408930574"
                            class="J_ItemBody item-body clearfix item-normal first-item last-item"
                          >
                            <ul class="item-content clearfix">
                              <li class="td td-chk">
                                <div class="td-inner">
                                  <div style="height: 82px;position: relative;">
                                    <div class="cart-checkbox">
                                      <input
                                        class="J_CheckBoxItem"
                                        id="J_CheckBox_1111408930574"
                                        type="checkbox"
                                        name="items[]"
                                        value="1111408930574"
                                      />
                                      <label for="J_CheckBox_1111408930574">勾选商品</label>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="td td-item">
                                <div class="td-inner">
                                  <div class="item-pic J_ItemPic img-loaded">
                                    <a
                                      href="//detail.tmall.com/item.htm?id=611126486748"
                                      target="_blank"
                                      data-title="6期免息优惠900当天发HUAWEI/华为 Mate 30 Pro手机官方旗舰店正品华为mate30新款x荣耀p30pro直降5g全网通4g"
                                      class="J_MakePoint J_GoldReport"
                                      data-point="tbcart.8.12"
                                    >
                                      <img
                                        src="https://img.alicdn.com/bao/uploaded/i1/2838892713/O1CN01N0hKZZ1Vub5PeqYBs_!!2838892713.png_80x80.jpg"
                                        class="itempic J_ItemImg"
                                      />
                                    </a>
                                  </div>
                                  <div class="item-info">
                                    <div class="item-basic-info">
                                      <a
                                        href="//detail.tmall.com/item.htm?id=611126486748"
                                        target="_blank"
                                        title="6期免息优惠900当天发HUAWEI/华为 Mate 30 Pro手机官方旗舰店正品华为mate30新款x荣耀p30pro直降5g全网通4g"
                                        class="item-title J_GoldReport J_MakePoint"
                                        data-point="tbcart.8.11"
                                      >6期免息优惠900当天发HUAWEI/华为 Mate 30 Pro手机官方旗舰店正品华为mate30新款x荣耀p30pro直降5g全网通4g</a>
                                    </div>
                                    <div class="item-other-info">
                                      <div class="promo-logos"></div>
                                      <div class="item-icon-list clearfix">
                                        <div class="item-icons J_ItemIcons item-icons-fixed">
                                          <span class="item-icon item-icon-0" title="支持信用卡支付">
                                            <img
                                              src="//assets.alicdn.com/sys/common/icon/trade/xcard.png"
                                              alt
                                            />
                                          </span>
                                          <a
                                            href="//pages.tmall.com/wow/seller/act/seven-day"
                                            target="_blank"
                                            class="item-icon item-icon-1 J_MakePoint"
                                            data-point="tbcart.8.26"
                                            title="消费者保障服务，卖家承诺7天退换"
                                          >
                                            <img
                                              src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png"
                                              alt
                                            />
                                          </a>
                                          <a
                                            href="//www.taobao.com/go/act/315/xfzbz_rsms.php?ad_id=&amp;am_id=130011830696bce9eda3&amp;cm_id=&amp;pm_id="
                                            target="_blank"
                                            class="item-icon item-icon-2 J_MakePoint"
                                            data-point="tbcart.8.26"
                                            title="消费者保障服务，卖家承诺如实描述"
                                          >
                                            <img
                                              src="//img.alicdn.com/tps/i4/T1BCidFrNlXXaSQP_X-16-16.png"
                                              alt
                                            />
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
                                  <p class="sku-line" tabindex="0">网络类型：4G全网通</p>
                                  <p class="sku-line" tabindex="0">机身颜色：星河银</p>
                                  <p class="sku-line" tabindex="0">套餐类型：官方标配</p>
                                  <p class="sku-line" tabindex="0">存储容量：8+256GB</p>
                                  <span
                                    tabindex="0"
                                    class="btn-edit-sku J_BtnEditSKU J_MakePoint"
                                    data-point="tbcart.8.10"
                                  >修改</span>
                                </div>
                              </li>
                              <li class="td td-price">
                                <div class="td-inner">
                                  <div class="item-price price-promo-">
                                    <div class="price-content">
                                      <div class="price-line">
                                        <em class="J_Price price-now" tabindex="0">￥6299.00</em>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li class="td td-amount">
                                <div class="td-inner">
                                  <div class="amount-wrapper">
                                    <div class="item-amount">
                                      <a href="#" class="J_Minus no-minus">-</a>
                                      <input
                                        type="text"
                                        value="1"
                                        class="text text-amount J_ItemAmount"
                                        data-max="5"
                                        data-now="1"
                                        autocomplete="off"
                                      />
                                      <a href="#" class="J_Plus plus">+</a>
                                    </div>
                                    <div class="amount-msg J_AmountMsg"></div>
                                  </div>
                                </div>
                              </li>
                              <li class="td td-sum">
                                <div class="td-inner">
                                  <em tabindex="0" class="J_ItemSum number">￥6299.00</em>
                                  <div class="J_ItemLottery"></div>
                                </div>
                              </li>
                              <li class="td td-op">
                                <div class="td-inner">
                                  <a
                                    title="移入收藏夹"
                                    class="btn-fav J_Fav J_MakePoint"
                                    data-point-url="//www.atpanel.com/jsclick?cache=15804740381031&amp;mycart=collect"
                                    href="#"
                                  >移入收藏夹</a>
                                  <a
                                    href="javascript:;"
                                    data-point-url="//www.atpanel.com/jsclick?cache=15804740381032&amp;cartlist=delete"
                                    class="J_Del J_MakePoint"
                                  >删除</a>
                                  <div
                                    class="find-similar J_find_similar close"
                                    data-sellerid="1666576242"
                                    data-itemid="611126486748"
                                    data-categoryid="1512"
                                  >
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
                </div>
              </div>
            </div>
          </div>
          <div id="J_FloatBarHolder" class="float-bar-holder">
            <div id="J_FloatBar" class="float-bar clearfix default" style="position: static;">
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
                  <div class="cart-checkbox" style="margin-top:2px">
                    <input
                      class="J_CheckBoxShop"
                      id="J_SelectAllCbx2"
                      type="checkbox"
                      name="select-all"
                      value="true"
                    />
                    <label for="J_SelectAllCbx2">勾选购物车内所有商品</label>
                  </div>&nbsp;全选
                </div>
                <div class="operations">
                  <a href="#" hidefocus="true" class="J_DeleteSelected">删除</a>
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
                    <em id="J_SelectedItemsCount">0</em>
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
                        <span class="total-symbol">&nbsp;</span>0.00
                      </em>
                    </strong>
                  </div>
                  <div class="btn-area">
                    <a
                      href="javascript:void(0)"
                      id="J_Go"
                      class="submit-btn submit-btn-disabled"
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // components: {
  // }
};
</script>

 <style scoped lang="scss">
@import "@/assets/css/global.scss";
@import "@/assets/css/cart-min.scss";
</style>