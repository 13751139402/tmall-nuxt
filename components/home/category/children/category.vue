<!--
 * @Author: your name
 * @Date: 2020-01-07 14:21:15
 * @LastEditTime : 2020-01-07 17:47:51
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home\category\children\category.vue
 -->
<template>
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
    <article class="category-tab-content">
      <section class="nav-con category-tab-pannel pannel-normal"></section>
      <section class="nav-con category-tab-pannel pannel-meeting">
        <ul class="normal-nav">
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconnvzhuangneiyi"></i>
              <span class="link-text">超美女装</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconnanzhuang"></i>
              <span class="link-text">大牌男装</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconxie"></i>
              <span class="link-text">男女鞋靴</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconnvzhuangneiyi"></i>
              <span class="link-text">时尚服饰</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconshipin"></i>
              <span class="link-text">食品生鲜</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconmuyingwanju"></i>
              <span class="link-text">母婴好货</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconhuazhuangpin"></i>
              <span class="link-text">大牌美妆</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconjiayongdianqi"></i>
              <span class="link-text">大小家电</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont iconshumashouji"></i>
              <span class="link-text">手机数码</span>
            </a>
          </li>
          <li class="j_MenuNav meeting-item nav-item">
            <a class="nav-item-link" href>
              <i class="iconfont icondianpu"></i>
              <span class="link-text">苏宁易购</span>
            </a>
          </li>
        </ul>
      </section>
    </article>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
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
}

.category-con .nav-con {
  * {
    box-sizing: border-box;
  }
  width: 200px;
  &.pannel-meeting {
    background-color: #ccc;
    height: 0;
    .normal-nav {
      position: relative;
      padding-top: 29px;
      background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAAA1BMVEUYFRXvJ83tAAAAAXRSTlPM0jRW/QAAAApJREFUCNdjAAIAAAQAASDSLW8AAAAASUVORK5CYII=");
      .nav-item {
        width: 100%;
        box-sizing: border-box;
        padding: 0 24px;
        margin-bottom: 14px;
        i {
          margin-left: 0;
          width: 16px;
          line-height: 29px;
        }
        .nav-item-link {
          display: block;
          width: 100%;
          height: 31px;
          border: 1px solid #cb0c10;
          border-radius: 10px;
          color: #fff;
          text-align: left;
          padding-left: 34px;
          padding-right: 10px;
          line-height: 29px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          &:hover {
            background-color: #cb0c10;
          }
        }
      }
    }
  }
  .normal-nav {
    background-color: #000;
    filter: "alpha(opacity=35)";
    background-color: rgba(0, 0, 0, 0.55);
    width: 200px;
    height: 500px;
    position: relative;
    z-index: 11;
    .nav-item {
      position: relative;
      height: 31.2px;
      line-height: 31.2px;
      color: #fff;
      font-size: 14px;
      i {
        display: inline-block;
        margin-left: 14px;
        margin-right: 4px;
        height: 31px;
        line-height: 31px;
        font-size: 16px;
      }
      a {
        font-size: 14p;
      }
    }
    ul {
      background-color: #000;
      filter: "alpha(opacity=35)";
      background-color: rgba(0, 0, 0, 0.55);
      width: 200px;
      height: 500px;
      position: relative;
      z-index: 11;
    }
  }
}
</style>