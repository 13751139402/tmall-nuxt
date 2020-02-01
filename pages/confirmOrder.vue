<!--
 * @Author: your name
 * @Date: 2020-01-31 21:32:43
 * @LastEditTime : 2020-01-31 22:06:19
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tmall-nuxt\pages\confirmOrder.vue
 -->
<template>
  <div>
    <div id="J_Header" class="header tb-header">
      <h1 id="logo" class="cart-logo">
        <a href="//www.taobao.com/" title="淘宝网 Taobao.com - 阿里巴巴旗下网站" target="_top">
          淘宝网
          <span></span>
        </a>
      </h1>
      <header id="header" class="header-order-app" data-spm="a2226n0">
        <div class="headerLayout">
          <div class="headerCon">
            <h1 id="mallLogo">
              <span class="mlogo">
                <a href="//www.tmall.com/" title="天猫Tmall.com">
                  <s></s>天猫Tmall.com
                </a>
              </span>
              <span class="slogo">
                <a href></a>
              </span>
            </h1>

            <div class="header-extra">
              <div class="stepbar-box">
                <div class="tmall-stepbar" style="padding-top: 25px; width: 710px;">
                  <ol
                    prefix="next-"
                    direction="hoz"
                    class="next-step next-step-circle next-step-horizontal next-step-label-vertical"
                    style="width: auto; overflow: visible; height: 64px;"
                  >
                    <li
                      class="next-step-item next-step-item-process next-step-item-first"
                      style="width: 25%;"
                    >
                      <div class="next-step-item-container">
                        <div class="next-step-item-node-placeholder">
                          <div class="next-step-item-node">
                            <div class="next-step-item-node-circle">1</div>
                          </div>
                        </div>
                      </div>
                      <div class="next-step-item-body" tabindex="0" aria-current="step">
                        <div class="next-step-item-title">拍下商品</div>
                        <div class="next-step-item-content"></div>
                      </div>
                      <div class="next-step-item-tail">
                        <div class="next-step-item-tail-underlay">
                          <div class="next-step-item-tail-overlay"></div>
                        </div>
                      </div>
                    </li>
                    <li class="next-step-item next-step-item-wait" style="width: 25%;">
                      <div class="next-step-item-container">
                        <div class="next-step-item-node-placeholder">
                          <div class="next-step-item-node">
                            <div class="next-step-item-node-circle">2</div>
                          </div>
                        </div>
                      </div>
                      <div class="next-step-item-body" tabindex="0">
                        <div class="next-step-item-title">付款到支付宝</div>
                        <div class="next-step-item-content"></div>
                      </div>
                      <div class="next-step-item-tail">
                        <div class="next-step-item-tail-underlay">
                          <div class="next-step-item-tail-overlay"></div>
                        </div>
                      </div>
                    </li>
                    <li class="next-step-item next-step-item-wait" style="width: 25%;">
                      <div class="next-step-item-container">
                        <div class="next-step-item-node-placeholder">
                          <div class="next-step-item-node">
                            <div class="next-step-item-node-circle">3</div>
                          </div>
                        </div>
                      </div>
                      <div class="next-step-item-body" tabindex="0">
                        <div class="next-step-item-title">确认收货</div>
                        <div class="next-step-item-content"></div>
                      </div>
                      <div class="next-step-item-tail">
                        <div class="next-step-item-tail-underlay">
                          <div class="next-step-item-tail-overlay"></div>
                        </div>
                      </div>
                    </li>
                    <li
                      class="next-step-item next-step-item-wait next-step-item-last"
                      style="width: auto;"
                    >
                      <div class="next-step-item-container">
                        <div class="next-step-item-node-placeholder">
                          <div class="next-step-item-node">
                            <div class="next-step-item-node-circle">4</div>
                          </div>
                        </div>
                      </div>
                      <div class="next-step-item-body" tabindex="0">
                        <div class="next-step-item-title">评价</div>
                        <div class="next-step-item-content"></div>
                      </div>
                      <div class="next-step-item-tail">
                        <div class="next-step-item-tail-underlay">
                          <div class="next-step-item-tail-overlay"></div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/css/confirmOrder/global.scss";
@import "@/assets/css/confirmOrder/index.scss";
@import "@/assets/css/confirmOrder/temTwoRow.scss";
</style>