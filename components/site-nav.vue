<!--
 * @Author: your name
 * @Date: 2020-01-02 11:04:49
 * @LastEditTime : 2020-01-06 17:52:55
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home-head.vue
 -->
<template>
  <nav id="site-nav">
    <article class="content">
      <section class="login-info">
        <em>喵，欢迎来天猫</em>
        <a href>请登录</a>
        <a href>免费注册</a>
      </section>
      <section class="quick-menu">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-quick-menu"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#f63a00"
          @select="handleSelect"
        >
          <el-submenu index="2">
            <template slot="title">
              <i>我的淘宝</i>
            </template>
            <el-menu-item index="2-1">已买到的宝贝</el-menu-item>
            <el-menu-item index="2-2">已卖出的宝贝</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">
            <i class="iconfont icongouwuchexuanzhong"></i>
            <i>购物车</i>
          </el-menu-item>
          <el-submenu index="80">
            <template slot="title">
              <i>收藏夹</i>
            </template>
            <el-menu-item index="4-1">收藏的宝贝</el-menu-item>
            <el-menu-item index="4-2">收藏的店铺</el-menu-item>
          </el-submenu>
          <el-menu-item index="8">
            <i class="iconfont iconshouji"></i>
            <i>手机版</i>
          </el-menu-item>
          <el-menu-item index="9">
            <i>淘宝网</i>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">
              <i>商家支持</i>
            </template>
            <el-menu-item index="4-1">已买到的宝贝</el-menu-item>
            <el-menu-item index="4-2">已卖出的宝贝</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">
              <i class="iconfont iconliebiao"></i>
              <i>网站导航</i>
            </template>
            <el-menu-item index="10-1">已买到的宝贝</el-menu-item>
            <el-menu-item index="10-2">已卖出的宝贝</el-menu-item>
          </el-submenu>
        </el-menu>
      </section>
    </article>
  </nav>
</template>

<script>
export default {
  name: "homeHead",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style  scoped lang='scss'>
@import "@/assets/css/menu.scss";
#site-nav {
  height: 40px;
  width: 100%;
  background: #f63a00;
  display: flex;
  justify-content: center;
  color: #fff;
  font-family: "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB",
    "\5b8b\4f53", sans-serif;
}
#site-nav a {
  color: #fff;
}
.content {
  width: 1230px;
  height: 32px;
  display: flex;
  justify-content: space-between;
}
.login-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
}
.el-menu-quick-menu {
  height: 100%;
}
.el-menu-quick-menu i {
  color: #fff;
}
#site-nav {
  position: relative !important;
  border-bottom-color: transparent !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  z-index: 99999;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: content-box;
}
</style>