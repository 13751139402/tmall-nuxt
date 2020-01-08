<template>
  <div class="grid two-grid">
    <div class="floor-tabs">
      <ul class="floor-tab-head">
        <li class>
          <p class="tab-title">今日疯抢</p>
        </li>

        <li class="floor-current-tab">
          <p class="tab-title">量贩装</p>
        </li>
      </ul>
      <div class="floor-tab-content">
        <div class="floor-tab-detail" style="display: none;">
          <a
            class="right-detail-a"
            href="https://pages.tmall.com/wow/chaoshi/act/wupr?wh_biz=tm&amp;pos=1&amp;wh_pid=act%2Fliangyou-xin1&amp;acm=201709123-1.1003.2.7208822&amp;scm=1003.2.201709123-1.OTHER_1577999186198_7208822"
            data-spm-anchor-id="875.7931836/B.2017039.2"
          >
            <div class="right-detail">
              <div class="title-wrap">
                <img
                  class="cla-icon"
                  src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png"
                />
                <span class="tab-item-title">粮油调味</span>
              </div>
              <div>
                <span class="tab-desp">爆款直降</span>
              </div>
            </div>
            <img
              class="item-img"
              src="https://img.alicdn.com/tfs/TB1jNScP6TpK1RjSZKPXXa3UpXa-400-400.jpg"
            />
          </a>
        </div>

        <div class="floor-tab-detail" style="display: block;">
          <a
            class="right-detail-a"
            href="https://pages.tmall.com/wow/z/cs/act/wupr?spm=875.7931836/B.2017039.3.66144265uOKNmj&amp;wh_biz=tm&amp;pos=2&amp;wh_pid=act%2Fnsssy&amp;acm=201709123-2.1003.2.7208823&amp;scm=1003.2.201709123-2.OTHER_1578872251407_7208823"
            data-spm-anchor-id="875.7931836/B.2017039.3"
          >
            <div class="right-detail">
              <div class="title-wrap">
                <img
                  class="cla-icon"
                  src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png"
                />
                <span class="tab-item-title">第2件0元</span>
              </div>
              <div>
                <span class="tab-desp">奶商伸伸腰</span>
              </div>
            </div>
            <img
              class="item-img"
              src="https://img.alicdn.com/tfs/TB1kx02beH2gK0jSZFEXXcqMpXa-400-400.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.grid.two-grid {
  float: left;
  background: #fff;
  width: 484px;
  height: 301px;
  margin-left: 13px;
}

.grid.two-grid .floor-tabs {
  width: 462px;
  height: 282px;
  margin: 10px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.09);
}

.grid.two-grid .floor-tab-head {
  overflow: hidden;
  background: #f1f1f1;
}

.grid.two-grid .floor-tab-head li {
  float: left;
  color: #000;
  height: 57px;
  width: 191px;
  cursor: pointer;
  line-height: 30px;
  padding: 0 20px;
  text-align: center;
  vertical-align: middle;
}

.grid.two-grid .floor-tab-head li.floor-current-tab {
  color: #fff;
  background: #00b262;
}

.grid .sub-title,
.tab-item-title {
  color: #ea5f8d;
}

.grid.two-grid .floor-tab-detail {
  height: 225px;
  width: 462px;
}

.grid.two-grid .right-detail-a {
  height: 225px;
  width: 462px;
  display: block;
}

.mui-lift,
.w1024 .middle-column-con .last-1230 {
  display: none;
}

.grid.two-grid .right-detail {
  position: absolute;
  top: 153px;
  height: 87px;
  width: 291px;
  background-repeat: no-repeat;
  background-position: 0 center;
  background-color: rgba(0, 0, 0, 0);
  background-image: url(https://img.alicdn.com/tfs/TB1AnTXewMPMeJjy1XcXXXpppXa-290-87.png);
  z-index: 99;
}
.tab-title {
  margin-top: 16px;
  font-size: 18px;
  line-height: 20px;
}
.title-wrap .tab-item-title {
  margin-left: 8px;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
}
.title-wrap {
  margin-left: 26px;
  margin-top: 8px;
  vertical-align: middle !important;
}
a {
  color: #000;
}
.item-img {
  float: right;
  margin-top: 10px;
  margin-right: 30px;
  width: 200px;
  height: 200px;
}
.right-detail .tab-desp {
  margin-left: 26px;
  font-size: 20px;
  letter-spacing: 1px;
}
.color-type-green .grid .sub-title,
.color-type-green .tab-item-title {
  color: #00b262;
}
.right-detail-a {
  height: 225px;
  background: #fff;
  width: 462px;
  display: block;
}
</style>