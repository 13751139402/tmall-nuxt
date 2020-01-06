<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-06 18:21:48
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\index.vue
 -->
<template>
  <div class="mallPage">
    <nav>
      <site-nav></site-nav>
    </nav>
    <header>
      <article id="header_layout">
        <h1 id="mallLogo" title="天猫Tmall.com">天猫Tmall.com</h1>
        <section id="header_input">
          <input v-model="search_key" class="search_input" placeholder="搜索 天猫 商品/品牌/店铺" />
          <button class="search_button">搜索</button>
        </section>
      </article>
    </header>
    <content>
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
      <article class="category-con">
        <section class="category-inner-con">
          <figure class="logo-con">
            <img
              class="tmall-logo-img"
              src="//img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png"
              style="margin: 1px auto; display: none;"
              width="240px"
              height="130px"
            />
            <figure>
              <a
                class="j_doodleLink"
                style="display:block;height:100%;width:100%;"
                href="https://nianhuo.tmall.com?wh_weex=true&amp;wh_biz=tm&amp;pos=1&amp;wx_navbar_hidden=true&amp;wh_bizStageId=1287&amp;acm=201603169.1003.2.7198992&amp;wx_main_hc=true&amp;scm=1003.2.201603169.ITEM_1579871047453_7198992"
              >
                <img src="https://gw.alicdn.com/tfs/TB1KT.bsuL2gK0jSZFmXXc7iXXa-290-130.gif" />
              </a>
            </figure>
          </figure>
          <ul class="category-tab-nav">
            <li class="category-tab-nav-item" nav-target="pannel-normal">商品分类</li>
            <li class="category-tab-nav-item meeting-tab selected" nav-target="pannel-meeting">年货节</li>
          </ul>
        </section>
        <section class="banner">
          <el-carousel arrow="never" height="500px">
            <el-carousel-item v-for="(item,index) in bannerList" :key="index">
              <a href>
                <img :src="item.src" alt />
              </a>
            </el-carousel-item>
          </el-carousel>
        </section>
      </article>
    </content>
    <footer></footer>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import siteNav from "~/components/site-nav.vue";

export default {
  components: {
    Logo,
    "site-nav": siteNav
  },
  data() {
    return {
      search_key: "",
      bannerList: [
        { href: "", src: "/_nuxt/assets/images/banner/1.jpg" },
        { href: "", src: "/_nuxt/assets/images/banner/2.jpg" },
        { href: "", src: "/_nuxt/assets/images/banner/3.jpg" },
        { href: "", src: "/_nuxt/assets/images/banner/4.jpg" },
        { href: "", src: "/_nuxt/assets/images/banner/5.jpg" },
        { href: "", src: "/_nuxt/assets/images/banner/6.jpg" }
      ]
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
  border-width: 2px 0 2px 2px;
  border: 2px solid #ff0036;

  .search_input {
    width: 491px;
    height: 100%;
    border: 0;
    font: 16px/22px arial;
    padding: 5px 3px 5px 5px;
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
.category-con {
  position: relative;
  height: 500px;
  width: 100%;
  .category-inner-con {
    width: 1230px;
    padding-right: 30px;
    position: relative;
    height: 0;
    z-index: 100;
    margin: 0 auto;
    .logo-con {
      height: 130px;
      width: 290px;
      position: absolute;
      z-index: 100000;
      margin-top: -167px;
      margin-left: -45px;
      img {
        width: 290px;
        height: 130px;
        position: absolute;
        bottom: 0;
      }
    }
    .category-tab-nav {
      position: absolute;
      z-index: 100;
      margin-top: -36px;
      height: 36px;
      width: 200px;
      color: #fff;
      line-height: 36px;
      .category-tab-nav-item {
        float: left;
        width: 100px;
        text-align: center;
        font-size: 14px;
        color: #f0f0f0;
        cursor: pointer;
        background-color: #c60a0a;
        &.meeting-tab {
          position: relative;
          color: #ffe013;
          &.selected {
            color: #fff;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA1BMVEUYFRXvJ83tAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjAAIAAAQAASDSLW8AAAAASUVORK5CYII=);
          }
        }
        &.selected {
          color: #dd2727;
          background-color: #eee;
          background-color: rgba(238, 238, 238, 0.95);
        }
      }
    }
  }
  .banner {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    z-index: 0;
    width: 1230px;
    margin: 0 auto;
    height: 500px;
    img {
      width: 100%;
    }
    /deep/.el-carousel__button {
      width: 25px;
      height: 5px;
    }
  }
}
</style>
