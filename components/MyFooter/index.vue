<template>
  <footer class="footer">
    <div class="container wrap">
      <div class="left_col col-lg-8 col-md-8 col-sm-12 col-xm-12">
        <div class="product item">
          <div class="title">产品中心</div>
          <ul class="list">
            <li v-for="(nav, index) in productList" :key="index">
              <nuxt-link :to="nav.link">
                {{ nav.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="case item">
          <div class="title">解决方案与客户案例</div>
          <ul class="list">
            <li v-for="(nav, index) in caseList" :key="index">
              <nuxt-link :to="nav.link"> {{ nav.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="about item">
          <div class="title">关于新禾</div>
          <ul class="list">
            <li v-for="(nav, index) in aboutList" :key="index">
              <nuxt-link :to="nav.link"> {{ nav.name }}</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="tel item">
          <div class="title">咨询电话</div>
          <ul class="list">
            <div class="work-time">工作日9:00-18:00</div>
            <div class="tel flex"><i class="iconfont icon-zixundianhua" style="font-size: 27px; color: #02c7b5"></i>{{ tel }}</div>
          </ul>
        </div>
      </div>
      <div class="right-col col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <div class="qr">
          <img src="~/assets/images/kefuma2.png" />
          <div>扫描二维码<br />关注新禾公众号</div>
        </div>
        <div class="qr">
          <img src="~/assets/images/kefuma.png" />
          <div>扫描二维码<br />联系在线客服</div>
        </div>
      </div>
      <div class="foot_copyRright flex center pc">
        <a>©2023 新禾数字科技 anew.cloud</a>
        <a href="https://beian.miit.gov.cn" target="_blank">苏ICP备2022033295号-1</a>
        <a>版权所有 新禾数字科技(无锡)有限公司</a>
      </div>
      <div class="foot_copyRright flex center mobile">
        <a>©2023 新禾数字科技<br />anew.cloud</a>
        <a href="https://beian.miit.gov.cn" target="_blank">苏ICP备<br />2022033295号-1</a>
        <a>版权所有<br />新禾数字科技(无锡)有限公司</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const productList = ref([
  { name: 'AnewMap™', link: '/anewMap' },
  { name: 'AnewAir™', link: '/anewAir' },
  { name: 'AnewCIP™', link: '/anewCip' },
]);
const caseList = ref([
  { name: '新禾解决方案中心', link: '/example' },
  { name: '新禾客户案例中心', link: '/case' },
]);
const aboutList = ref([
  { name: '了解新禾', link: '/about' },
  { name: '联系我们', link: '/contactUs' },
]);
const tel = ref('18912483668');
</script>

<style lang="less">
.mobile-kb {
  height: 80px;
  display: none;
}
.footer {
  background: #f0f4f7;
  padding: 60px 0 10px;
  // display: flex;
  // justify-content: center;

  .container {
    display: flex;
    .left_col {
      display: flex;
      text-align: left;
      flex-wrap: wrap;
      .item {
        padding-right: 5%;
        .title {
          color: #000414;
          font-size: 20px;
        }
        .list {
          margin-top: 16px;
          color: #637381;
          font-size: 16px;
          line-height: 30px;
          li {
            margin-bottom: 8px;
            a {
              color: #637381;
              font-size: 16px;
              &:hover {
                color: #02c7b5;
              }
            }
            a:active {
              color: #01abab;
            }
          }
          .work-time {
            margin-bottom: 8px;
          }
        }
      }
    }
    .right-col {
      display: flex;
      .qr {
        width: 50%;
        color: #637381;
        font-size: 14px;
        text-align: center;
        img {
          margin: 0 auto;
        }
      }
    }
    .foot_copyRright {
      width: 100%;
      font-size: 14px;
      margin-top: 60px;
      a {
        color: #9eacb9;
        padding: 0 18px;
        position: relative;
        &::after {
          content: '';
          display: inline-block;
          width: 1px;
          height: 16px;
          background: #9dacb9;
          opacity: 0.2;
          position: absolute;
          right: 0;
        }
        &:last-child {
          &::after {
            display: none;
          }
        }
      }
    }
  }
}

.page_title {
  color: #000414;
  text-align: center;
  margin: 70px 0 60px;
  font-weight: bold;
  span {
    color: #02c7b5;
  }
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      width: 20px;
      height: 4px;
      background: #44a0fc;
      display: inline-block;
      position: relative;
      margin: 0 26px;
      transform: rotate(45deg);
      &::after {
        content: '';
        background: #02c7b5;
        display: block;
        width: 20px;
        height: 4px;
        position: absolute;
        top: 8px;
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
  }
  h3 {
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #637381;
    margin-top: 20px;
  }
}
.mobile {
  display: none;
}
@media (max-width: 750px) {
  .footer {
    .container {
      .left_col {
        flex-wrap: wrap;
        padding-left: 1.2rem;
        .item {
          padding: 0 40px 0 10px;
          .title {
            font-size: 1.15rem;
          }
          .list li a {
            font-size: 0.92rem;
          }
        }
      }
    }
  }
  .mobile {
    display: flex;
  }
  .pc {
    display: none;
  }
  .footer .container .foot_copyRright {
    margin-bottom: 60px;
    justify-content: space-between;
    font-size: 11px;
    padding: 0;
    line-height: 20px;
    a {
      font-size: 12px;
      padding: 0;
      text-align: center;
      &::after {
        right: -12px;
        top: 10px;
      }
    }
  }
}
</style>
