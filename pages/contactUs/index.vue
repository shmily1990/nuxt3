<template>
  <div id="contactUs">
    <section class="banner">
        <!-- <img src="~/assets/images/contactUs/banner.png" /> -->
        <div class="banner-content">
            <div class="title">联系我们</div>
            <div class="sub-title">CONTACT US</div>
        </div>
    </section>
    <section class="container qr-card">
      <div class="cards">
        <div class="card-item">
            <div class="title">商务咨询</div>
            <img src="~/assets/images/contactUs/qr-1.png" />
            <div class="des">
                扫描二维码留下您的信息 <br>稍后会有专人联系您
            </div>
        </div>
        <div class="card-item">
            <div class="title">在线客服</div>
            <img src="~/assets/images/contactUs/qr-2.png" />
            <div class="des">
                扫描二维码<br>联系在线客服
            </div>
        </div>
        <div class="card-item">
            <div class="title">新禾数科</div>
            <img src="~/assets/images/contactUs/qr-3.png" />
            <div class="des">
                扫描二维码<br>关注公众号
            </div>
        </div>
        <div class="card-item">
            <div class="title">加入我们</div>
            <img src="~/assets/images/contactUs/qr-1.png" />
            <div class="des">
                扫描二维码<br>联系招聘人员
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: "联系我们"
});
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 480px;
  background: url("~/assets/images/contactUs/banner.png") no-repeat center
    center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  &-content {
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    // margin-left: -95px;
    // margin-top: -50px;
    .title {
      font-size: 48px;
    }
    .sub-title {
      font-size: 18px;
    }
  }
}
.cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    padding: 70px 0;
}
.card-item {
    flex: 1;
    background: #FFFFFF;
    border: 1px solid rgba(99,115,129,0.2);
    box-shadow: 0px 10px 19px 0px rgba(2,199,181,0.14);
    border-radius: 20px;
    font-family: Source Han Sans SC;
    padding: 20px 0;
    text-align: center;
    img {
        margin: 15px auto;
    }
    .title {
        font-size: 20px;
        font-family: Source Han Sans SC;
        font-weight: 500;
        color: #000414;
    }
    .des {
        font-size: 16px;
        font-family: Source Han Sans SC;
        font-weight: 400;
        color: #637381;
    }
}
</style>