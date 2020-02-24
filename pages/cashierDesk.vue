<template>
  <div id="cashierDesk">
    <header id="header">
      <div class="header-container fn-clear">
        <div class="header-title">
          <span class="logo">
            支付宝
            <s></s>
          </span>
          <span class="logo-title">我的收银台</span>
        </div>
        <div class="ui-select fn-left switchTemplate" id="switchTemplate">
          <a href="#" class="ui-select-text" seed="switchTemplate-link" smartracker="on">
            <span>中国大陆版</span>
            <i class="iconfont icon31xiala"></i>
          </a>
          <ul class="ui-select-content">
            <li class="ui-select-item">
              <a
                href="https://cashierstl.alipay.com:443/standard/payment/cashier.htm?outBizNo=P202002122122093204&amp;timeStamp=1581475858732&amp;bizIdentity=merge10001&amp;orderId=02127387372a68024a41014958NN9040&amp;country=CN"
                seed="-CN"
              >中国大陆版</a>
            </li>
            <li class="ui-select-item">
              <a
                href="/standard/common/dispatch.htm?orderId=02127387372a68024a41014958NN9040&amp;target=HKFOREIGNPAY"
                seed="switchTemplate-linkT1"
                smartracker="on"
              >香港版</a>
            </li>
            <li class="ui-select-item">
              <a
                href="/standard/common/dispatch.htm?orderId=02127387372a68024a41014958NN9040&amp;target=TWFOREIGNPAY"
                seed="switchTemplate-linkT2"
                smartracker="on"
              >台湾版</a>
            </li>
            <li class="ui-select-item">
              <a
                href="/standard/common/dispatch.htm?orderId=02127387372a68024a41014958NN9040&amp;target=FOREIGNPAY"
                seed="switchTemplate-linkT3"
                smartracker="on"
              >海外其他地区版</a>
            </li>
          </ul>
        </div>
        <ul class="header-right">
          <li class="account-id">
            支付宝账户：
            <span id="J-accountId">13751139402</span>
          </li>
          <li>
            <a target="_blank" seed="pay-by-standard">找人代付</a>
          </li>
          <li>唯一热线：95188</li>
        </ul>
      </div>
    </header>
    <div id="content">
      <div
        id="J_Order"
        class="order order-with-qr"
        data-config="{&quot;codeInfo&quot;:&quot;https://qr.alipay.com/_d?_b=TRADE_DY&amp;mergeOrder=true&amp;tradeNo=P202002122122093204&quot;,&quot;isNeedPollResult&quot;:&quot;true&quot;,&quot;isNeedLongPoll&quot;:&quot;true&quot;,&quot;orderId&quot;:&quot;02127387372a68024a41014958NN9040&quot;,&quot;outBizNo&quot;:&quot;P202002122122093204&quot;,&quot;pollingUrl&quot;:&quot;https://webpushgw.alipay.com/polling&quot;,&quot;barCodeSign&quot;:&quot;291d9580b79b321bd920004d082f81f9&quot;,&quot;extraData&quot;:&quot;merge10001|true||&quot;,&quot;longPollingQueryMaxTimes&quot;:&quot;40&quot;,&quot;longPollingQueryPace&quot;:&quot;30000&quot;,&quot;size&quot;: 100 ,&quot;isNew&quot;:&quot;true&quot;}"
      >
        <div class="order-wrapper">
          <div class="qr J_APop" data-arrowposition="10" data-target="J_QrTip">
            <div id="J_QrWrapper" class="qr-wrapper">
              <img src="../assets/image/zhifubao.png" style="width: 100px; height: 100px;" />
            </div>
          </div>

          <div class="order-title">{{titleData.productName}}</div>
          <div class="order-seller" v-if="titleData.shopName">卖家昵称：{{titleData.shopName}}</div>
          <div class="order-amount">
            <div class="order-real-amount">
              <em class>{{price}}</em>
              元
            </div>
          </div>
          <a id="J_OrderExtTrigger" class="order-ext-trigger" href="#" seed="order-detail-more">
            <i class="iconfont" title="记录"></i>
            订单详情
          </a>
          <p id="J_OrderExtLoading" class="order-ext-loading fn-hide">
            加载订单详情信息...
            <a
              href="http://cashierstl.alipay.com/standard/lightpay/lightPayCashier.htm?orderId=02127387372a68024a41014958NN9040&amp;bizIdentity=merge10001&amp;outBizNo=P202002122122093204&amp;timeStamp=1581475858732&amp;country=CN"
              seed="refresh-account"
            >刷新</a>
          </p>
          <div
            id="J_OrderExt"
            class="order-ext fn-hide"
            data-url="https://cashierstl.alipay.com:443/tile/service/standard:orderDetailAsyncProxy.tile?outBizNo=P202002122122093204&amp;outRelationId=&amp;bizIdentity=merge10001&amp;signData=18f0211a91910d8d0792511219d5df88&amp;orderId=02127387372a68024a41014958NN9040"
          ></div>
        </div>
      </div>
      <!-- CMS:收银台cms/快速付款/快付大促主引导tip开始:fastpay/fastpayDacuMaintip.vm -->
      <!-- CMS:收银台cms/快速付款/快付大促主引导tip结束:fastpay/fastpayDacuMaintip.vm -->
      <div id="J-payMethod" class="main-container">
        <div id="J-rcPaymentDisabled"></div>

        <form name="expressFastPayFrom" id="lightPayForm" action method="post" autocomplete="off">
          <input
            type="hidden"
            name="_form_token"
            value="7766c15bbf255236c74e58af18315a811ed6c4b06cfd4e06bfa95e67ddc1b557RZ41"
          />

          <div id="J-rcChannels" data-url="data.html">
            <div data-reactid=".0">
              <ul id="J_MarketinglList" data-reactid=".0.1"></ul>
              <ul class="saved-card-list" id="J_SavecardList" data-reactid=".0.2">
                <li
                  class="channel-pcredit row-container fn-clear row-container-focus"
                  data-reactid=".0.2.$0"
                >
                  <div class="row-basic fn-clear" data-reactid=".0.2.$0.$/=10">
                    <label class="channel-label" for="alicredit-0" data-reactid=".0.2.$0.$/=10.0">
                      <span
                        class="channel-tit channel-icon icon banklogo-PCREDIT_s"
                        data-id="PCREDIT_s"
                        data-reactid=".0.2.$0.$/=10.0.0"
                      ></span>
                      <span class="channel-name" title="花呗">花呗</span>
                      <span class="pcredit-desc"></span>
                      <span type="recommend" class="icon-recommend icon-mr">推荐</span>
                      <span class="pay-amount">
                        <span class="amount">
                          <span>支付</span>
                          <em class="amount-font-R16">{{price}}</em>
                          <span>元</span>
                        </span>
                      </span>
                    </label>
                    <input
                      checked
                      class="channel-input"
                      id="alicredit-0"
                      name="apiCode"
                      type="radio"
                      data-reactid=".0.2.$0.$/=10.1"
                      seed="rowBasic-alicredit0"
                      smartracker="on"
                    />
                  </div>
                  <div class="row-extra fn-hide" data-reactid=".0.2.$0.$/=11"></div>
                </li>
              </ul>
              <div class="manage-list fn-clear" data-reactid=".0.3">
                <a
                  class="manage-item manage-more fn-left"
                  data-seed="lightpay-more-savedCard"
                  href="#"
                  data-reactid=".0.3.0"
                  seed="manageList-manageItem"
                  smartracker="on"
                >
                  <span data-reactid=".0.3.0.0">其他付款方式</span>
                </a>
                <a
                  class="J_XBox manage-item manage-item-xbox fn-left"
                  data-seed="lightpay-use-newCard"
                  data-reactid=".0.3.2"
                  seed="manageList-J_XBox"
                  smartracker="on"
                >添加快捷/网银付款</a>
              </div>
            </div>
          </div>

          <div id="J-security" class>
            <input
              type="hidden"
              name="securityId"
              id="securityId"
              value="web|cashier_payment_3|1be4fa4f-d411-46ef-957a-1d72ae665f9eRZ41"
            />

            <div class="ui-securitycore ui-securitycore-tip J-securitycoreTip" data-link-in-xbox>
              <div class="ui-form-item ui-form-item-success">
                <div class="ui-form-explain">安全设置检测成功！无需短信校验。</div>
                <div class="J-checkResult fn-hide" data-status>安全设置检测成功！无需短信校验。</div>
              </div>
            </div>
            <!-- Powered by Alipay Security -->

            <div
              class="ui-securitycore J-securitycoreMain"
              data-request="web|cashier_payment_3|1be4fa4f-d411-46ef-957a-1d72ae665f9eRZ41"
              data-system="cashier"
              data-server="https://securitycore.alipay.com"
              data-status
              data-extension="false"
              data-orderid="02127387372a68024a41014958NN9040"
            >
              <input style="display:none" seed="JSecuritycoreMain-ipt" smartracker="on" />
              <input
                type="password"
                style="display:none"
                seed="JSecuritycoreMain-iptT1"
                smartracker="on"
              />

              <div class="edit-section">
                <div class="ui-form-item">
                  <label class="ui-label" for="payPassword">支付宝支付密码：</label>

                  <span class="standardPwdContainer" style="display:none">
                    <input
                      type="password"
                      tabindex="1"
                      id="payPassword_input"
                      name="payPassword_input"
                      class="ui-input"
                      oncontextmenu="return false"
                      onpaste="return false"
                      oncopy="return false"
                      oncut="return false"
                      autocomplete="off"
                      seed="standardPwdContainer-payPassword_input"
                      smartracker="on"
                    />
                  </span>
                  <span class="alieditContainer" id="payPassword_container">
                    <input
                      type="password"
                      tabindex="1"
                      id="payPassword_rsainput"
                      name="payPassword_rsainput"
                      class="ui-input i-text sixDigitPassword"
                      oncontextmenu="return false"
                      onpaste="return false"
                      oncopy="return false"
                      oncut="return false"
                      autocomplete="off"
                      value
                      maxlength="6"
                      minlength="6"
                      style="outline: none; margin-left: -999px;"
                    />
                    <div class="sixDigitPassword" tabindex="0" style="width: 180px;">
                      <i class style="width: 29px; border-color: transparent;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <i style="width: 29px;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <i style="width: 29px;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <i style="width: 29px;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <i style="width: 29px;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <i style="width: 29px;">
                        <b style="visibility: visible;"></b>
                      </i>
                      <span style="width: 29px; visibility: hidden; left: 0px;"></span>
                    </div>
                  </span>

                  <span class="ui-form-other edit-link">
                    <a target="_blank" seed="sc_edit_forgetPwd">忘记密码？</a>
                  </span>

                  <div class="ui-form-explain">
                    <p id="J_edit_prompt_default" class>
                      <!-- CMS:安全核心/安全服务化收银台/未安装控件开始:securitycore/cashier/editPrompt.vm -->
                      请输入6位数字支付密码
                    </p>

                    <p id="J_edit_prompt_noEdit" class="fn-hide">
                      <!-- CMS:安全核心/安全服务化收银台/默认的密码控件下方的提示信息开始:securitycore/cashier/editPromptNoEdit.vm -->
                    </p>
                  </div>

                  <input type="hidden" name="J_aliedit_using" value="true" />
                  <input type="hidden" id="payPassword" name="payPassword" value />
                  <input type="hidden" name="J_aliedit_key_hidn" value="payPassword" />

                  <input type="hidden" name="J_aliedit_uid_hidn" value="alieditUid" />
                  <input
                    type="hidden"
                    id="alieditUid"
                    name="alieditUid"
                    value="ae8f71ccbb71305cb1b31527dd037edc"
                  />

                  <input type="hidden" name="REMOTE_PCID_NAME" value="_seaside_gogo_pcid" />
                  <input type="hidden" name="_seaside_gogo_pcid" value />
                  <input type="hidden" name="_seaside_gogo_" value />
                  <input type="hidden" name="_seaside_gogo_p" value />

                  <input type="hidden" name="J_aliedit_prod_type" value="payment_password" />

                  <input type="hidden" name="security_activeX_enabled" value="false" />

                  <input type="hidden" name="J_aliedit_net_info" value />

                  <input type="hidden" id="edit_infor" value render="R" />
                </div>
              </div>
            </div>
          </div>

          <div id="J-rcSubmit">
            <div class="ui-fm-item ui-fm-action j-submit" data-reactid=".1">
              <input
                class="ui-button ui-button-lblue"
                id="J_authSubmit"
                type="submit"
                value="确认付款"
                @click.prevent="payOrder"
              />
              <span class="ui-fm-status fn-hide" data-reactid=".1.2">正在提交中...</span>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div id="footer">
      <div class="copyright">
        <a
          href="https://fun.alipay.com/certificate/jyxkz.htm"
          target="_blank"
          seed="copyright-link"
          smartracker="on"
        >ICP证：沪B2-20150087</a>
      </div>
      <div class="server" id="ServerNum">cashier-49-36732 &nbsp;</div>
      <!-- FD:231:alipay/foot/copyright.vm:2604:foot/copyright.schema:支付宝copyright:END -->
      <!-- FD:231:alipay/foot/copyright.vm:END -->
      <noscript>
        <img
          src="//kcart.alipay.com/web/bi.do?ref=https%3A%2F%2Fcashier.alipay.com%2F&pg=https%3A%2F%2Fcashier.alipay.com%2F%3Fseed%3Dsyslog-cashier%255Einfo%255Ejavascript.not.enabled&v=0.9.2&BIProfile=clk"
          alt
          width="1"
          height="1"
        />
      </noscript>
    </div>
    <div id="partner">
      <img
        src="https://zos.alipayobjects.com/rmsportal/IASErdnJnLbiMvSoxkaQ.png"
        seed="partner-zosRmsportalIASErdnJnLbiMvSoxkaQ"
        smartracker="on"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'noNav',
  computed: {
    titleData() {
      return this.$store.state.cashierDesk.titleData
    },
    price() {
      return this.$store.state.cashierDesk.price
    }
  },
  methods: {
    payOrder() {
      this.$store
        .dispatch('cashierDesk/payOrder')
        .then(() => {
          this.$router.push('boughtList')
        })
        .catch(() => {
          this.$message({
            showClose: true,
            message: '确认付款失败,请稍后再试',
            type: 'error'
          })
        })
    }
  }
}
</script>

<style scoped lang="scss">
.copyright,
.copyright a,
.copyright a:hover {
  color: #808080;
}
.banklogo-PCREDIT_s {
  background-image: url(https://as.alipayobjects.com/g/cashier-wd/bank-logo/2018.8.31/PCREDIT_s.png);
}
@import '@/assets/css/cashierDesk.scss';
#cashierDesk {
  background: #eff0f1;
  height: 100vh;
}
input.sixDigitPassword {
  position: absolute;
  color: #fff;
  opacity: 0;
  width: 1px;
  height: 1px;
  font-size: 1px;
  left: 0;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-user-select: initial; /* 取消禁用选择页面元素 */
  outline: 'none';
  margin-left: '-9999px';
}

div.sixDigitPassword {
  cursor: text;
  background: #fff;
  outline: none;
  position: relative;
  padding: 8px 0;
  height: 14px;
  border: 1px solid #cccccc;
  border-radius: 2px;
}

div.sixDigitPassword i {
  float: left;
  display: block;
  padding: 4px 0;
  height: 7px;
  border-left: 1px solid #cccccc;
}

div.sixDigitPassword i.active {
  background-image: url('https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif');
  background-repeat: no-repeat;
  background-position: center center;
}

div.sixDigitPassword b {
  display: block;
  margin: 0 auto;
  width: 7px;
  height: 7px;
  overflow: hidden;
  visibility: hidden;
  background-image: url('https://t.alipayobjects.com/tfscom/T1sl0fXcBnXXXXXXXX.png');
}
.edit-section .edit-link a {
  line-height: 24px;
}
div.sixDigitPassword span {
  position: absolute;
  display: block;
  left: 0px;
  top: -1px;
  height: 30px;
  border: 1px solid rgba(82, 168, 236, 0.8);
  border: 1px solid #00ffff;
  border-radius: 2px;
  visibility: hidden;
  -webkit-box-shadow: inset 0px 2px 2px rgba(0, 0, 0, 0.75),
    0 0 8px rgba(82, 168, 236, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}

.ui-securitycore .ui-form-item-loading .ui-form-explain {
  background: url(https://t.alipayobjects.com/tfscom/T1hBFfXnRnXXXXXXXX.gif) 0
    4px no-repeat !important;
}
.ui-securitycore .ui-form-item-error .ui-form-explain,
.ui-securitycore .ui-form-item-warn .ui-form-explain,
.ui-securitycore .ui-form-item-success .ui-form-explain,
.ui-securitycore .ui-form-item-success .ui-form-text,
.ui-securitycore-tip .ui-form-explain {
  background-image: url(https://t.alipayobjects.com/tfscom/T1dmlfXc0dXXXXXXXX.png) !important;
}
.ui-securitycore .ui-form-item .ui-form-explain {
  margin-top: 8px;
}
</style>