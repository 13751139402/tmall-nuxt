<!--
 * @Author: your name
 * @Date: 2020-01-14 18:10:06
 * @LastEditTime : 2020-01-31 21:22:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\search_goods.vue
 -->
<template>
  <div>
    <header>
      <search-view v-model="searchKey">
        <template v-slot:logo>
          <img
            class="tmall-logo-img"
            src="//img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png"
          />
        </template>
      </search-view>
    </header>
    <main>
      <article class="crumb">
        <div class="crumbCon">
          <div class="crumbSlide">
            <div class="crumbClip">
              <ul class>
                <li>
                  <a
                    class="crumbStrong"
                    href="/search_goods.htm?search_condition=7&amp;style=g&amp;q=%CA%D6%BB%FA&amp;from=sn_1_rightnav#J_crumbs"
                    data-i="cat"
                    data-t="3"
                  >全部</a>
                  <i class="crumbArrow">&gt;</i>
                </li>
                <li class="crumbSearch">
                  <form action id="J_CrumbSearchForm">
                    <label class="crumbSearch-label" for="J_CrumbSearchInuput">
                      <input type="text" :value="path" class="crumbSearch-input" aria-label="搜索关键词" />
                      <input type="submit" class="crumbSearch-btn" aria-label="搜索" />
                    </label>
                  </form>
                </li>
              </ul>
            </div>
          </div>
          <p class="crumbTitle">
            共
            <span>{{total}}</span> 件相关商品
          </p>
        </div>
      </article>

      <form class="navAttrsForm">
        <div class="brandAttr j_nav_brand">
          <div class="j_Brand attr">
            <div class="attrKey">品牌</div>
            <div class="attrValues showLogo">
              <ul class="av-collapse row-1" data-atp="{loc},{brand},,,{f},4,{c},">
                <li>
                  <a
                    data-f="spu-brand-qp"
                    data-c="brand-qp"
                    href="?brand=3506680&amp;q=%CA%D6%BB%FA&amp;sort=s&amp;style=g&amp;search_condition=2&amp;from=sn_1_brand-qp&amp;spm=a220m.1000858.0.0.549d7f1fmWTxJF#J_crumbs"
                    title="Xiaomi/小米"
                    atpanel="1,3506680,,,spu-brand-qp,4,brand-qp,"
                  >
                    <img
                      style
                      src="//img.alicdn.com/bao/uploaded/TB1wh2sj.z1gK0jSZLewu29kVXa.png"
                      alt="Xiaomi/小米"
                    />
                    Xiaomi/小米
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>

      <article class="filter clearfix">
        <a class="fSort fSort-cur">
          综合
          <i class="f-ico-arrow-d"></i>
        </a>
        <a class="fSort">
          销量
          <i class="f-ico-arrow-d"></i>
        </a>
        <a class="fSort">
          价格
          <i class="f-ico-triangle-mt"></i>
          <i class="f-ico-triangle-mb f-ico-triangle-mb-slctd"></i>
        </a>
        <form>
          <div class="fPrice" id="J_FPrice">
            <b class="fPb-item">
              <i class="ui-price-plain">¥</i>
              <input
                type="text"
                name="start_price"
                autocomplete="off"
                maxlength="6"
                class="j_FPInput"
                aria-label="最低价"
                placeholder="请输入最低价"
              />
            </b>
            <i class="fPb-split"></i>
            <b class="fPb-item">
              <i class="ui-price-plain">¥</i>
              <input
                type="text"
                name="end_price"
                autocomplete="off"
                maxlength="6"
                class="j_FPInput"
                aria-label="最高价"
                placeholder="请输入最高价"
              />
            </b>

            <div class="fP-expand" style="display: none;">
              <a class="ui-btn-s">清空</a>
              <a class="ui-btn-s-primary">确定</a>
            </div>
          </div>
        </form>
        <p class="ui-page-s">
          <b class="ui-page-s-len">{{pageSLen}}</b>
          <b v-if="currentPage===1" class="ui-page-s-prev" title="上一页">&lt;</b>
          <a
            v-else
            :href="`?searchKey=${this.searchKey}&pageNum=${this.currentPage-1}`"
            class="ui-page-s-next"
            title="下一页"
          >&lt;</a>
          <b v-if="currentPage===Math.ceil(this.total / 60)" class="ui-page-s-prev" title="下一页">&gt;</b>
          <a
            v-else
            :href="`?searchKey=${this.searchKey}&pageNum=${this.currentPage+1}`"
            class="ui-page-s-next"
            title="下一页"
          >&gt;</a>
        </p>
      </article>

      <article class="goods-con">
        <goods-view
          v-for="item in list"
          :key="item.id"
          :shop_name="item.shop&&item.shop.shop_name"
          v-bind="item"
        ></goods-view>
      </article>

      <el-pagination
        class="pagination"
        @current-change="handleCurrentChange"
        :background="true"
        :current-page="currentPage"
        :page-size="60"
        layout=" prev, pager, next,total, jumper"
        :total="total"
      ></el-pagination>

      <!-- <article class="hotSale">
        <h2 class="hotSale_title">掌柜热卖</h2>
        <section>
          <article class="goods-con">
            <goods-view
              v-for="item in hotList"
              :key="item.id"
              :shop_name="item.shop&&item.shop.shop_name"
              v-bind="item"
            ></goods-view>
          </article>
        </section>
      </article>-->
    </main>
  </div>
</template>

<script>
import searchView from "~/components/common/search-view";
import goodsView from "~/components/searchGoods/goods-view";
import axios from "axios";
import { searchGoods } from "~/assets/api/search_goods";
export default {
  watchQuery: true, // 当url query 改变时 页面会刷新
  components: {
    "search-view": searchView,
    "goods-view": goodsView
  },
  computed: {
    pageSLen() {
      return `${this.currentPage}/${Math.ceil(this.total / 60)}`;
    }
  },
  methods: {
    handleCurrentChange(pageNum) {
      this.$router.push({
        path: "/searchGoods",
        query: { searchKey: this.searchKey, pageNum }
      });
    }
  },
  async asyncData({
    query: { searchKey, pageNum = 1, pageSize = 60 },
    error,
    $axios
  }) {
    if (searchKey) {
      const [list, total] = await $axios.$get("/goods/searchGoods", {
        params: { searchKey, pageNum, pageSize }
      });
      return {
        list,
        total,
        searchKey,
        path: searchKey,
        currentPage: Number(pageNum)
      };
    } else {
      error({ statusCode: 400, message: "没有searchKey参数" });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Microsoft YaHei", SimSun, "\5b8b\4f53", sans-serif;
}
.goHome:hover {
  color: rgb(255, 0, 54);
  text-decoration: underline;
}
body {
  background-color: #f5f5f5;
}
.hotSale_title {
  color: #666;
  border-top: 1px solid #f3f0ee;
}
.ui-page-s-len,
.ui-page-s-next,
.ui-page-s-prev {
  display: inline;
  margin-left: 3px;
}
.tmall-logo-img {
  position: absolute;
  left: 0;
  width: 240px;
  height: 130px;
}
main {
  margin: auto;
  width: 1190px;
}
//------------------------- 品牌
.crumb {
  padding-bottom: 8px;
  margin-bottom: 0;
  height: 38px;
  background: #fff;
  z-index: 100;
  .crumbCon {
    height: 100%;
    margin: 0 auto;
    line-height: 27px;
    z-index: 10001;
    border-top: 1px solid #e5e5e5;
    position: relative;
    a {
      color: #666;
    }
    .crumbSlide {
      height: 30px;
      margin: 3px 180px 0 25px;
      .crumbClip {
        position: absolute;
        width: 100%;
        height: 100%;
        clip: rect(0 100% 1000px 0);
        clip: rect(0, auto, 1000px, 0);

        a.crumbStrong {
          display: inline-block;
          overflow: hidden;
          max-width: 9.25em;
          max-width: none\9;
          text-overflow: ellipsis;
          white-space: nowrap;
          vertical-align: middle;
        }
        li {
          padding-left: 9px;
          color: #fff;
          float: left;
          .crumbSearch-label {
            float: left;
            position: relative;
            background-position: 0 -154px;
            border: none;
            width: 125px;
            height: 20px;
            line-height: 21px;
            color: #666;
            padding: 0 25px 0 12px;
            margin-right: 15px;
            top: 4px;
            border: 1px solid #ccc;
            .crumbSearch-input {
              background-color: transparent;
              border: none;
              color: #757575;
              outline: 0;
              float: left;
              line-height: 20px;
              height: 20px;
            }
            .crumbSearch-btn {
              border: none;
              cursor: pointer;
              width: 15px;
              height: 14px;
              top: 4px;
              right: 11px;
              text-indent: -9999px;
              border-radius: 0 2px 2px 0;
              position: absolute;
              display: inline-block;
            }
          }
          .crumbStrong {
            display: inline-block;
            overflow: hidden;
            max-width: 9.25em;
            max-width: none\9;
            text-overflow: ellipsis;
            white-space: nowrap;
            vertical-align: middle;
          }
        }
      }
    }
    .crumbTitle {
      color: #999;
      top: 7px;
      right: 10px;
      line-height: 22px;
      line-height: 23px\9;
      height: 19px;
      overflow: hidden;
      position: absolute;
      display: inline-block;
      span {
        font-weight: 700;
      }
    }
  }
}
.crumbArrow {
  margin-left: 3px;
  width: 5px;
  height: 9px;
  text-indent: -999999px;
  background-position: -15px -5px !important;
}
.crumbArrow,
.crumbDelete {
  vertical-align: middle;
  display: inline-block;
  overflow: hidden;
}
.crumbArrow,
.crumbDelete,
.crumbDrop i,
.crumbSearch-btn,
.crumbSlide-next,
.crumbSlide-prev {
  background: url(//gtms02.alicdn.com/tps/i2/T186tKFDR_XXaYpYLe-35-30.png)
    no-repeat;
}
.attr {
  background-color: #f7f5f5;
  border-color: #e6e2e1 #e6e2e1 #d1ccc7;
  border-style: solid solid dotted;
  border-width: 0 1px 1px;
}
.attrs {
  border-top: 1px solid #e6e2e1;
}
.attrKey,
.attrKey a {
  display: block;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
}
.brandAttr .attrKey {
  padding-top: 9px;
}
.attrKey,
.attrKey a,
.cateAttrs li b {
  white-space: nowrap;
  text-overflow: ellipsis;
}
.brandAttr {
  .attr {
    border: 2px solid #d1ccc7;
    margin-top: -1px;
    display: flex;
    justify-content: center;
    .attrKey {
      padding: 7px 0 0;
      width: 10%;
      color: #b0a59f;
      text-indent: 13px;
    }
    .attrValues {
      padding-top: 6px;
      position: relative;
      float: left;
      background-color: #fff;
      width: 90%;
      padding: 4px 0 0;
      overflow: hidden;
      ul {
        position: relative;
        margin-right: 105px;
        margin-left: 25px;
        padding-top: 1px;
        margin-bottom: 5px;
        display: flex;
        flex-wrap: wrap;
        li {
          border: 1px solid #e1e1e1;
          width: 104px;
          text-align: center;
          height: 52px;
          line-height: 52px;
          overflow: hidden;
          margin: -1px -1px 0 0;
          box-sizing: border-box;
          a {
            padding: 0;
            line-height: 52px;
            height: 50px;
            text-overflow: ellipsis;
            width: 102px;
            overflow: hidden;
            border: 1px solid transparent;
            position: relative;
            color: #806f66;
            white-space: nowrap;
            display: inline-block;
            img {
              width: 80px;
              height: 40px;
              margin: 6px 12px;
            }
          }
        }
      }
    }
  }
}
// ------------------------ 排序-过滤
.filter {
  margin: 10px 0;
  padding: 5px;
  position: relative;
  z-index: 10;
  background: #faf9f9;
  color: #806f66;
  a {
    color: #806f66;
    cursor: pointer;
  }
}
.fArea,
.fMenu,
.fPrice,
.fRange,
.fSort,
.fType-g,
.fType-l,
.fType-w {
  float: left;
  height: 22px;
  line-height: 20px;
  line-height: 24px\9;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;
}
.fPrice,
.fRange,
.fSort {
  position: relative;
}
.fSort .f-ico-arrow-d {
  background-position: -22px -23px;
}
.fSort-cur .f-ico-arrow-d,
.fSort:hover .f-ico-arrow-d {
  background-position: -30px -23px;
}
.fSort {
  display: inline-block;
  margin-left: -1px;
  overflow: hidden;
  padding: 0 15px 0 5px;
  i {
    background: url(//img.alicdn.com/tfs/TB1XClLeAY2gK0jSZFgXXc5OFXa-165-206.png)
      9999px 9999px no-repeat;
    top: 6px;
    right: 5px;
    width: 7px;
    height: 10px;
    line-height: 10px;
  }
}
.fSort:hover,
a.fSort-cur,
a.fType-cur {
  color: #ff0036;
  background: #f1edec;
}
.filter i {
  position: absolute;
}
#navbar a i,
.attr .avo-multiple i,
.attr li i,
.attrExtra i,
.brandAttr .av-search,
.btmFeed,
.cateAttrs .attrKey,
.crumbSearch-btn,
.crumbSlide-next-shadow,
.crumbSlide-prev-shadow,
.drop-icon,
.expand-icon,
.fArea,
.fPb-split,
.fR-cur i,
.fR-list i,
.fRange,
.fSort i,
.fT-arrow,
.fT-cat,
.fType-g i,
.fType-l i,
.fType-w i,
.flagship-icon,
.i-brandsite,
.i-flagship,
.i-shop,
.shopDropBtn i {
  background: url(//img.alicdn.com/tfs/TB1XClLeAY2gK0jSZFgXXc5OFXa-165-206.png)
    9999px 9999px no-repeat;
}
i.f-ico-triangle-mt {
  border-bottom: 4px solid #806f66 !important;
  top: 2px;
}
i.f-ico-triangle-mb,
i.f-ico-triangle-mt {
  border: 4px solid transparent;
  height: 0;
  width: 0;
}
i.f-ico-triangle-mb {
  border-top: 4px solid #806f66 !important;
  border-width: 3px\9;
  right: 6px\9;
  top: 12px;
}
a.fSort-cur i.f-ico-triangle-mb-slctd {
  border-top-color: #ff0036;
  background: #f1edec;
}
.fPrice,
.fRange,
.fSort {
  position: relative;
}
.fArea,
.fMenu,
.fPrice,
.fRange,
.fSort,
.fType-g,
.fType-l,
.fType-w {
  float: left;
  height: 22px;
  line-height: 20px;
  line-height: 24px\9;
  border: 1px solid #ccc;
  background-color: #fff;
  z-index: 10;
}
.fPb-item i {
  width: 12px;
  height: 22px;
  line-height: 22px;
  left: 4px;
  top: 1px;
  flex: 1;
}
.fPrice input {
  display: block;
  width: 100px;
  height: 22px;
  line-height: 22px;
  border: 1px solid #ccc;
  padding-left: 12px;
  cursor: text;
  box-sizing: border-box;
}
.filter .fPb-split {
  position: static;
  background-position: -78px -106px;
  display: block;
  float: left;
  width: 8px;
  /* border: 0; */
  height: 17px;
  line-height: 24px;
}
.fPb-item {
  display: block;
  flex: 1;
  position: relative;
}
.fMenu,
.fPrice-hover {
  height: 24px;
  position: relative;
}
.fPrice {
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
.ui-page-s {
  float: right;
  height: 21px;
  overflow: hidden;
  color: #999;
  font-size: 12px;
}
.ui-page,
.ui-page-s {
  font-family: \5b8b\4f53, Helvetica, sans-serif;
}
b.ui-page-s-len {
  background: 0 0 !important;
  line-height: 20px;
  font-weight: 400;
}
.ui-page-s-len,
.ui-page-s-next,
.ui-page-s-prev {
  display: inline;
  margin-left: 3px;
}
.ui-page-s b {
  background-color: #efefef;
}
.ui-page-s-next,
.ui-page-s-prev {
  width: 19px;
  padding: 4px 0 2px;
  line-height: 1;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}
.clearfix:after,
.headerCon:after {
  clear: both;
}
.clearfix:after,
.clearfix:before,
.headerCon:after,
.headerCon:before {
  display: table;
  content: "";
  overflow: hidden;
}
.ui-page-s-next,
.ui-page-s-prev {
  width: 19px;
  padding: 4px 0 2px;
  line-height: 1;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
  background-color: #fff;
  border: 1px solid #e5e5e5;
}
.goods-con {
  display: flex;
  flex-wrap: wrap;
  width: 1210px;
}
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px;
}
</style>