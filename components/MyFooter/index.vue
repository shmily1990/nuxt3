<template>
  <footer class="footer">
    <div class="container wrap">
      <div class="left_col col-lg-8 col-md-8 col-sm-12  col-xm-12">
        <div class="product item">
          <div class="title">产品中心</div>
          <ul class="list">
            <li v-for="(nav, index) in productList" :key="index">
              <nuxt-link :to="nav.link">
                {{ nav.name
                }}<span class="mark-lable">{{ nav.markLable }}</span></nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="case item">
          <div class="title">解决方案与实践案例</div>
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
            <div class="tel">{{ tel }}</div>
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
    </div>
  </footer>
</template>

<script setup>
const productList = ref([
  { name: "AnewEl", link: "/" },
  { name: "AnewMap", link: "/", markLable: "TM" },
  { name: "AnewAir", link: "/product", markLable: "TM" },
  { name: "AnewCip", link: "#", markLable: "TM" },
]);
const caseList = ref([
  { name: "新禾解决方案中心", link: "/example" },
  { name: "新禾案例中心", link: "/news" },
]);
const aboutList = ref([
  { name: "了解新禾", link: "/about" },
  { name: "联系我们", link: "/about" },
]);
const tel = ref("18912483668");
</script>

<style lang="less">
.footer {
  background: #f0f4f7;
  padding: 60px 0;
  // display: flex;
  // justify-content: center;
  .container {
    display: flex;
    .left_col {
      display: flex;
      text-align: left;
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
            a {
              color: #637381;
              font-size: 16px;
             
            }
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
        img{
            margin:0 auto;
        }
      }
    }
  }
}


.page_title {
  color: #000414;
  font-size: 40px;
  text-align: center;
  margin: 70px 0 60px;
  span {
    color: #02c7b5;
  }
}
</style>
