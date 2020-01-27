<template>
  <article>
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
                      v-model="searchKey"
                      id="mq"
                      class="s-combobox-input"
                      title="请输入搜索文字"
                      placeholder="搜索 天猫 商品/品牌/店铺"
                    />
                  </div>
                </div>
                <nuxt-link :to="{ path: '/searchGoods', query: { searchKey: searchKey }}">
                  <button class="search_button">搜索</button>
                </nuxt-link>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </aside>
  </article>
</template>

<script>
export default {
  props: ["searchShow"],
  data() {
    return {
      searchKey: ""
    };
  }
};
</script>

<style lang="scss" scoped>
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
</style>