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
          <div class="des">扫描二维码留下您的信息 <br />稍后会有专人联系您</div>
        </div>
        <div class="card-item">
          <div class="title">在线客服</div>
          <img src="~/assets/images/contactUs/qr-2.png" />
          <div class="des">扫描二维码<br />联系在线客服</div>
        </div>
        <div class="card-item">
          <div class="title">新禾数科</div>
          <img src="~/assets/images/contactUs/qr-3.png" />
          <div class="des">扫描二维码<br />关注公众号</div>
        </div>
        <div class="card-item">
          <div class="title">加入我们</div>
          <img src="~/assets/images/contactUs/qr-1.png" />
          <div class="des">扫描二维码<br />联系招聘人员</div>
        </div>
      </div>
    </section>
    <section class="map">
      <div class="container">
        <h2>公司地址</h2>
        <div class="address">地址：无锡市经济开发区金融八街8号联合金融大厦</div>
        <div id="mapContainer"></div>
      </div>
    </section>
  </div>
</template>
<script setup>
let map = null;
useHead({
  title: '联系我们',
  // script: [
  //   {
  //     type: 'text/javascript',
  //     src: 'https://webapi.amap.com/maps?v=2.0&key=b93046e346afb688ccb7e8161e76f66a',
  //     body: true,
  //   },
  // ],
});
const initMap = () => {
  var infoWindow;
  map = new AMap.Map('mapContainer', {
    resizeEnable: true,
    center: [120.302773, 31.481962],
    zoom: 14.5,
  });

  var info = [];
  info.push('<div style="padding:10px 0 0 0;"><h4>新禾数字科技（无锡）有限公司</h4>');
  info.push('<p style="padding:10px 0 0 0;">电话 : 18912483668   邮编 : 214000</p>');
  info.push('<p style="padding:10px 0;">地址 :无锡市经济开发区金融八街8号<br>联合金融大厦第19层</p></div></div>');

  infoWindow = new AMap.InfoWindow({
    content: info.join(''), //使用默认信息窗体框样式，显示信息内容
  });
  console.log(map.getCenter());
  infoWindow.open(map, new AMap.LngLat(120.308691, 31.478311));
};
onMounted(() => {
  initMap();
});
onBeforeUnmount(() => {
  map && map.destroy();
});
</script>
<style lang="less" scoped>
#mapContainer {
  width: 100%;
  height: 570px;
  margin-bottom: 72px;
  background: #7cdad3;
  border-radius: 2px;
}
.map {
  background: #f7fafe;
  overflow: hidden;
  h2 {
    text-align: center;
    padding: 70px 0 50px 0;
    font-size: 34px;
    font-weight: 500;
    position: relative;
    &::after {
      content: '';
      bottom: 22px;
      left: 50%;
      margin-left: -66px;
      position: absolute;
      width: 134px;
      height: 4px;
      background: #7cdad3;
      border-radius: 2px;
    }
  }
  .address {
    font-size: 20px;
    color: #363e45;
    margin-bottom: 44px;
    text-align: center;
  }
}
.banner {
  width: 100%;
  height: 480px;
  background: url('~/assets/images/contactUs/banner.png') no-repeat center center;
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
  background: #ffffff;
  border: 1px solid rgba(99, 115, 129, 0.2);
  box-shadow: 0px 10px 19px 0px rgba(2, 199, 181, 0.14);
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
