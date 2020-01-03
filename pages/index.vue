<!--
 * @Author: your name
 * @Date: 2019-12-31 09:37:11
 * @LastEditTime : 2020-01-03 16:48:34
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\index.vue
 -->
<template>
  <div class="tmall_container">
    <nav>
      <site-nav></site-nav>
    </nav>
    <header>
      <article id="header_layout">
        <h1 id="mallLogo" title="天猫Tmall.com">天猫Tmall.com</h1>
        <section id="header_input">
          <input v-model="input3" class="search_input" />
          <button class="search_button">搜索</button>
        </section>
      </article>
    </header>
    <content></content>
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
  }
};
</script>

<style lang="scss" scoped>
//----------------- header
#mallLogo {
  display: none;
}
#header_layout {
  display: flex;
  justify-content: center;
  align-items: center;
}
#header_input {
  width: 625px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 2px 0 2px 2px;
  border: solid #ff0036;
}
.search_input {
  width: 623px;
  height: 40px;
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
</style>
