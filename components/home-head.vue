<!--
 * @Author: your name
 * @Date: 2020-01-02 11:04:49
 * @LastEditTime : 2020-01-02 16:08:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\components\home-head.vue
 -->
<template>
  <nav id="tmall_head">
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
          @select="handleSelect"
        >
          <el-submenu index="2">
            <template slot="title">我的淘宝</template>
            <el-menu-item index="2-1">已买到的宝贝</el-menu-item>
            <el-menu-item index="2-2">已卖出的宝贝</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">购物车</el-menu-item>
          <el-menu-item index="8">手机版</el-menu-item>
          <el-menu-item index="9">淘宝网</el-menu-item>
          <el-submenu index="4">
            <template slot="title">商家支持</template>
            <el-menu-item index="4-1">已买到的宝贝</el-menu-item>
            <el-menu-item index="4-2">已卖出的宝贝</el-menu-item>
          </el-submenu>
          <el-submenu index="10">
            <template slot="title">网站导航</template>
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
#tmall_head {
  height: 40px;
  width: 100%;
  background: #f63a00;
  display: flex;
  justify-content: center;
  color: #fff;
  font-family: "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB",
    "\5b8b\4f53", sans-serif !important;
  font: 12px/1.5 tahoma, arial, "\5b8b\4f53" !important;
}
#tmall_head a {
  color: #fff;
}
.content {
  width: 1230px;
  height: 32px;
  background: gray;
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
</style>