<template>
  <div id="container-full">
    <section class="home-container">
      <swiper
        class="swiper-container"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :navigation="true"
        :modules="mods"
      >
        <swiper-slide
          :style="{
            'background-image': 'url(/images/index_banner.gif)',
          }"
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
        <!-- <swiper-slide
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
        </swiper-slide> -->
      </swiper>
      <i class="icon_arrow iconfont icon-shubiao"   @click="go('#section1')" ></i>
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
        <div class="page_title wow fadeInUp">
          提供覆盖<span>「 环保行业 」</span>各类场景的解决方案
        </div>
        <div class="index_solution_type flex wrap">
          <div class="solution_menu col-md-12 col-sm-12 wow fadeInLeft">
            <ul class="flex column center">
              <div class="name">解决方案</div>
              <li :class="{ current: solutNum == 1 }" @click="solutClick(1)">
                <div class="item_name">
                  <img src="~/assets/images/ico_anli_qzx.png" /><span
                    >轻咨询</span
                  >
                </div>
                <i>>></i>
              </li>
              <li :class="{ current: solutNum == 2 }" @click="solutClick(2)">
                <div class="item_name">
                  <img src="~/assets/images/ico_anli_data.png" /><span
                    >AnewData</span
                  >
                </div>
                <i>>></i>
              </li>
              <li :class="{ current: solutNum == 3 }" @click="solutClick(3)">
                <div class="item_name">
                  <img src="~/assets/images/ico_anli_zouh.png" /><span
                    >移动走航</span
                  >
                </div>
                <i>>></i>
              </li>
              <li :class="{ current: solutNum == 4 }" @click="solutClick(4)">
                <div class="item_name">
                  <img src="~/assets/images/ico_anli_yuanqu.png" /><span
                    >智慧园区</span
                  >
                </div>
                <i>>></i>
              </li>
            </ul>
          </div>
          <div class="solution_introduction col-md-12 wow fadeInRight">
            <!--轻咨询-->
            <div
              :class="[
                'solution_introduction_detial',
                'solut_detail1',
                { current: solutNum == 1 },
              ]"
            >
              <h1 class="wow fadeInLeft">空气质量改善轻咨询服务解决方案</h1>
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
            <!--AnewData-->
            <div
              :class="[
                'solution_introduction_detial',
                'solut_detail2',
                { 'current wow fadeInRight': solutNum == 2 },
              ]"
            >
              <h1 class="wow fadeInLeft" data-wow-infinite="true">AnewData</h1>
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
            <!--移动走航-->
            <div
              :class="[
                'solution_introduction_detial',
                'solut_detail3',
                { current: solutNum == 3 },
              ]"
            >
              <h1 class="wow fadeInLeft">移动走航</h1>
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
            <!--智慧园区-->
            <div
              :class="[
                'solution_introduction_detial',
                'solut_detail4',
                { current: solutNum == 4 },
              ]"
            >
              <h1 class="wow fadeInLeft">智慧园区</h1>
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
      <div class="wow fadeInUp">
        <div class="page_title">客户案例</div>
        <swiper
          class="case_swiper_container"
          :autoplay="{ delay: 0, disableOnInteraction: false }"
          :modules="mods"
          :speed="20000"
          :breakpoints="breakpoints"
          :loop="true"
          :navigation="true"
          :spaceBetween="30"
          :observer="true"
          :observeparents="true"
        >
          <swiper-slide key="1">
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip">
                    <span>走航溯源</span><button>AnewAir</button>
                  </div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="2">
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip">
                    <span>走航溯源</span><button>AnewAir</button>
                  </div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="3">
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip">
                    <span>走航溯源</span><button>AnewAir</button>
                  </div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="4">
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip">
                    <span>走航溯源</span><button>AnewAir</button>
                  </div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="5">
            <div class="case_container">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip">
                    <span>走航溯源</span><button>AnewAir</button>
                  </div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="seciton about" id="section7">
      <div class="container">
        <div class="page_title wow fadeInUp">认识新禾</div>
        <div class="about_tip wow fadeInUp">
          新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS,新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS,新禾数字科技是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS
        </div>
      </div>
      <PageAbout />
    </section>
    <PageHonor />
    <section class="seciton f_banner" id="section9">
      <div class="container">
        <h2 class="wow fadeInDown">免费使用智能算法工具 - 禾气云AnewEITM</h2>
        <p class="wow fadeInDown">
          即将发布新品，开放<span>免费使用</span>，敬请期待！
        </p>
        <div class="btn_more btn_gradient wow fadeInDown">
          <span>立即试用</span>
        </div>
      </div>
    </section>
    <footer></footer>
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
/** 断点 */
let breakpoints = ref(null);
breakpoints.value = {
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 3,
    spaceBetween: 20,
  },
  900: {
    //当屏幕宽度大于等于1280
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const solutNum = ref(1);


const go=(selector)=>{
      document.querySelector(selector).scrollIntoView({
        // 不想要滚动动画,则设置为"instant"
        behavior: 'smooth', // 滚动动画
        block: 'center'
      });
    }

// 解决方案点击
const solutClick = (index) => {
  solutNum.value = index;
};
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
.home-container {
  position: relative;
}
.icon_arrow {
  font-size: 70px;
  color: #fff;
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  // transition:jump  0.5s;
  animation-name: jump;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  cursor: pointer;
}
@keyframes jump {
  0% {
    transform: translateY(0);
    /* 最初位置 */
  }
  50% {
    transform: translateY(-10px);
    /* 上跳的位置 */
  }
  100% {
    transform: translateY(0);
    /* 回到最初位置 */
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
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
  background-size: cover;
}

//solution
.solution {
  background: url(~/assets/images/bg_solution.jpg) no-repeat center center;
  padding: 80px 0;
  background-size: cover;
  .page_title {
    margin-top: 0;
  }
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
          justify-content: space-between;
          align-items: center;
          font-size: 18px;
          font-weight: 500;
          list-style: none;
          color: #1f2429;
          cursor: pointer;
          line-height: 68px;
          margin-top: 24px;
          padding: 0 16px;
          transition: all 0.5s linear;
          -webkit-transition: all 0.5s linear;
          .item_name {
            display: flex;
            align-items: center;
            img {
              margin-right: 8px;
              flex-shrink: 0;
            }
          }
          i {
            opacity: 0;
            transition: all 0.5s;
          }

          &.current,
          &:hover {
            border: 2px solid rgba(2, 199, 181, 0.28);
            box-shadow: 0px 2px 14px 0px rgba(2, 199, 181, 0.24);
            color: #02c7b5;
            i {
              opacity: 1;
            }
          }
        }
      }
    }
    .solution_introduction {
      width: 67%;
      backdrop-filter: blur(30px);

      border-radius: 8px;
      overflow: hidden;
      .solution_introduction_detial {
        background: rgba(255, 255, 255, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.8);
        padding: 80px;
        height: 100%;
        position: absolute;
        left: 200%;
        top: 0;

        transition: all 0.5s linear;
        -webkit-transition: all 0.5s linear;

        &::after {
          content: "";
          width: 200px;
          height: 180px;
          display: block;
          position: absolute;
          bottom: 20px;
          right: 20px;
          transition: all 0.3s ease-in-out;
        }
        &:nth-child(1) {
          &::after {
            background: url("~/assets/images/icon_qzx.png") no-repeat center
              center;
          }
        }
        &:nth-child(2) {
          &::after {
            background: url("~/assets/images/icon_data.png") no-repeat center
              center;
          }
        }
        &:nth-child(3) {
          &::after {
            background: url("~/assets/images/icon_zouh.png") no-repeat center
              center;
          }
        }
        &:nth-child(4) {
          &::after {
            background: url("~/assets/images/icon_yuanq.png") no-repeat center
              center;
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
        &.current {
          left: 0;
        }
        &:hover {
          box-shadow: 8px 8px 20px 0 rgb(55 99 170 / 20%), -8px -8px 20px 0 #fff;
          transform: translateY(-3px);
          &::after {
            transform: scale(1.15);
          }
        }
      }
    }
  }
}

//case

// about
.about {
  background: #e5edf3;
  overflow: hidden;
  .about_tip {
    color: #1f2429;
    text-align: left;
    font-size: 18px;
    line-height: 46px;
    margin-bottom: 60px;
  }
}

.f_banner {
  background: url("~/assets/images/f-banner2.jpg") no-repeat center center;
  padding: 10px;
  background-size: cover;
}

@media (min-width: 992px) {
  .about {
    margin-top: 60px;
  }
}

@media (max-width: 990px) {
  .air,
  .ei {
    margin: 30px 0;
  }
  .solution {
    .index_solution_type {
      .solution_menu {
        padding: 15px;
      }
      .solution_introduction {
        .solution_introduction_detial {
          padding: 15px;
        }
      }
    }
  }
  .case {
    .page_title {
      margin: 60px 0 30px;
    }
    .case_swiper_container {
      .swiper-slide {
        .case_container {
          .des {
            .bom {
              span {
                font-size: 14px;
                padding-right: 10px;
                margin-right: 10px;
              }
              button {
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 750px) {
  .solution {
    .index_solution_type {
      .solution_menu {
        width: 100%;
        margin-bottom: 30px;
        .name {
          display: none;
        }
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            width: 50%;
          }
        }
      }
      .solution_introduction {
        width: 100%;

        .solution_introduction_detial {
          padding: 30px;
        }
      }
    }
  }
  .about {
    .about_tip {
      margin-bottom: 50px;
    }
  }
}

.f_banner {
  margin-top: 80px;
  padding: 90px 0;
  h2 {
    font-weight: bold;
    color: #1f2429;
    font-size: 40px;
  }
  p {
    color: #637381;
    font-size: 18px;
    span {
      color: #1ab7a9;
    }
  }
  .btn_gradient {
    margin-top: 40px;
  }
}
</style>
<style lang="less" >
.case_swiper_container {
  padding: 30px 0 100px;
  .swiper-slide {
    background: #fff;
    -webkit-box-shadow: 0px 2px 20px 0px rgba(54, 62, 69, 0.09);
    box-shadow: 0px 2px 20px 0px rgba(54, 62, 69, 0.09);
    cursor: pointer;
    height: 100%;
    margin-right: 32px;
    -webkit-transition: -webkit-transform 0.3s linear;
    transition: -webkit-transform 0.3s linear;
    transition: transform 0.3s linear;
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;
    border: 2px solid rgba(99, 115, 129, 0.1);
    border-radius: 8px;
    width: 376px;
    .case_container {
      .img {
        border-radius: 8px 8px 0px 0px;
        img {
          border-radius: 8px 8px 0px 0px;
        }
      }
      .des {
        padding: 20px;
        text-align: left;
        .name {
          font-size: 20px;
          font-weight: bold;
          color: #000414;
          height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p {
          margin-top: 8px;
          font-size: 14px;
          font-weight: 400;
          color: #637381;
        }
        .bom {
          border-top: 1px solid #f0f4f7;
          padding-top: 20px;
          margin-top: 20px;
          span {
            color: #1f2429;
            font-size: 16px;
            padding-right: 16px;
            border-right: 1px solid #ebf0f5;
            margin-right: 16px;
          }
          button {
            height: 28px;
            background: #f5f8fa;
            border-radius: 4px;
            padding: 0 14px;
            color: #637381;
          }
          a {
            color: #02c7b5;
            border-radius: 2px;
            width: 70px;
            text-align: center;
            // line-height: 100%;
          }
        }
      }
    }
    &:hover {
      -webkit-box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      -webkit-transform: translateY(-16px);
      transform: translateY(-16px);
      cursor: pointer;
      a {
        background: #02c7b5;
        color: #fff !important;
      }
    }
  }
  .swiper-button-prev {
    width: 46px !important;
    height: 46px;
    background: #ffffff;
    border: 1px solid rgba(99, 115, 129, 0.1);
    border-radius: 50%;
  }
}
.case_swiper_container {
  .swiper-button-prev,
  .swiper-button-next {
    width: 46px;
    height: 46px;
    background: #ffffff;
    border: 1px solid rgba(99, 115, 129, 0.1);
    border-radius: 50%;
    color: #b3bdc7;
    top: auto;
    bottom: 10px;
    &::after {
      font-size: 20px;
    }
    &:hover {
      border: 1px solid rgba(2, 199, 181, 0.2);
      color: #02c7b5;
      -webkit-box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
      &::after {
        font-size: 25px;
        -webkit-transition: font-size 0.5s ease;
        transition: font-size 0.5s ease;
      }
    }
  }
  .swiper-button-prev {
    left: 50%;
    transform: translateX(-50%);
    margin-left: -35px;
  }
  .swiper-button-next {
    right: 50%;
    transform: translateX(50%);
    margin-right: -35px;
  }
}
</style>