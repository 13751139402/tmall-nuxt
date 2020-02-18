<template>
  <tr>
    <td class="sol-mod__no-br___1PwLO">
      <div
        class="ml-mod__container___2DOxT production-mod__production___1MKah suborder-mod__production___3WebF"
      >
        <div class="ml-mod__media___2sZrj" style="width:80px;">
          <a class="production-mod__pic___2xUhO" target="_blank">
            <img :src="image" />
            <span></span>
          </a>
        </div>
        <div style="margin-left:90px;">
          <p>
            <a
              href="//item.taobao.com/item.htm?id=523930162104&amp;_u=e2v7lu6o26a3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span></span>
              <span style="line-height:16px;">{{productName}}</span>
              <span></span>
            </a>
            <a
              href="//buyertrade.taobao.com/trade/detail/tradeSnap.htm?tradeID=590775820497733601&amp;snapShot=true"
              target="_blank"
              rel="noopener noreferrer"
            >[交易快照]</a>
            <span></span>
          </p>
          <p>
            <span class="production-mod__sku-item___3zYoT">
              <span v-for="item of specValue" :key="item.id" style="margin-right:5px;">
                <span>{{item.spec.spec_name}}</span>
                <span>:</span>
                <span>{{item.spec_value}}</span>
              </span>
            </span>
          </p>
          <p>
            <a
              href="//pages.tmall.com/wow/seller/act/seven-day"
              title="七天退换"
              type="3"
              style="margin-right:8px;"
              target="_blank"
            >
              <img src="//img.alicdn.com/tps/i3/T1Vyl6FCBlXXaSQP_X-16-16.png" />
            </a>
            <a
              href="//www.taobao.com/go/act/315/xfzbz_rsms.php?ad_id=&amp;am_id=130011830696bce9eda3&amp;cm_id=&amp;pm_id="
              title="如实描述"
              type="3"
              style="margin-right:8px;"
              target="_blank"
            >
              <img src="//img.alicdn.com/tps/TB1PDB6IVXXXXaVaXXXXXXXXXXX.png" />
            </a>
            <a
              href="//rule.tmall.com/tdetail-4400.htm"
              title="正品保证"
              type="3"
              style="margin-right:8px;"
              target="_blank"
            >
              <img src="//img.alicdn.com/tps/i2/T1SyeXFpliXXaSQP_X-16-16.png" />
            </a>
          </p>
        </div>
      </div>
    </td>
    <td class="sol-mod__no-br___1PwLO">
      <div class="price-mod__price___157jz">
        <p>
          <span>￥</span>
          <span>{{price}}</span>
        </p>
      </div>
    </td>
    <td class="sol-mod__no-br___1PwLO">
      <div>
        <p>{{count}}</p>
      </div>
    </td>
    <td>
      <div>
        <p style="margin-bottom:3px;">
          <a
            href="//archer.taobao.com/myservice/report/accusePunishItemPost.htm?display_type=3&amp;parent_reason_id=9375&amp;auction_num_id=523930162104"
            class="text-mod__link___19F14 text-mod__hover___ew25K"
            target="_blank"
          >违规举报</a>
        </p>
        <p style="margin-bottom:3px;">
          <a
            href="//baoxian.taobao.com/thwy/detail.html?biz_trade_id=590775820497733601&amp;biz_order_id=590775820497733601&amp;type=yfx1"
            class="text-mod__link___19F14 text-mod__hover___ew25K"
            target="_blank"
          >退运保险</a>
        </p>
      </div>
    </td>
    <slot>
      <td class="sol-mod__no-bt___dndvz"></td>
      <td class="sol-mod__no-bt___dndvz"></td>
      <td class="sol-mod__no-bt___dndvz"></td>
    </slot>
  </tr>
</template>

<script>
export default {
  props: ['productName', 'price', 'count', 'image', 'specValue'],
  computed: {
    specValue1() {
      return this.specValue
    }
  },
  watch: {
    specValue(value) {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/boughtList.css';
</style>