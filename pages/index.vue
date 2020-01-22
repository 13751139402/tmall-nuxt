<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-22 10:39:56
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\index.vue
 -->
<template>
  <div>
    <aside class="decorator">
      <div class="side-bg" style="top:2000px;right:0px;">
        <img src="//img.alicdn.com/tfs/TB1UsfZrV67gK0jSZPfXXahhFXa-259-324.png" />
      </div>

      <div class="side-bg" style="top:3000px;left:0px">
        <img src="//img.alicdn.com/tfs/TB1FUEArYH1gK0jSZFwXXc7aXXa-286-522.png" />
      </div>

      <div class="side-bg" style="top:4000px;right:0px;">
        <img src="//img.alicdn.com/tfs/TB1PtZBr4D1gK0jSZFKXXcJrVXa-125-129.png" />
      </div>

      <div class="side-bg" style="top:5000px;left:0px">
        <img src="//img.alicdn.com/tfs/TB1cm.xr.Y1gK0jSZFMXXaWcVXa-159-396.png" />
      </div>

      <div class="side-bg" style="top:6000px;right:0px;">
        <img src="//img.alicdn.com/tfs/TB1UsfZrV67gK0jSZPfXXahhFXa-259-324.png" />
      </div>

      <div class="side-bg" style="top:7000px;left:0px">
        <img src="//img.alicdn.com/tfs/TB1FUEArYH1gK0jSZFwXXc7aXXa-286-522.png" />
      </div>

      <div class="side-bg" style="top:8000px;right:0px;">
        <img src="//img.alicdn.com/tfs/TB1PtZBr4D1gK0jSZFKXXcJrVXa-125-129.png" />
      </div>

      <div class="side-bg" style="top:9000px;left:0px">
        <img src="//img.alicdn.com/tfs/TB1cm.xr.Y1gK0jSZFMXXaWcVXa-159-396.png" />
      </div>
    </aside>
    <main class="mallPage">
      <a name="mallPage"></a>
      <!------- 顶级导航条 ------->
      <site-nav
        background="#d91e1c"
        :top="32"
        :height="40"
        color="#fff"
        iconColor="#fff"
        style="box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3)"
      ></site-nav>

      <header>
        <!------- 搜索栏 ------->
        <search-view></search-view>
      </header>

      <content>
        <!------- 主导航条 ------->
        <article class="main-nav">
          <div class="inner-con0">
            <div class="inner-con1">
              <div class="inner-con2 clearfix">
                <a href aria-label="天猫超市">
                  <img alt src="//img.alicdn.com/tfs/TB1ztBlaMMPMeJjy1XbXXcwxVXa-200-60.png" />
                  <div class="hover-pic"></div>
                </a>
                <a href aria-label="天猫国际">
                  <img alt src="//img.alicdn.com/tfs/TB1t5ObaBxRMKJjy0FdXXaifFXa-200-60.png" />
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  天猫会员
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  电器城
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  喵鲜生
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  医药馆
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  营业厅
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  魅力惠
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  飞猪旅行
                  <div class="hover-pic"></div>
                </a>
                <a href>
                  苏宁易购
                  <div class="hover-pic"></div>
                </a>
              </div>
            </div>
          </div>
        </article>
        <!------- 分类 ------->
        <category-view></category-view>
        <!------- 活动 ------->
        <article class="activity-bg">
          <!------- 活动区域 ------->
          <activity-area class="activityArea"></activity-area>
          <div class="area-con"></div>
          <!------- 品牌闪购 ------->
          <section class="brandWall" v-if="download.brandWall">
            <brand-item
              cn="品牌闪购"
              en="BRAND SALE"
              image="https://img.alicdn.com/tfs/TB1ctCQJhTpK1RjSZR0XXbEwXXa-468-644.jpg_320x5000q100.jpg_.webp"
              href
              :width="234"
            ></brand-item>
            <brand-item
              cn="聚名品"
              en="LUXURY CHANNEL"
              image="https://img.alicdn.com/tfs/TB1ZkoLukCWBuNjy0FaXXXUlXXa-966-644.jpg_490x490q100.jpg_.webp"
              href
            ></brand-item>
            <brand-item
              style="width: 485px;margin-right: 0;"
              cn="品牌活动"
              en="BRAND ACTIVITY"
              image="https://img.alicdn.com/tps/i4/TB1UrovrYr1gK0jSZFDSuv9yVXa.jpg_490x490q100.jpg_.webp"
              href
            ></brand-item>
          </section>
          <!------- 热门品牌 ------->
          <section class="brandHot" v-if="download.brandHot">
            <div class="module-body">
              <div class="brand-list">
                <ul class="brand-item-body">
                  <brand-hot
                    v-for="(item,index) of brandList"
                    :key="index"
                    :img="item.img"
                    :name="item.name"
                  ></brand-hot>
                </ul>
                <div>
                  <a href="#" class="refresh-btn">
                    <i class="iconfont iconhuanyipi1 rotate-icon"></i>
                    <span class="btn-text">换一批</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <!--- 活动楼层 --->
          <section class="floor-con">
            <!------- 天猫超市 ------>
            <floor-line
              id="tmall-shop"
              v-if="download.tmallShop"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=6`"
            >
              <template v-slot:title>
                <img src="https://img.alicdn.com/tfs/TB1Q67hXPihSKJjy0FeXXbJtpXa-428-50.png" />
              </template>
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tfs/TB1XjMYnfb2gK0jSZK9XXaEgFXa-468-1236.jpg"
                  category="天猫超市"
                  title1="1499抢"
                  title2="飞天茅台"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-two-item></floor-two-item>
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 天猫国际 ------>
            <floor-line
              id="tmall-international"
              v-if="download.tmallInternational"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=7`"
            >
              <template v-slot:title>
                <img src="https://img.alicdn.com/tfs/TB1R.slXGagSKJjy0FgXXcRqFXa-428-50.png" />
              </template>
              <template v-slot:bigBanner>
                <div style="display: flex;flex-direction: column;float: left;">
                  <floor-banner
                    img="https://img.alicdn.com/tfs/TB1fQ1VeMoQMeJjy0FpXXcTxpXa-235-301.png"
                    category="奢享人生"
                    title1="急速发货"
                    title2="全球低价"
                    style="height:301px;border-bottom: 15px solid #f5f5f5;"
                  ></floor-banner>
                  <floor-banner
                    img="https://img.alicdn.com/tfs/TB1xvaReMoQMeJjy1XaXXcSsFXa-235-301.png"
                    category="春季上新"
                    title1="日本专业级"
                    title2="瘦脸美容仪"
                    style="height:301px"
                  ></floor-banner>
                </div>
              </template>
              <template v-slot:default="{list}">
                <floor-item>
                  <div class="floor-item-content-wrap">
                    <div class="title">识货</div>
                    <div class="sub-title">每日精选新鲜好货</div>
                    <img
                      src="https://img.alicdn.com/tps/i4/TB1Njg2bjuhSKJjSspmSuwQDpXa.jpg"
                      class="Boutique"
                    />
                    <div class="item-activity-icon" style="display:none"></div>
                  </div>
                </floor-item>
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 居家生活 ------>
            <floor-line
              title="居家生活"
              subTitle="GROCERY & HEALTH"
              v-if="download.surplus"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=8`"
            >
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tps/i4/TB1iAupe8Kw3KVjSZFOSuurDVXa.jpg"
                  category="家具建材"
                  title1="年货狂欢"
                  title2="不只5折"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 潮电酷玩 ------>
            <floor-line
              title="潮电酷玩"
              subTitle="ELECTRONICS"
              v-if="download.surplus"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=8`"
            >
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tps/i4/TB1sgSzhFcJL1JjSZFOwu3WlXXa.png"
                  category="明星同款"
                  title1="畅想音乐"
                  title2="耳机发烧友"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 美丽人生 ------>
            <floor-line
              title="美丽人生"
              subTitle="FASHION & BEAUTY"
              v-if="download.surplus"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=8`"
            >
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tfs/TB1RX6OsF67gK0jSZPfXXahhFXa-468-1236.jpg"
                  category="鸿运内衣"
                  title1="新年钜惠"
                  title2="不只五折"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 户外出行 ------>
            <floor-line
              title="户外出行"
              subTitle="FASHION & BEAUTY"
              v-if="download.surplus"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=8`"
            >
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tfs/TB1Hux3rbY1gK0jSZTEXXXDQVXa-468-1236.jpg"
                  category="鸿运内衣"
                  title1="新年钜惠"
                  title2="不只五折"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
            <!------- 打造爱巢 ------>
            <floor-line
              title="打造爱巢"
              subTitle="HOME"
              v-if="download.surplus"
              :httpRequest="`http://hsid.top:3000/goods/randGoods?num=8`"
            >
              <template v-slot:bigBanner>
                <floor-banner
                  img="https://img.alicdn.com/tfs/TB1pQNMkuT2gK0jSZFvXXXnFXXa-468-1236.jpg"
                  category="年终大促"
                  title1="爆款直降"
                  title2="24期免息"
                ></floor-banner>
              </template>
              <template v-slot:default="{list}">
                <floor-item
                  v-for="item in list"
                  :key="item.spu_no"
                  :price="item.price"
                  href="/"
                  :name="item.goods_name"
                  :img="item.cover"
                ></floor-item>
              </template>
            </floor-line>
          </section>
        </article>
        <!------- 猜你喜欢 ----->
        <wonderful-view v-if="download.likes"></wonderful-view>
      </content>

      <footer></footer>
    </main>
    <!--------- top搜索 ---------->
    <search-flex-view :searchShow="show.search" v-if="download.search"></search-flex-view>
    <!--------- 锚点导航 ---------->
    <mui-lift :liftShow="show.lift" v-if="download.lift"></mui-lift>
  </div>
</template>

<script>
import siteNav from "~/components/home/site-nav.vue";
import serachFlexView from "~/components/home/search-flex-view.vue";
import category from "~/components/home/category-view";
import activity from "~/components/home/activity-view";
import wonderful from "~/components/home/wonderful-view";
import muiLift from "~/components/home/mui-lift";
import brandItem from "~/components/home/activity-view/children/brand-item";
import brandHot from "~/components/home/activity-view/children/brand-hot";
import floorLine from "~/components/home/activity-view/children/floor-line-con";
import bigBanner from "~/components/home/activity-view/children/floor-line-con-bigBanner";
import floorItem from "~/components/home/activity-view/children/floor-line-con-item";
import floorTwoItem from "~/components/home/activity-view/children/floor-line-con-twoItem";
import activityArea from "~/components/home/activity-view/children/activity-area";
import searchView from "~/components/common/search-view";
import { throttle } from "~/assets/util/tools.js";

export default {
  components: {
    "site-nav": siteNav,
    "category-view": category,
    "activity-view": activity,
    "wonderful-view": wonderful,
    "mui-lift": muiLift,
    "search-flex-view": serachFlexView,
    "brand-item": brandItem,
    "brand-hot": brandHot,
    "floor-line": floorLine,
    "floor-banner": bigBanner,
    "floor-item": floorItem,
    "floor-two-item": floorTwoItem,
    "activity-area": activityArea,
    "search-view": searchView
  },
  data() {
    return {
      htmlEl: false,
      show: {
        lift: false,
        search: false
      },
      download: {
        lift: false,
        search: false,
        brandWall: false,
        brandHot: false,
        tmallShop: false,
        tmallInternational: false,
        surplus: false,
        likes: false
      },
      brandList: [
        {
          img:
            "https://img.alicdn.com/i2/2/TB1vDvUKpXXXXaKXFXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "Apple/苹果"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1CIkXKVXXXXXCXFXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "第六感"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1gR9vsyrpK1RjSZFhXXXSdXXa?abtest=&pos=3&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥20"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1Z.mzyMmTBuNjy1XbXXaMrVXa?abtest=&pos=4&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥300"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1t.e1m2DH8KJjy1XcXXcpdXXa?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "Nike/耐克"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1nE3FN9zqK1RjSZFHXXb3CpXa?abtest=&pos=6&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "Dell/戴尔"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥300"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "优惠券 ￥1000"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "ENFINITAS/蓝臻"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=10&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥110"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=11&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥200"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1_aF7pG6qK1RjSZFmXXX0PFXa?abtest=&pos=12&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥30"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB12cBSirGYBuNjy0FoXXciBFXa?abtest=&pos=13&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "LEAGUE OF LEGENDS/英雄联盟"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&pos=14&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "上汽大众"
        },
        {
          img:
            "https://img.alicdn.com/imgextra/i4/928417138/O1CN019OFNEK22bFcXdLUb5_!!928417138.png_100x150q100.jpg_.webp",
          name: "优惠券 ￥300"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1KH4GQpXXXXb_apXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "scout"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1_kq7j1SSBuNjy0FlXXbBpVXa?abtest=&pos=17&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥210"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1nJxqJXXXXXchapXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "优惠券 ￥1000"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1sM7GSXXXXXb3aXXXXXXXXXXX?abtest=&pos=19&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥50"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1ytKieRWD3KVjSZKPXXap7FXa?abtest=&pos=20&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "帕尔玛之水"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1A9Eicf5TBuNjSspmXXaDRVXa?abtest=&pos=21&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥100"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/TB1R1K4GFmWBuNjSspdSuvugXXa.jpg_100x150q100.jpg_.webp",
          name: "双心"
        },

        {
          img:
            "https://img.alicdn.com/i2/2/T25cAwXGhXXXXXXXXX-1785908005.jpg_100x150q100.jpg_.webp",
          name: "hot topic"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB19rJeHNjaK1RjSZFAXXbdLFXa?abtest=&pos=24&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥80"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1aA5EcMsSMeJjSspeXXa77VXa?abtest=&pos=26&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥200"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1OCoUJVXXXXcYXFXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "优惠券 ￥100"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1G5bXD9BYBeNjy0FeSuvnmFXa.jpg_100x150q100.jpg_.webp",
          name: "优惠券 ￥100"
        },
        {
          img:
            "https://img.alicdn.com/i2/2/TB1XcHYHpXXXXXmXXXXSutbFXXX.jpg_100x150q100.jpg_.webp",
          name: "优惠券 ￥200"
        },
        {
          img:
            "//img.alicdn.com/i2/2/TB1gOvrmZLJ8KJjy0FnXXcFDpXa?abtest=&pos=25&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_100x150q100.jpg_.webp",
          name: "优惠券 ￥80"
        }
      ]
    };
  },
  methods: {
    controlShow() {
      let scroll = this.htmlEl.scrollTop;
      if (scroll >= 500) {
        this.show.lift = true;
      } else {
        this.show.lift = false;
      }
      if (scroll >= 700) {
        this.show.search = true;
      } else {
        this.show.search = false;
      }
    },
    controlDownload() {
      let scroll = this.htmlEl.scrollTop;
      if (scroll >= 500) {
        this.download.lift = true;
        if (scroll >= 500) {
          this.download.search = true;
        }
      }
      if (scroll >= 250) {
        this.download.brandWall = true;
        if (scroll >= 600) {
          this.download.brandHot = true;
          if (scroll >= 1000) {
            this.download.tmallShop = true;
            if (scroll >= 1400) {
              this.download.tmallInternational = true;
              if (scroll >= 1800) {
                this.download.surplus = true;
                if (scroll >= 3000) {
                  this.download.likes = true;
                }
              }
            }
          }
        }
      }
    }
  },

  beforeMount() {
    // 挂载前添加"窗口调整"事件
    this.htmlEl = document.documentElement;
    this.controlShow();
    this.controlDownload();
    window.addEventListener("scroll", throttle(this.controlShow, 50));
    window.addEventListener("scroll", throttle(this.controlDownload, 50));
  }
};
</script>

<style lang="scss" scoped>
body {
  background-color: #f5f5f5;
}
.mallPage {
  background-image: url(//img.alicdn.com/tfs/TB1AM7CrYj1gK0jSZFuXXcrHpXa-1702-1356.png);
  background-repeat: no-repeat;
  background-position: center top;
  width: auto;
  min-width: 990px;
  background-color: transparent;
}
//----------------- content main-nav
.main-nav {
  white-space: nowrap;
  position: relative;
  font-size: 0;
  padding-top: 0;
  height: 35.5px;
  border-style: solid;
  border-color: #ff0036;
  background-color: rgba(0, 0, 0, 0);
  border-width: 0px;
  .inner-con0 {
    height: 36px;
    line-height: 36px;
    width: 100%;
    position: absolute;
    bottom: 0;
    .inner-con1 {
      width: 1230px;
      margin: 0 auto;
      padding-right: 30px;
      box-sizing: content-box;
      .inner-con2 {
        background-color: white;
        border-style: solid;
        border-width: 0px 0px 1.5px;
        border-color: #ff0036;
        height: 34.5px;
      }
    }
  }
}
.main-nav .inner-con1 .inner-con2 {
  margin-left: 200px;
  width: 1030px;
  box-sizing: content-box;
}
.main-nav a {
  height: 35px;
  cursor: pointer;
  float: left;
  padding: 0 8px;
  font-weight: 500;
  font-size: 16px;
  display: block;
  color: #333;
  letter-spacing: normal;
  position: relative;
  img {
    width: 100px;
    height: 30px;
    margin-top: 3px;
    display: block;
  }
}
.img-ks-lazyload {
  animation: ks-fadeIn 350ms linear 0ms 1 normal both;
  opacity: 1;
}
.side-bg {
  position: absolute;
  right: 0px;
}
//----------------- 活动
.activity-bg {
  background: top center no-repeat;
  .area-con {
    margin: auto;
    padding-top: 10px;
    width: 1230px;
    padding-right: 30px;
  }
  .brandWall {
    margin: auto;
    width: 1230px;
    display: flex;
    padding-right: 30px;
  }
}
.brandHot {
  margin: 15px auto 0;
  width: 1230px;
  padding-right: 30px;
  position: relative;
  .module-body {
    height: 327px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    .brand-list {
      background-color: #f5f5f5;
      margin-right: -1px;
      width: 100%;
      height: 100%;
      float: right;
      position: relative;
      .brand-item-body {
        margin-right: -2px;
        overflow: hidden;
      }
    }
  }
  .refresh-btn {
    width: 122px;
    height: 108px;
    display: block;
    color: #999;
    background-color: #fff;
    position: absolute;
    bottom: 1px;
    right: 1px;
    overflow: hidden;
    transition: all 0.3s ease-out;
    z-index: 500;
    &:hover {
      color: #fff !important;
      background-color: #ff0036;
      .rotate-icon {
        animation: rotate 0.5s ease-out 0s;
      }
      @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
    .rotate-icon {
      width: 40px;
      height: 40px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -20px;
      margin-top: -30px;
      font-size: 30px;
      text-align: center;
      line-height: 38px;
      border-radius: 20px;
    }
    .btn-text {
      display: block;
      font-size: 14px;
      line-height: 136px;
      text-align: center;
    }
  }
}
.floor-con {
  margin: 20px auto 0;
  width: 1230px;
  padding-right: 30px;
}
</style>
