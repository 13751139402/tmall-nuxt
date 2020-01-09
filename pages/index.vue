<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-09 18:28:41
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
    </main>
    <!--------- top搜索 ---------->
    <aside class="search-shelter" :class="{'show':searchShow}"></aside>
    <aside class="search-con" :class="{'show':searchShow}">
      <div class="attached-search-container">
        <div class="fp-iconfont-new">
          <i class="iconfont iconTMALLLOGO1" style="font-size: 80px;"></i>
          <i class="iconfont icontianmao" style="font-size: 46px;line-height: 24px;margin-left:3px"></i>
        </div>
        <div id="mallSearch">
          <form
            name="searchTop"
            action="//list.tmall.com/search_product.htm"
            class="mallSearch-form clearfix"
            target="_top"
            accept-charset="gbk"
          >
            <fieldset>
              <legend>天猫搜索</legend>
              <div class="mallSearch-input clearfix">
                <div class="s-combobox" id="s-combobox-138">
                  <div class="s-combobox-input-wrap">
                    <input
                      type="text"
                      id="mq"
                      class="s-combobox-input"
                      title="请输入搜索文字"
                      placeholder="搜索 天猫 商品/品牌/店铺"
                    />
                  </div>
                </div>
                <button type="submit">搜索</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
    <!--------- 锚点导航 ---------->
    <aside class="mui-lift" v-show="liftShow">
      <div class="sn-nav-wrapper" style="display: block;">
        <div class="mui-lift-nav nav-header">导航</div>
        <div data-spm="fpLift">
          <a href="#" class="mui-lift-nav color-type-green">
            <div class="mui-lift-nav-name">天猫超市</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-purple">
            <div class="mui-lift-nav-name">天猫国际</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-green">
            <div class="mui-lift-nav-name">居家生活</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-pink">
            <div class="mui-lift-nav-name">美丽人生</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-blue">
            <div class="mui-lift-nav-name">潮电酷玩</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-cyan">
            <div class="mui-lift-nav-name">户外出行</div>
          </a>

          <a href="#" class="mui-lift-nav color-type-red">
            <div class="mui-lift-nav-name">打造爱巢</div>
          </a>

          <a href="#" class="mui-lift-nav">
            <div class="mui-lift-nav-name">猜你喜欢</div>
          </a>
          <a href="#mallPage" class="mui-lift-nav nav-back j_navBack">
            <i class="iconfont iconqiehuanqishang"></i>
            <div>顶部</div>
          </a>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import siteNav from "~/components/home/site-nav.vue";
import category from "~/components/home/category";
import activity from "~/components/home/activity";
import wonderful from "~/components/home/wonderful";
import { throttle } from "~/assets/tools.js";

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
      search_key: "",
      searchShow: false,
      htmlEl: false,
      liftShow: false
    };
  },
  methods: {
    $_scrollHandler() {
      let scroll = this.htmlEl.scrollTop;
      if (scroll >= 500) {
        this.liftShow = true;
      } else {
        this.liftShow = false;
      }
      if (scroll >= 700) {
        this.searchShow = true;
      } else {
        this.searchShow = false;
      }
    }
  },
  beforeMount() {
    // 挂载前添加"窗口调整"事件
    this.htmlEl = document.documentElement;
    window.addEventListener("scroll", throttle(this.$_scrollHandler, 50));
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
.img-ks-lazyload {
  animation: ks-fadeIn 350ms linear 0ms 1 normal both;
  opacity: 1;
}
.side-bg {
  position: absolute;
  right: 0px;
}
// --------------- search-con
.search-shelter,
.search-con {
  display: block;
  position: fixed;
  width: 100%;
  z-index: 10000;
  height: 50px;
  transition: top 0.3s ease-out;
  &.show {
    top: 0px;
  }
}
.search-shelter {
  background-color: #ff0036;
  opacity: 0.95;
  top: -50px;
}
.search-con {
  top: -50px;
  margin: 0 auto;
  opacity: 1;
  box-shadow: 0 0 4px #eaeaea;
  overflow: hidden;
  .attached-search-container {
    top: 0;
    width: 1230px;
    padding-right: 30px;
    background-color: transparent;
    position: relative;
    height: 50px;
    margin: 0 auto;
    border: none;
    overflow: hidden;
    .fp-iconfont-new {
      width: 160px;
      display: flex;
      margin-top: 12px;
      z-index: 20;
      height: 30px;
      line-height: 30px;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
    }
    #mallSearch {
      float: none !important;
      padding-top: 12px;
      width: 740px !important;
      position: relative;
      z-index: 10;
      height: 30px;
      margin: 0 auto;
      .mallSearch-form {
        border: none !important;
        .mallSearch-input {
          background: #fff;
          height: 30px;
          .s-combobox {
            height: 30px;
            width: 650px;
            float: left;
            font-size: 12px;
            .s-combobox-input-wrap {
              position: relative;
              height: 30px;
              vertical-align: middle;
              .s-combobox-input {
                width: 640px !important;
                background: 0 0;
                outline: transparent dotted 0;
                opacity: 1;
              }
              #mq {
                color: #666;
                margin: 0;
                z-index: 2;
                width: 289px;
                height: 20px;
                line-height: 20px;
                padding: 5px 3px 5px 8px;
                outline: 0;
                border: none;
                background: url(data:image/gif;base64,R0lGODlhAQADAJEAAObm5t3d3ff39wAAACH5BAAAAAAALAAAAAABAAMAAAICDFQAOw==)
                  repeat-x;
                -webkit-box-sizing: content-box;
                -moz-box-sizing: content-box;
                box-sizing: content-box;
                &.input {
                  font-weight: 900;
                }
              }
            }
          }
        }
      }
      label {
        color: #666;
        font-size: 12px;
        line-height: 30px;
        height: 30px;
        position: absolute;
        left: 8px;
        top: 0;
        z-index: 1;
        max-width: 90%;
        overflow: hidden;
        white-space: nowrap;
      }
      fieldset {
        position: relative;
        border: 0;
      }
      legend {
        display: none;
      }
    }
    button {
      right: -1px;
      height: 32px;
      position: absolute;
      z-index: 1;
      top: 0;
      width: 90px;
      border: 0;
      font-size: 16px;
      letter-spacing: 4px;
      cursor: pointer;
      color: #fff;
      background-color: #ff0036;
      overflow: hidden;
      font-family: "\5FAE\8F6F\96C5\9ED1", arial, "\5b8b\4f53";
      border-radius: 0;
    }
  }
}

// --------------- mui-lift
.mui-lift {
  margin-left: -673px !important;
  position: fixed;
  bottom: 50px;
  left: 50%;
  z-index: 9999;
  width: 35px;
  text-align: center;
  .mui-lift-nav {
    &.nav-header {
      background-color: #ff0036;
    }
    position: relative;
    display: block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    margin-top: 1px;
    background-color: #666;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    font-size: 12px;
    .mui-lift-nav-name {
      line-height: 12px;
      width: 24px;
      height: 28px;
      margin: 6px auto;
    }
    .nav-back i {
      font-size: 14px;
      margin-top: 5px;
      display: block;
    }
  }
  .mui-lift-cur-nav {
    background-color: #ff0036;
    &:hover {
      background-color: #000;
    }
  }
  .mui-lift-nav.nav-header,
  .mui-lift-nav.nav-header:hover {
    background-color: #ff0036;
  }

  .mui-lift-nav:hover {
    background-color: #000;
  }

  .mui-lift-nav.nav-back {
    line-height: 13px;
    background-color: #666;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .mui-lift-nav.nav-back i {
    font-size: 18px;
    margin-top: 5px;
    display: block;
  }

  .mui-lift-cur-nav {
    background-color: #ff0036;
  }

  .color-type-pink.mui-lift-cur-nav,
  .color-type-pink:hover {
    background-color: #ea5f8d;
  }

  .color-type-blue.mui-lift-cur-nav,
  .color-type-blue:hover {
    background-color: #0aa6e8;
  }

  .color-type-green.mui-lift-cur-nav,
  .color-type-green:hover {
    background-color: #64c333;
  }

  .color-type-cyan.mui-lift-cur-nav,
  .color-type-cyan:hover {
    background-color: #19c8a9;
  }

  .color-type-orange.mui-lift-cur-nav,
  .color-type-orange:hover {
    background-color: #f7a945;
  }

  .color-type-red.mui-lift-cur-nav,
  .color-type-red:hover {
    background-color: #f15453;
  }
}
</style>
