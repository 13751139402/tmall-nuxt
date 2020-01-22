<!--
 * @Author: your name
 * @Date: 2020-01-21 08:56:41
 * @LastEditTime : 2020-01-22 11:11:44
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\goodsDetail.vue
 -->

<template>
  <div>
    <site-nav :width="990">
      <template v-slot:left-con>
        <nuxt-link to="/">
          <div>
            <i class="iconfont icon31shouyexuanzhong" style="color:#FF0036"></i>
            <i class="goHome">天猫首页</i>
          </div>
        </nuxt-link>
      </template>
    </site-nav>

    <nav class="navigation-con">
      <ul class="navigation-bar">
        <li>
          <a>{{shop.shop_name?shop.shop_name:"官网旗舰店"}}</a>
        </li>
        <li>
          <a>首页</a>
        </li>
        <li>
          <a>新品到店</a>
        </li>
        <li>
          <a>男士特区</a>
        </li>
        <li>
          <a>女士特区</a>
        </li>
        <li>
          <a>处理中心</a>
        </li>
        <li>
          <a>会员臻选</a>
        </li>
        <li>
          <a>全部商品</a>
        </li>
        <li>
          <label style="position: relative;">
            <img
              src="//gdp.alicdn.com/imgextra/i1/1917047079/O1CN01U91D4t22AEE0H16cJ_!!1917047079.png"
              class="navsearch-btn"
            />
            <input type="text" class="navigation-input" />
          </label>
        </li>
      </ul>
    </nav>

    <article id="detail">
      <div class="tm-detail-meta">
        <section class="tb-gallery">
          <div class="tb-booth">
            <img
              v-show="previewParams.prevImg"
              id="J_ImgBooth"
              :src="previewParams.prevImg+'_430x430q90.jpg'"
            />
          </div>
          <div class="tb-thumb-warp">
            <ul id="J_UlThumb" class="tb-thumb tm-clear">
              <!-- class="tb-selected" -->
              <li
                v-for="(item,index) of preview "
                :key="item.id"
                :class="{'tb-selected':previewParams.previewIndex===index}"
                @mouseenter="changePrevview(index,item.img_url)"
              >
                <a>
                  <img :src="item.img_url&&item.img_url+'_60x60q90.jpg'" alt="商品预览图" />
                </a>
              </li>
            </ul>
          </div>
          <div class="tm-action">
            <a id="J_AddFavorite">
              <i class="iconfont iconshoucangxuanzhong"></i>
              <span>收藏商品</span>
              <span id="J_CollectCount">（159880人气）</span>
            </a>
            <span id="J_EditItem">
              <a>举报</a>
            </span>
          </div>
        </section>
        <section class="tb-property">
          <div class="tb-detail-hd">
            <h1>
              <a href>{{goods_name}}</a>
            </h1>
          </div>
          <div class="tm-fcs-panel">
            <dl class="tm-price-panel tm-price-cur" id="J_StrPriceModBox">
              <dt class="tb-metatit">价格</dt>
              <dd>
                <em class="tm-yen">¥</em>
                <span class="tm-price">{{price}}</span>
              </dd>
            </dl>
          </div>
          <div class="tb-meta">
            <dl class="tm-delivery-panel" id="J_RSPostageCont">
              <dt class="tb-metatit">运费</dt>
              <dd>
                <div class="tb-postAge">
                  <span class="tb-deliveryAdd" id="J_deliveryAdd">上海</span>至
                  <span id="J_AddrSelectTrigger" class="mui_addr_tri" combo-level="3">
                    <span
                      role="button"
                      tabindex="0"
                      aria-haspopup="true"
                      data-code="440300"
                      class="mui_addr_tri_1"
                    >
                      深圳
                      <i class="iconfont icondiquxialajiantou"></i>
                    </span>
                    <span
                      role="button"
                      tabindex="0"
                      aria-haspopup="true"
                      data-code="440303"
                      class="mui_addr_tri_2"
                    >
                      罗湖区
                      <i class="iconfont icondiquxialajiantou"></i>
                    </span>
                  </span>
                  <div id="J_PostageToggleCont" class="tb-postAge-info">
                    <p>
                      <span>快递: 0.00</span>
                    </p>
                  </div>
                </div>
                <div class="signText">付款后3天内发货</div>
              </dd>
            </dl>
          </div>
          <ul class="tm-ind-panel">
            <li class="tm-ind-item tm-ind-reviewCount canClick tm-line3" id="J_ItemRates">
              <div class="tm-indcon">
                <span class="tm-label">累计评价</span>
                <span class="tm-count">24536</span>
              </div>
            </li>
            <li class="tm-ind-item tm-ind-emPointCount" data-spm="1000988">
              <div class="tm-indcon">
                <a href="//vip.tmall.com/vip/index.htm" target="_blank">
                  <span class="tm-label">送天猫积分</span>
                  <span class="tm-count">{{Math.ceil(price/10)}}</span>
                </a>
              </div>
            </li>
          </ul>
          <div class="tb-key">
            <div class="tb-skin">
              <div class="tb-sku">
                <dl class="tb-prop" v-for="spec in spec" :key="spec.id">
                  <dt class="tb-metatit">{{spec.spec_name}}</dt>
                  <dd>
                    <ul class="tm-relate-list" :class="{'tb-img':spec.values[0].spec_value_cover}">
                      <li
                        v-for="specValue in spec.values"
                        :key="specValue.id"
                        :class="{'tb-selected':params.spec[spec.id]===specValue.id}"
                      >
                        <a
                          v-if="specValue.spec_value_cover"
                          :style="{background:`url(${specValue.spec_value_cover+'_40x40q90.jpg'}`}"
                          @click="chooseSpec(spec.id,specValue.id,specValue.spec_value_cover)"
                        >{{specValue.spec_value}}</a>
                        <a v-else @click="chooseSpec(spec.id,specValue.id)">{{specValue.spec_value}}</a>
                        <i>已选中</i>
                      </li>
                    </ul>
                  </dd>
                </dl>

                <dl class="tb-amount tm-clear">
                  <dt class="tb-metatit">数量</dt>
                  <dd id="J_Amount">
                    <el-input-number
                      style="width: 67px;"
                      v-model="params.num"
                      controls-position="right"
                      :min="1"
                    ></el-input-number>
                  </dd>
                </dl>
                <div class="tb-action tm-clear">
                  <div class="tb-btn-buy tb-btn-sku">
                    <a
                      id="J_LinkBuy"
                      href="#"
                      rel="nofollow"
                      data-addfastbuy="true"
                      title="点击此按钮，到下一步确认购买信息。"
                      role="button"
                    >立即购买</a>
                  </div>
                  <div class="tb-btn-basket tb-btn-sku">
                    <a href="#" rel="nofollow" id="J_LinkBasket" role="button">
                      <i class="iconfont icongouwuche2"></i>加入购物车
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>

    <article id="bd">
      <section style="width:190px;">
        <div class="side-shop-info">
          <h3>澳柯玛阿松大阿萨打撒阿</h3>
          <div>
            <ul>
              <li>描述</li>
              <li>服务</li>
              <li>物流</li>
            </ul>
            <div>
              <div>进店逛逛</div>
              <div>收藏店铺</div>
            </div>
          </div>
        </div>
      </section>
      <section style="width:790px">
        <el-tabs type="border-card">
          <el-tab-pane label="商品详情">商品详情</el-tab-pane>
          <el-tab-pane label="累计评价">累计评价</el-tab-pane>
        </el-tabs>
      </section>
    </article>
  </div>
</template>

<script>
import siteNav from "~/components/home/site-nav.vue";
import { goodsDetails } from "~/assets/api/goods_detail";
export default {
  components: {
    "site-nav": siteNav
  },
  data() {
    return {
      previewParams: {
        previewIndex: 0,
        prevImg: false
      },
      params: {
        num: 1,
        spec: {}
      }
    };
  },
  methods: {
    /**
     * @description: 修改预览图下表
     * @param {
     *  index: 下标
     *  img  : 预览图img
     * }
     */

    changePrevview(index, img) {
      this.previewParams.previewIndex = index;
      this.previewParams.prevImg = img;
    },
    /**
     * @description: 修改选中的spec
     * @param {
     *  key   : params.spec的属性名
     *  value : params.spec的属性值
     *  src   : 预览大图的src
     * }
     * @return:
     */

    chooseSpec(key, value, src) {
      let spec = this.params.spec;
      if (!spec[key]) {
        this.$set(spec, key, value);
      } else {
        spec[key] = value;
      }

      if (src) {
        this.changePrevview(-1, src);
      }
    }
  },
  asyncData({ query: { spu_id } }) {
    return goodsDetails({ spu_id }).then(({ data }) => {
      return data;
    });
  },
  mounted() {
    this.preview[0]
      ? (this.previewParams.prevImg = this.preview[0].img_url)
      : "";
  }
};
</script>

<style scoped lang="scss">
#side-shop-info .shop-intro {
  background-color: #fff;
}
#side-shop-info .hd .shopLink {
  color: #333;
  font-size: 12px;
}
#side-shop-info .hd {
  padding: 0 0 0 15px;
  height: 48px;
  line-height: 48px;
  background-color: #fafafa;
  border-bottom: 1px solid #e5e5e5;
}
#bd {
  width: 990px !important;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
/deep/.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: red;
  font-weight: bold;
  position: relative;
  border-top: 3px solid #ff0036;
  box-sizing: border-box;
  &::after {
    content: " ";
    display: block;
    border-width: 5px;
    border-style: solid;
    border-color: #ff0036 transparent transparent;
    width: 0;
    height: 0;
    font-family: arial;
    position: absolute;
    top: -1px;
    left: 50%;
    margin-left: -5px;
  }
}
.tb-prop .tb-img li a {
  text-decoration: none;
  width: auto !important;
  background-position: left center !important;
  background-repeat: no-repeat !important;
  padding: 0 9px 0 45px;
}
.tb-prop .tb-img li a {
  text-decoration: none;
  width: auto !important;
  background-position: left center !important;
  padding: 0 9px 0 45px !important;
  width: 38px !important;
  height: 38px;
  padding: 0;
  line-height: 38px;
  background-repeat: no-repeat;
  outline: 0;
  background-position: center center;
}
.tb-key .tb-selected i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUxpcf8AN////7f4NBoAAAABdFJOUwBA5thmAAAAMUlEQVQI103MAQ4AMAQEQev/j66i6YrEXIKIX9jY2NjYyDmhZnlCo5rdyWvebfYDVAcSmABbA7WD+QAAAABJRU5ErkJggg==);
}
.tb-key .tm-relate-list i {
  display: none;
}
.tb-prop li a:hover,
.tb-prop li.tb-selected a,
.tb-prop li.tb-selected a:hover,
.tm-bundle-dialog .bundle-items .bundle-item .tm-meta li.tb-selected a,
.tm-bundle-dialog .bundle-items .bundle-item .tm-meta li.tb-selected a:hover {
  border: 2px solid #ff0036 !important;
  margin: -1px;
}
.tb-key .tb-selected i {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  overflow: hidden;
  text-indent: -99em;
  display: block;
  background-repeat: no-repeat;
  background-position: 0 0;
}
body {
  background: #fff !important;
}
.tb-gallery .tb-thumb li {
  display: inline-block;
  margin: 0 0 0 16px;
  padding-top: 22px;
}
.tb-gallery .tb-thumb img {
  position: relative;
  max-width: 60px;
  max-height: 60px;
}
.tb-gallery .tb-thumb .tb-selected img {
  left: -2px;
  top: -2px;
}
/deep/.el-input-number__decrease,
/deep/.el-input-number__increase {
  width: 20px;
}
/deep/.el-input-number.is-controls-right .el-input__inner {
  padding-left: 0px;
  padding-right: 20px;
}
.navigation-con {
  width: 100%;
  height: 45px;
  background: #333;
  position: relative;
  color: #fff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  .navigation-bar {
    display: flex;
    width: 990px;
    justify-content: space-between;
    align-items: center;
    li {
      & a:hover {
        filter: progid:DXImageTransform.Microsoft.Alpha(opacity=65);
        opacity: 0.65;
        text-decoration: none;
        color: #fff;
        transition: all 0.5s linear;
      }
      .navigation-input {
        width: 138px;
        height: 19px;
        border-radius: 50px;
        border: 0;
        padding-left: 20px;
      }
      .navsearch-btn {
        border: none;
        width: 12px;
        height: 12px;
        cursor: pointer;
        position: absolute;
        top: 5px;
        left: 5px;
      }
    }
  }
}
#detail {
  width: 990px !important;
  margin: 20px auto;
  .tm-detail-meta {
    width: 990px;
    position: relative;
    z-index: 100;
    display: flex;
    min-height: 600px;
    .tb-gallery {
      width: 460px;
      position: relative;
      overflow: hidden;
      .tb-booth {
        position: relative;
        // background: url();
        display: table;
        table-layout: fixed;
        z-index: 1;
        width: 420px;
        height: 420px;
        margin: 20px auto 0;
        img {
          vertical-align: middle;
          width: 418px;
          height: 418px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border: 1px solid silver\9;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
        }
      }
      .tb-thumb {
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        white-space: nowrap;
        position: relative;
        transition: left 0.2s cubic-bezier(0, 0, 0.25, 1);
        font-size: 0;
        width: 420px;
        margin: 20px auto 0;
        .tb-selected a {
          border: 2px solid #000;
          width: 56px;
          height: 56px;
        }
        a {
          float: left;
          position: relative;
          width: 60px;
          height: 60px;
          overflow: hidden;
        }
      }
      .tm-action {
        display: flex;
        justify-content: space-between;
        padding: 38px 40px 25px;
        color: #999;
      }
    }
    .tb-property {
      flex: 1;
      .tb-detail-hd {
        padding: 20px 10px 12px;
        color: #000;
        h1 {
          padding-bottom: 0.2em;
          line-height: 1;
          font-size: 16px;
          font-weight: 700;
          font-family: "microsoft yahei";
          color: #000;
        }
      }
      .tm-fcs-panel {
        background-color: #e9e9e9;
        background-repeat: no-repeat;
        position: relative;
        left: 0;
        z-index: 10;
        font: 12px/1.5 "Microsoft Yahei", tahoma, arial;
        padding-top: 5px;
        margin-right: 20px;
        .tm-price-cur {
          line-height: 30px;
        }
        .tm-price-panel {
          position: static;
          color: #333;
          padding-left: 0;
          .tb-metatit {
            color: #999;
            font-size: 12px;
            text-align: left;
            float: left;
            width: 69px;
            margin: 0 0 0 8px;
          }
          .tm-yen {
            color: #ff0036;
            font-size: 18px;
          }
          .tm-price {
            color: #ff0036;
            font-size: 24px;
            font-weight: bolder;
          }
        }
        dd {
          color: #333;
          margin-left: 70px;
          font-family: Arial;
        }
      }
      .tm-ind-panel {
        border: 1px dotted #c9c9c9;
        border-width: 1px 0;
        margin-top: 5px !important;
        margin: -1px 20px 0 0;
        padding: 10px 0;
        position: relative;
        overflow: hidden;
        clear: both;
        display: flex;
        .tm-ind-item {
          float: left;
          width: 33%;
          text-align: center;
          position: relative;
          left: -1px;
          border-left: 1px solid #e5dfda;
          flex: 1;
          line-height: 16px;
        }
      }
      .tb-key {
        margin: 0 20px 24px 10px;
        .tb-skin {
          padding: 10px 0;
          .tb-sku {
            .tb-metatit {
              padding-top: 6px;
            }
            padding: 5px 0 12px;
            position: relative;
            .tb-prop {
              padding-bottom: 6px;
              li {
                float: left;
                position: relative;
                margin: 0 4px 4px 0;
                line-height: 28px;
                vertical-align: middle;
                padding: 1px;
                max-width: 95%;
              }
            }
          }
        }
      }
    }
  }
}

.goHome:hover {
  color: rgb(255, 0, 54);
  text-decoration: underline;
}
.tb-action {
  clear: both;
  padding: 10px 0 0 66px;
  margin: 10px 0 0;
}
.tb-btn-sku {
  margin-right: 10px;
  float: left;
}
#detail .tb-btn-basket {
  margin-right: 1px;
}
#detail .tb-sku .tm-relate-current span,
#detail .tb-sku a:hover {
  border: 2px solid #ff0036 !important;
  margin: -1px;
}
#detail .tb-sku .tm-relate-list .tm-relate-current i {
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  overflow: hidden;
  text-indent: -99em;
  background-repeat: no-repeat;
  background-position: 0 0;
}

#detail .tb-sku .tm-relate-list .tm-relate-current i {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAABGdBT…v/j66i6YrEXIKIX9jY2NjYyDmhZnlCo5rdyWvebfYDVAcSmABbA7WD+QAAAABJRU5ErkJggg==);
}

.box:after,
.clear:after,
.clearfix:after,
.col-extra:after,
.col-sub:after,
.layout:after,
.main-wrap:after,
.tb-clearfix:after,
.tm-clear:after {
  content: "\20";
  display: block;
  height: 0;
  clear: both;
}
#detail .tm-relate-wrapper .tb-metatit {
  padding-top: 6px;
}
#detail .tb-metatit {
  text-align: left;
  float: left;
  width: 66px;
}
.tb-key .tb-metatit {
  color: #838383;
}
.tb-metatit,
.tb-metatit a {
  color: #999;
}
.tb-amount-widget .mui-amount-input {
  vertical-align: middle;
}
.tb-text {
  padding: 3px 2px 0 3px;
  line-height: 26px;
}
.tb-ex-select span,
.tb-text {
  font-size: 12px;
  margin: 0;
  height: 26px;
  border: 1px solid #a7a6ac;
  width: 36px;
  background-position: -406px -41px;
  color: #666;
}
.tb-amount-widget .mui-amount-btn {
  display: inline-block;
  vertical-align: middle;
}
.tm-delivery-panel .tb-postAge .tb-deliveryAdd {
  margin: 0 6px 0 0;
}
.tb-amount-widget .mui-amount-decrease {
  margin-top: 3px;
  transform: rotate(180deg);
}
.tm-delivery-panel {
  color: #333;
  position: relative;
}
.tm-delivery-panel .tb-postAge .tb-postAge-info {
  color: #333;
  padding: 0 5px 0 0;
  position: relative;
  display: inline-block;
}
.tb-amount-widget .mui-amount-decrease,
.tb-amount-widget .mui-amount-increase {
  width: 16px;
  height: 12px;
  overflow: hidden;
  border: 1px solid #a7a6ab;
  display: block;
  line-height: 12px;
  font-size: 5px;
  color: #666;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}
.tm-relate-list {
  overflow: hidden;
}
#detail .tb-sku .tm-relate-list li a,
#detail .tb-sku .tm-relate-list li span {
  display: block;
  white-space: nowrap;
  width: auto !important;
  min-width: 10px;
  max-width: 405px;
  padding: 0 6px 0 7px;
  text-align: center;
  border: 1px solid #e2e1e3;
  color: #000;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tm-ind-emPointCount .tm-indcon .tm-count {
  color: #280;
}
#detail .tb-btn-sku a {
  margin-right: 0;
  float: left;
  overflow: hidden;
  position: relative;
  width: 178px;
  background-color: #ffeded;
  border: 1px solid #ff0036;
  color: #ff0036;
  font-family: "Microsoft Yahei";
}
#detail .tb-btn-add a,
#detail .tb-btn-basket a,
#detail .tb-btn-buycar a {
  background-color: #ff0036 !important;
  border: 1px solid #ff0036;
  color: #fff !important;
}
#detail .tb-meta {
  margin: 5px 20px 5px 0;
}

#detail .tb-meta dl {
  line-height: 24px;
}

#detail .tb-meta dl:after {
  content: " ";
  display: block;
  overflow: hidden;
  height: 0;
  font-size: 0;
  clear: both;
}

#detail .tb-meta dl .tb-metatit {
  color: #999;
  font-size: 12px;
  text-align: left;
  float: left;
  width: 50px;
  margin: 0 10px;
}

#detail .tb-meta dl dd {
  margin-left: 70px;
}

#detail .tb-meta dl dd .tb-cf60 {
  color: #f60;
}

#detail .tb-meta span#J_SSLIcon {
  width: auto;
}

#detail .tb-meta .tbid-indicator span {
  width: 72px;
}

.tm-promo-slider {
  background-color: #fafafa;
  border-top: 1px solid #f0f0f0;
  padding: 10px 20px 10px 86px;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  width: 421px;
  left: 0;
  top: 100%;
  display: none;
  margin-left: -20px;
}

#detail .showList .tm-promo-slider {
  display: block;
}

#detail .tb-meta .tm-promo-slider li {
  margin-bottom: 10px;
  clear: both;
  height: 18px;
}

#detail .tm-promo-slider .price {
  color: #f60;
  font-size: 12px;
  font-weight: 400;
  font-family: Arial;
  background: 0 0;
  padding-left: 0;
}

#detail .tm-promo-slider .post-script {
  color: grey;
  padding: 5px 0 15px;
  clear: both;
}

#detail .tb-btn-sku a {
  margin-right: 0;
  float: left;
  overflow: hidden;
  position: relative;
  width: 178px;
  background-color: #ffeded;
  border: 1px solid #ff0036;
  color: #ff0036;
  font-family: "Microsoft Yahei";
}
#detail .tb-btn-sku a,
#detail .tm-change-left {
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 16px;
}
.tm-ind-item .tm-label,
.tm-ind-item .tm-monthavg {
  display: inline-block;
  line-height: 16px;
  height: 16px;
  color: #999;
}
.tm-ind-panel .tm-count {
  display: inline-block;
  line-height: 16px;
  height: 16px;
  color: #ff0036;
  font-weight: 700;
  margin-left: 3px;
}
#detail .tm-fcs-panel,
#detail .tm-fcs-panel dl.tm-shopPromo-panel .tm-floater-Box .fold .hd {
  background-image: url(data:image/png;base64,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);
}
.iconfont {
  font-size: inherit;
}
.tb-detail-hd h1 a,
.tb-detail-hd h3 a {
  vertical-align: middle;
  color: #000;
}
</style>