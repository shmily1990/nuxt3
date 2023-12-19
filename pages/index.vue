<template>
  <div id="container-full">
    <section class="home-container">
      <swiper
        class="swiper-container"
        :autoplay="{ delay: 500000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="mods"
      >
        <swiper-slide
          :style="{ 'background-image': 'url(_nuxt/assets/images/banner.jpg)' }"
        >
          <div
            class="bannerwen color_white wow zoomIn"
            data-wow-delay=".1s"
            data-wow-duration="2s"
          >
            <p>用AIoT和SaaS推动环保行业数字化变革</p>
            <span>这里是描述文字 这里是描述文字 这里是描述文字 </span>
          </div>
        </swiper-slide>
        <swiper-slide
          :style="{ 'background-image': 'url(_nuxt/assets/images/banner.jpg)' }"
        >
          <div
            class="bannerwen color_white wow zoomIn"
            data-wow-delay=".1s"
            data-wow-duration="2s"
          >
            <p>用AIoT和SaaS推动环保行业数字化变革</p>
            <span>这里是描述文字 这里是描述文字 这里是描述文字 </span>
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <section class="section anewMap" id="section1">
      <div class="container flex wrap">
        <div class="img-intor col-lg-8 col-md-12 wow fadeInLeft">
          <img src="~/assets/images/pic_map.png" />
        </div>
        <div class="intor col-lg-4 col-md-12 wow fadeInRight">
          <h2>空气质量改善服务智能云平台-AnewMapTM</h2>
          <p>我们服务于</p>
          <h3><i>88</i>大气环境综合服务商</h3>
          <div class="txt">
            为第三方服务厂商量身定做，实现了数智化决策模型与业务场景的深度融合，超越经验系统，提升决策效率，降低决策成本，以全新的认知能力
          </div>
          <a class="btn_more"><span>了解更多 >></span></a>
        </div>
      </div>
    </section>
    <section class="section air" id="section2">
      <div class="container flex wrap">
        <div class="intor col-lg-3 col-md-12 wow fadeInLeft">
          <h2>大气污染智能管控终端-AnewAirTM</h2>
          <p>我们服务于</p>
          <h3><i>88</i>政府环保部门管理者</h3>
          <div class="txt">
            为第三方服务厂商量身定做，实现了数智化决策模型与业务场景的深度融合，超越经验系统，提升决策效率，降低决策成本，以全新的认知能力
          </div>
          <a class="btn_more color_white"><span>了解更多 >></span></a>
        </div>
        <div
          class="img-intor col-lg-9 col-md-12 wow flipInX"
          data-wow-infinite="true"
        >
          <img src="~/assets/images/air-pad.png" />
        </div>
      </div>
    </section>
    <section class="section anewCip" id="section3">
      <div class="container flex wrap">
        <div class="img-intor col-lg-8 col-md-12 wow fadeInLeft">
          <img src="~/assets/images/pic_CIP.png" />
        </div>
        <div class="intor col-lg-4 col-md-12 wow fadeInRight">
          <h2>园区精细化管理及预警平台-AnewCIPTM</h2>
          <p>我们服务于</p>
          <h3><i>88</i>园区及企业客户</h3>
          <div class="txt">
            实现园区有毒有害及恶臭异味态势感知、预警监控、污染研判、企业评价、档案管理、移动互联等场景应用，助力园区以最小的管理成本实现环
          </div>
          <a class="btn_more"><span>了解更多 >></span></a>
        </div>
      </div>
    </section>
    <section class="section ei" id="section4">
      <div class="container flex wrap">
        <div class="intor col-lg-4 col-md-12 wow fadeInLeft">
          <h2>禾气云-AnewEITM</h2>
          <p>我们服务于</p>
          <h3><i>88</i>大气环保行业从业人员</h3>
          <div class="txt">
            这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
          </div>
          <a class="btn_more"><span>即将发布，点此预约 >></span> </a>
        </div>
        <div class="img-intor col-lg-8 col-md-12 wow fadeInRight">
          <img src="~/assets/images/pic_ei.png" />
        </div>
      </div>
    </section>
    <section class="seciton solution" id="section5">
      <div class="container">
        <div class="title">
          提供覆盖<span>「 环保行业 」</span>各类场景的解决方案
        </div>
        <div class="index_solution_type flex wrap">
          <div class="solution_menu col-md-12">
            <ul class="flex column center">
              <div class="name">解决方案</div>
              <li class="">
                <img src="~/assets/images/ico_anli_qzx.png" /><span
                  >轻咨询</span
                >
              </li>
              <li class="">
                <img src="~/assets/images/ico_anli_data.png" /><span
                  >AnewData</span
                >
              </li>
              <li class="">
                <img src="~/assets/images/ico_anli_zouh.png" /><span
                  >移动走航</span
                >
              </li>
              <li class="current">
                <img src="~/assets/images/ico_anli_yuanqu.png" /><span
                  >智慧园区</span
                >
              </li>
            </ul>
          </div>
          <div class="solution_introduction col-md-12">
            <div class="solution_introduction_detial">
              <h1>空气质量改善轻咨询服务解决方案</h1>

              <p>
                随着生态环境治理数字化转型的不断深入，为加强城市大气质量达标管理，环保系统建设了众多孤立的业务系统，传统信息化产品难以支撑新时
                1随着生态环境治理数字化转型的不断深入，为加强城市大气质量达标管理，环保系统建设了众多孤立的业务系统，传统信息化产品难以支撑新时
              </p>
              <div class="key_box">
                <ul class="flex">
                  <li><i></i>关键词</li>
                  <li><i></i>关键词</li>
                  <li><i></i>关键词</li>
                  <li><i></i>关键词</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section case" id="section6">
      <div class="">
        <div class="title">客户案例</div>
        <swiper
          class="case_swiper_container"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :modules="mods"
          :speed="5000"
          :slidesPerView="5"
          :loop="true"
      
        >
          <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img2.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img3.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img4.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
           <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
           <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
           <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
           <swiper-slide>
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="name">大气走航精准溯源</div>
              <div class="des">
                这样做事件交办，办结效率轻松提升30%，整改率高达93%
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
const mods = ref([Autoplay, Pagination, Navigation, EffectFade]);
useHead({
  // 外部引入js
  script: [
    {
      // type: "text/javascript",
      src: "/js/wow.min.js",
      body: true,
    },
  ],
});

onMounted(() => {
  // console.dir(res)
  // new WOW().init()
  var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
  console.log(new WOW(), 1223);
  // let swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 5, // 轮播区域展示的数量
  //     spaceBetween: 30,
  //     mousewheel: true,
  //     keyboard: true,
  //     loop: true, // 循环播放
  //     speed: 2500,
  //     autoplay: { // 自动播放
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     navigation: {
  //         prevEl: ".swiper-button-prev",
  //         nextEl: ".swiper-button-next",
  //     },
  //     // pagination: {
  //     //   el: ".swiper-pagination",
  //     //   clickable: true,
  //     // }
  // });
});
</script>
<style scoped lang="less">
// banner
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .bannerwen {
    p {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: 1.5px;
    }
    span {
      font-size: 16px;
      letter-spacing: 2px;
      line-height: 50px;
    }
  }
}

.title {
  color: #000414;
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;
  span {
    color: #02c7b5;
  }
}
// 产品介绍
.intor {
  h2 {
    font-size: 40px;
    color: #1f2429;
    line-height: 45px;
  }
  p {
    font-size: 14px;
    color: #828f9a;
    margin: 30px 0 0px;
  }
  h3 {
    font-size: 28px;
    color: #1f2429;
    border-bottom: 2px solid #f0f4f7;
    padding: 20px 0;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      border-top: 2px solid #32dbc0;
      width: 10%;
      transition: all 0.3s;
      background: #32dbc0;
      border-radius: 1px;
    }
  }
  .txt {
    font-size: 16px;
    color: #637381;
    margin-top: 23px;
  }
  .btn_more {
    margin-top: 40px;
  }
  &:hover {
    cursor: pointer;
    h3 {
      &::after {
        width: 100%;
      }
    }
  }
}

.air {
  padding: 80px 0;
  background: url("~/assets/images/bg_air.png") no-repeat center center;
}

//solution

.solution {
  background: url(~/assets/images/bg_solution.jpg) no-repeat center center;
  padding: 80px 0;

  .index_solution_type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    .solution_menu {
      width: 30%;
      padding: 30px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.2105rem;
      backdrop-filter: blur(30px);
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 8px;
      .name {
        color: #1f2429;
        font-size: 20px;
        text-align: left;
        width: 100%;
      }
      ul {
        height: 100%;
        padding-inline-start: 0px;
        border-radius: 4px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        li {
          width: 100%;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid #ffffff;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 18px;
          font-weight: 500;
          list-style: none;
          color: #1f2429;
          cursor: pointer;
          line-height: 68px;
          margin-top: 24px;
          padding: 0 16px;
          img {
            margin-right: 8px;
          }
        }
      }
    }
    .solution_introduction {
      width: 67%;
      backdrop-filter: blur(30px);
      background: rgba(255, 255, 255, 0.3);
      border: 2px solid rgba(255, 255, 255, 0.8);
      border-radius: 8px;
      .solution_introduction_detial {
        padding: 80px;
        height: 100%;
        position: relative;
        &:nth-child(1) {
          &::after {
            content: "";
            width: 200px;
            height: 180px;
            background: url("~/assets/images/icon_qzx.png") no-repeat center
              center;
            display: block;
            position: absolute;
            bottom: 20px;
            right: 20px;
          }
        }

        h1 {
          font-size: 34px;
          color: #1f2429;
          font-weight: bold;
        }
        p {
          color: #363e45;
          line-height: 34px;
          font-size: 14px;
          margin: 35px 0;
        }
        .key_box {
          li {
            border: 1px solid #ffffff;
            border-radius: 4px;
            padding: 8px 18px;
            background: rgba(255, 255, 255, 0.3);
            margin-right: 14px;
          }
        }
      }
    }
  }
}

//case
.case_swiper_container {
  .swiper-slide {
    background: #fff;
    border-radius: 8px;
    -webkit-box-shadow: 0 2px 8px 0 rgba(20, 30, 49, 0.1);
    box-shadow: 0 2px 8px 0 rgba(20, 30, 49, 0.1);
    cursor: pointer;
    height: 100%;
    margin-right: 32px;
    -webkit-transition: -webkit-transform 0.3s linear;
    transition: -webkit-transform 0.3s linear;
    transition: transform 0.3s linear;
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;
    width: 376px;
    .case_container {
      .img {
      }
      .title {
        font-size: 20px;
        font-weight: bold;
        color: #000414;
      }
      .des {
        font-size: 14px;
        font-weight: 400;
        color: #637381;
      }
    }
  }
}
</style>