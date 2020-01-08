<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-08 18:00:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\index.vue
 -->
<template>
  <div class="mallPage">
    <nav>
      <!------- 顶级导航条 ------->
      <site-nav></site-nav>
    </nav>

    <header>
      <!------- 搜索栏 ------->
      <article id="header_layout">
        <h1 id="mallLogo" title="天猫Tmall.com">天猫Tmall.com</h1>
        <section id="header_input">
          <input v-model="search_key" class="search_input" placeholder="搜索 天猫 商品/品牌/店铺" />
          <button class="search_button">搜索</button>
        </section>
      </article>
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
      <activity-view></activity-view>
      <!------- 猜你喜欢 ----->
      <wonderful-view></wonderful-view>
    </content>

    <footer></footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import siteNav from "~/components/home/site-nav.vue";
import category from "~/components/home/category";
import activity from "~/components/home/activity";
import wonderful from "~/components/home/wonderful";

export default {
  components: {
    Logo,
    "site-nav": siteNav,
    "category-view": category,
    "activity-view": activity,
    "wonderful-view": wonderful
  },
  data() {
    return {
      search_key: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.mallPage {
  background-image: url(//img.alicdn.com/tfs/TB1AM7CrYj1gK0jSZFuXXcrHpXa-1702-1356.png);
  background-repeat: no-repeat;
  background-position: center top;
  width: auto;
  min-width: 990px;
  min-height: 3000px;
  background-color: transparent;
}
//----------------- header
#mallLogo {
  display: none;
}
#header_layout {
  display: flex;

  justify-content: center;
  height: 130px;
}
#header_input {
  width: 625px;
  height: 40px;
  margin-top: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff0036;
  border-width: 2px 0 2px 2px;
  box-sizing: border-box;
  .search_input {
    width: 491px;
    height: 100%;
    border: 0;
    font: 16px/22px arial;
    padding: 5px 3px 5px 5px;
    box-sizing: border-box;
  }
  .search_button {
    width: 132px;
    height: 36px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 5px;
    background-color: #ff0036;
    color: #fff;
    font-family: "\5FAE\8F6F\96C5\9ED1", arial, "\5b8b\4f53";
  }
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

// -------------------- content category
</style>
