<!--
 * @Author: your name
 * @Date: 2020-01-25 14:24:25
 * @LastEditTime : 2020-01-25 17:25:32
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nuxt\pages\login.vue
 -->
<template>
  <div>
    <div id="mallPage" class="tms-page mallAct tmall-login w1190 page-market">
      <div class="header" data-spm="a2226n0">
        <a href="//www.tmall.com" title="天猫Tmall.com" target="_top">
          <img class="tm-logo" src="//img.alicdn.com/tfs/TB1_Gn8RXXXXXXqaFXXXXXXXXXX-380-54.png" />
        </a>
      </div>
      <div class="content">
        <div
          id="login-banner-wrap"
          style="width: 100%; background-color: rgb(228, 78, 84);"
          title="天猫国际过年不打烊主会场"
        >
          <div class="inner">
            <img src="https://gw.alicdn.com/tfs/TB1ZjhkuAL0gK0jSZFxXXXWHVXa-1190-600.jpg" alt />
          </div>
        </div>
        <div class="form J_form" style="display: block; right: 233px;">
          <div class="form-inner">
            <div class="form-content">
              <login-view></login-view>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer" data-spm="a2226n1">
      <div id="tmall-desc"></div>
      <div id="tmall-copyright">
        <div class="mui-global-fragment-load" data-fragment="tmbase/mui_footer_link">
          <p class="footer-tmallinfo">
            <a href="//pages.tmall.com/wow/seller/act/zhaoshangproduce" target="_blank">关于天猫</a>
            <a href="//service.tmall.com/support/tmall/tmallHelp.htm" target="_blank">帮助中心</a>
            <a href="//open.taobao.com" target="_blank">开放平台</a>
            <a href="//job.alibaba.com/zhaopin/index.htm" target="_blank">诚聘英才</a>
            <a href="//consumerservice.taobao.com/contact-us" target="_blank">联系我们</a>
            <a href="//xtao.tmall.com?tracelog=tmallfoot" target="_blank">网站合作</a>
            <a
              href="//terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201801121425_43176.html"
              target="_blank"
            >法律声明</a>
            <a
              href="//terms.alicdn.com/legal-agreement/terms/suit_bu1_tmall/suit_bu1_tmall201801031144_60809.html"
              target="_blank"
            >隐私权政策</a>
            <a href="http://ipp.alibabagroup.com/" target="_blank">知识产权</a>
            <a href="//jubao.alibaba.com/index.html?site=TMALL" target="_blank">廉正举报</a>
            <a
              class="footer-fp-rule"
              style="display:none;"
              href="//rule.tmall.com/trulecycle.htm"
              target="_blank"
            >规则意见征集</a>
          </p>
          <p class="footer-otherlink">
            <a href="http://www.alibabagroup.com/cn/global/home" target="_blank">阿里巴巴集团</a>|
            <a href="//www.taobao.com" target="_blank">淘宝网</a> |
            <a href="//www.tmall.com/" target="_blank">天猫</a> |
            <a href="//ju.taobao.com/" target="_blank">聚划算</a> |
            <a href="http://www.aliexpress.com/" target="_blank">全球速卖通</a> |
            <a href="http://www.alibaba.com/" target="_blank">阿里巴巴国际交易市场</a>|
            <a href="//www.1688.com/" target="_blank">1688</a> |
            <a href="//www.alimama.com/" target="_blank">阿里妈妈</a> |
            <a href="//www.fliggy.com/" target="_blank">飞猪</a> |
            <a href="http://www.aliyun.com/" target="_blank">阿里云计算</a> |
            <a href="http://www.alios.cn/" target="_blank">AliOS</a> |
            <a href="http://aliqin.cn/" target="_blank">阿里通信</a> |
            <a href="http://www.net.cn/" target="_blank">万网</a> |
            <a href="http://www.autonavi.com/" target="_blank">高德</a> |
            <a href="http://www.uc.cn/" target="_blank">UC</a> |
            <a href="http://www.umeng.com/" target="_blank">友盟</a> |
            <a href="http://www.xiami.com/" target="_blank">虾米</a> |
            <a href="http://www.dingtalk.com/?lwfrom=20150205115110773" target="_blank">钉钉</a> |
            <a href="https://www.alipay.com" target="_blank">支付宝</a> |
            <a href="https://s.alibaba.com?scene=clinks" target="_blank">阿里安全</a>
          </p>
          <div class="footer-copyright">
            增值电信业务经营许可证：
            <a data-spm-protocol="i" href="http://beian.miit.gov.cn">浙B2-20110446</a>
            <span style="margin-right:65px;">市场名称登记证：工商网市字3301004119号</span>
            <span>出版物网络交易平台服务经营备案证： 新出发浙备字第001号</span>
            <br />
            <span style="margin-right:65px;">互联网违法和不良信息举报电话：0571-81683755 blxxjb@alibaba-inc.com</span>
            <span class="footer-liangxinyao-cert" style="display:none;">
              <br />互联网药品交易服务资格证：
              <a
                href="//img.alicdn.com/tps/TB1c4YwOpXXXXcHXXXXXXXXXXXX-3306-2338.jpg"
                target="_blank"
              >粤c20150002</a>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011202000911"
                target="_blank"
              >
                <img src="https://img.alicdn.com/tps/TB1_qAKKVXXXXXjapXXXXXXXXXX-20-20.png" />粤公网安备 44011202000911号
              </a>
              <a
                style="margin-right:30px"
                href="http://www.beian.miit.gov.cn"
                target="_blank"
              >粤ICP备14088652号-2</a>
              医疗器械经营许可证：
              <a
                style="margin-right:30px"
                href="https://img.alicdn.com/tfs/TB1Gfsnnxn1gK0jSZKPXXXvUXXa-1172-830.png"
                target="_blank"
              >粤穗食药监械经营许20171161号</a>
              <a
                style="margin-right:50px"
                href="https://img.alicdn.com/tfs/TB1Uu.mnAL0gK0jSZFtXXXQCXXa-1171-835.png"
                target="_blank"
              >食品经营许可证</a>
              互联网药品信息服务资格证：
              <a
                href="https://img.alicdn.com/tfs/TB1WcAnnAP2gK0jSZPxXXacQpXa-1185-828.png"
                target="_blank"
              >（粤）—经营性—2018—0092</a>
              <a
                style="margin-right:30px"
                href="http://air.gzaic.gov.cn:88/outsys/commonquery/viewBusinessLicence?uniscid=91440101681325547Y&amp;regno=440106000067508"
                target="_blank"
              >阿里健康大药房营业执照</a>
              <a
                href="https://img.alicdn.com/tfs/TB1ZBMonuH2gK0jSZFEXXcqMpXa-1177-835.png"
                target="_blank"
              >药品经营许可证</a>
              <a
                href="https://img.alicdn.com/tfs/TB13bUqnxv1gK0jSZFFXXb0sXXa-584-833.png"
                target="_blank"
              >第二类医疗器械备案凭证</a>
              <a href="http://www.nmpa.gov.cn/WS04/CL2042/" target="_blank">国家药品监督管理局</a>
              <a href="http://www.12315.cn/" target="_blank">全国12315互联网平台</a>
              <a href="http://www.gdnet110.gov.cn/?top_keyword" target="_blank">广东省公安厅</a>
              <a
                href="https://img.alicdn.com/tfs/TB1jRoqnxD1gK0jSZFKXXcJrVXa-1168-833.png"
                target="_blank"
              >GSP</a>
              <a
                href="https://img.alicdn.com/tfs/TB1eWtQnLb2gK0jSZK9XXaEgFXa-926-618.png"
                target="_blank"
              >二类医疗器械网络销售备案</a>
              <a
                href="https://img.alicdn.com/tfs/TB1eWtQnLb2gK0jSZK9XXaEgFXa-926-618.png"
                target="_blank"
              >三类医疗器械网络销售备案</a>
              <a
                href="https://img.alicdn.com/tfs/TB1or0iAFzqK1RjSZSgXXcpAVXa-650-924.jpg"
                target="_blank"
              >食品经营备案</a>
              <br />
            </span>
            互联网药品信息服务资质证书编号：
            <a
              href="//img.alicdn.com/tps/TB1vi6vPVXXXXbVXVXXXXXXXXXX-927-653.png"
            >浙-（经营性）-2017-0005</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010002000120">
              <img
                src="//img.alicdn.com/tps/TB1yEqRPXXXXXXPXpXXXXXXXXXX-20-20.png"
                style="position:relative;top:5px;vertical-align:baseline;"
              />
              浙公网安备 33010002000120号
            </a>
            <br />
            <span style="margin-right:65px;">医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00002号</span>
            <span style="margin-right:65px;">互联网药品交易服务资格证书：国A20150001</span>
            <br />
            <span style="margin-right:65px;">浙江省网络食品销售第三方平台提供者备案：浙网食A33010002</span>

            <a href="http://jb.ccm.gov.cn/">12318举报</a>
            <b>© 2003-2019 TMALL.COM 版权所有</b>
            <p style="padding-top:10px; display:none;" class="footer-fp-img">
              <a
                style="margin-right:10px;"
                target="_blank"
                href="http://idinfo.zjamr.zj.gov.cn//bscx.do?method=lzxx&amp;id=3301843301840000201049"
              >
                <img
                  style="width: 30px;height: 30px"
                  src="//img.alicdn.com/tfs/TB1MQX3cBr0gK0jSZFnXXbRRXXa-65-70.gif"
                />
              </a>
              <a
                target="_blank"
                href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/CB964ABC7B904B7BA3472DDF700A2D6D"
              >
                <img src="//img.alicdn.com/tps/i1/TB13mgzHXXXXXbjXVXXzby4IVXX-80-30.jpg" />
              </a>
            </p>
          </div>
        </div>
      </div>

      <div id="server-num">wormholesource011182179229.center.na62.production</div>
    </div>
  </div>
</template>

<script>
import loginView from "@/components/common/login-view";
export default {
  components: {
    "login-view": loginView
  }
};
</script>

<style scoped scss>
@import "@/assets/css/global.scss";
html body {
  font-family: initial !important;
}
.mui-global-footer-bottom-banner {
  display: none;
}
#site-nav,
#tmall-ensure,
#tmall-desc {
  display: none;
}
#footer {
  border-top: none;
  min-height: 0px;
}
#footer p a {
  color: #000;
}
#tmall-copyright {
  background: #fff;
  border-top: none;
}
#tmall-copyright .footer-copyright {
  background: #fff;
  color: #666;
}
#tmall-copyright .footer-copyright a {
  color: #999;
}
#tmall-copyright .footer-copyright b {
  color: #999;
}
#server-num,
#footer .server-num {
  background: #fff;
  color: #fff;
}

.header {
  padding: 22px 0px;
  height: 44px;
  width: 1190px;
  margin: auto;
}

.content {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
}
.content .form {
  display: none;
  position: absolute;
  top: 91px;
  right: 60px;
  background: #fff;
}

.content .form-content {
  position: relative;
}
.content .form .form-hd {
  font-size: 14px;
  font-weight: bold;
}
.content .form iframe {
  width: 350px;
  height: 400px;
  overflow: hidden;
}
.content .form-layer {
  margin-top: 2px;
  height: 45px;
  width: 326px;
  background: url(//img.alicdn.com/tps/i3/T1d9NTXl4pXXXXXXXX-325-45.png)
    no-repeat;
}
.content .m-taobao-com {
  color: #333;
}
.content .m-taobao-com a,
.content .m-taobao-com a:visited {
  color: #2953a6;
}

.header .tm-logo {
  margin-top: 8px;
  width: 190px;
}

#mallPage .header #mallLogo {
  float: none;
  padding-top: 0px;
  position: static;
}

#mallPage .header #mallLogo .mlogo {
  margin-right: 0;
}
#login-banner-wrap img {
  display: block;
  margin: auto;
}

#login-banner-wrap .inner {
  position: relative;
  width: 1190px;
  margin: auto;
}
#login-banner-wrap .inner a {
  display: block;
  position: absolute;
  top: 80px;
  left: 75px;
  width: 630px;
  height: 440px;
  border: none;
  outline: none;
}
</style>