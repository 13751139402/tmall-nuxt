<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-02 15:08:47
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\index.vue
 -->
<template>
<div class="tmall_container">
  <header>
    <home-head></home-head>
  </header>
  <content></content>
  <footer></footer>
</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import homeHead from "~/components/home-head.vue";

export default {
  components: {
    Logo,
    "home-head": homeHead
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  color: #fff;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
