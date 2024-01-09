<template>
  <div id="container-full">
    <section class="home-container">
      <swiper class="swiper-container" :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="mods">
        <swiper-slide
          :style="{
            'background-image': 'url(/images/index_banner.gif)',
          }"
        >
          <div class="posBg"></div>
          <div class="bannerwen color_white wow zoomIn absolute" data-wow-delay=".1s" data-wow-duration="2s">
            <p>用AIoT和SaaS推动环保行业数字化变革</p>
            <span>已稳定服务近百家生态环境局、监测中心、工业园区、大气管控服务商、<br />运维商等政府、企业客户</span>
            <div class="statis">
              <h2 class="count"><count-to :end="1896" /></h2>
              <span class="count-txt">用户使用次数</span>
            </div>
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
      <i class="icon_arrow iconfont icon-shubiao" @click="go('#section1')"></i>
    </section>
    <section class="section anewMap" id="section1">
      <div class="container flex wrap">
        <div class="img-intor col-lg-8 col-md-12 wow fadeInLeft">
          <img src="~/assets/images/pic_map.png" />
        </div>
        <div class="intor col-lg-4 col-md-12 wow fadeInRight">
          <h2>空气质量改善服务智能云平台-AnewMap™</h2>
          <p>我们服务于</p>
          <h3><i class="iconfont icon-youliangtian"></i>空气质量改善第三方服务商</h3>
          <div class="txt">
            AnewMap™3.0是专门为第三方服务厂商量身定做的，依托新禾团队十数年的行业经验，实现了数智化决策模型与业务场景的深度融合，超越经验系统，提升决策效率，降低决策成本，以全新的认知能力，赋能平台助您更智能地处理复杂业务。AnewMap™3.0助力您跻身中国一流环境服务商，真正为您实现“省钱、省心、真智能”！
          </div>
          <a class="btn_more"><span @click="router.push('/anewMap')">了解更多 >></span></a>
        </div>
      </div>
    </section>
    <section class="section air" id="section2">
      <div class="container flex wrap">
        <div class="intor col-lg-3 col-md-12 wow fadeInLeft">
          <div style="width: max-content">
            <img align="left" class="intor-logo" src="~/assets/images/map/air_logo1.png" />
            <span class="intor-title p-l-2">大气污染智能管控<br />终端-AnewAir™</span>
          </div>
          <p>我们服务于</p>
          <h3><i class="iconfont icon-zhengfuguanlizhe"></i>政府部门环境管理者</h3>
          <div class="txt">
            帮助管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方案并动态实施评估管控效果等。其开箱即用，持续更新等特性，更使其成为您常用常新的贴身数字化助手！
          </div>
          <a class="btn_more color_white"><span @click="router.push('/anewAir')">了解更多 >></span></a>
        </div>
        <div class="img-intor col-lg-9 col-md-12 wow flipInX" data-wow-infinite="true">
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
          <h2>园区精细化管理及预警平台-AnewCIP™</h2>
          <p>我们服务于</p>
          <h3><i class="iconfont icon-yuanqugailan"></i>工业园区及企业客户</h3>
          <div class="txt">
            实现园区有毒有害及恶臭异味态势感知、预警监控、污染研判、企业分级、应急指挥等，助力园区以最小的管理成本实现环境管理与企业经济协同发展，助力您打造国家级零碳园区、绿色园区！
          </div>
          <a class="btn_more"><span @click="router.push('/anewCip')">了解更多 >></span></a>
        </div>
      </div>
    </section>
    <section class="section ei" id="section4">
      <div class="container flex wrap">
        <div class="intor col-lg-4 col-md-12 wow fadeInLeft">
          <div style="width: max-content">
            <img align="left" class="intor-logo" src="~/assets/images/map/ei_logo1.png" />
            <span class="intor-title p-l-2">禾气云-AnewEI™</span>
          </div>
          <p>我们服务于</p>
          <h3><i class="iconfont icon-huanbaocongyerenyuan"></i>大气环保行业专业人员</h3>
          <div class="txt">
            禾气云在GPT时代，运用大数据、人工智能的方法帮助每一位大气环保专业人员了解数据、应用算法，让环境数据分析更简单，降低技术人员使用门槛，聚焦问题、解决问题，提供一系列大气环保领域内的小而精的解决方案！
          </div>
          <a class="btn_more" href="https://work.weixin.qq.com/kfid/kfcb9bde46a45113692" target="_blank"><span>即将发布，点此预约 >></span> </a>
        </div>
        <div class="img-intor col-lg-8 col-md-12 wow fadeInRight">
          <img src="~/assets/images/pic_ei.png" />
        </div>
      </div>
    </section>
    <section class="seciton solution" id="section5">
      <div class="container">
        <div class="page_title font40 wow fadeInUp">提供覆盖<span>「 环保行业 」</span>各类场景的解决方案</div>
        <div class="index_solution_type flex wrap">
          <div class="solution_menu col-md-12 col-sm-12 wow fadeInLeft">
            <ul class="flex column center">
              <div class="name">解决方案</div>
              <li :class="{ current: solutNum == 1 }" @click="solutClick(1)">
                <div class="item_name"><img src="~/assets/images/ico_anli_qzx.png" /><span>轻咨询服务</span></div>
                <img src="~/assets/images/tableq.png" class="tableq" />
                <!-- <i>>></i> -->
              </li>
              <li :class="{ current: solutNum == 2 }" @click="solutClick(2)">
                <div class="item_name"><img src="~/assets/images/ico_anli_data.png" /><span>大气大数据平台</span></div>
                <img src="~/assets/images/tableq.png" class="tableq" />
              </li>
              <li :class="{ current: solutNum == 3 }" @click="solutClick(3)">
                <div class="item_name"><img src="~/assets/images/ico_anli_zouh.png" /><span>走航溯源</span></div>
                <img src="~/assets/images/tableq.png" class="tableq" />
              </li>
              <li :class="{ current: solutNum == 4 }" @click="solutClick(4)">
                <div class="item_name"><img src="~/assets/images/ico_anli_yuanqu.png" /><span>园区监管</span></div>
                <img src="~/assets/images/tableq.png" class="tableq" />
              </li>
            </ul>
          </div>
          <div class="solution_introduction col-md-12 wow fadeInRight">
            <!--轻咨询-->
            <div :class="['solution_introduction_detial', 'solut_detail1', { current: solutNum == 1 }]">
              <h1 class="">空气质量改善轻咨询服务解决方案</h1>
              <p>
                在空气质量持续改善的时代背景下，城市环境管理者面临经济增长与空气质量达标的双重压力。传统的劳动密集型服务难以满足环境管理者日益提升的精准治污、科学治污需求，以标准化机制、数字化平台、智能化算法、指标化评估为核心的轻咨询服务，为您提供了更高性价比的解决方案，让您能够体验更专业、更高效、更管用的新一代空气质量改善服务！
              </p>
              <div class="key_box">
                <ul class="flex">
                  <li><i class="iconfont icon-biaozhunhuajizhi"></i>标准化机制</li>
                  <li><i class="iconfont icon-shuzihuapingtai"></i>数字化平台</li>
                  <li><i class="iconfont icon-zhinenghuasuanfa"></i>智能化算法</li>
                  <li><i class="iconfont icon-zhibiaopinggu"></i>指标化评估</li>
                </ul>
              </div>
            </div>
            <!--AnewData-->
            <div :class="['solution_introduction_detial', 'solut_detail2', { current: solutNum == 2 }]">
              <h1 class="">城市（区县）大气大数据平台解决方案</h1>
              <p>
                为加强城市空气质量达标管理，生态环境部门建设了众多业务系统，从而也形成了众多的业务孤岛、数据烟囱，随着生态环境数字化转型的不断深入，数据融合、业务闭环的要求越来越迫切，新禾大气大数据平台解决方案，结合十数年的城市大气管理业务经验，通过最新的云计算、大数据及人工智能技术，有效联通业务系统、打通数据孤岛，实现城市（区县）大气大数据的数字孪生应用！
              </p>
              <div class="key_box">
                <ul class="flex">
                  <li><i class="iconfont icon-shujuronghe"></i>数据融合</li>
                  <li><i class="iconfont icon-guanlibihuan"></i>业务闭环</li>
                  <li><i class="iconfont icon-guanligaoxiao"></i>管理高效</li>
                  <li><i class="iconfont icon-shuziluansheng"></i>数字孪生</li>
                </ul>
              </div>
            </div>
            <!--移动走航-->
            <div :class="['solution_introduction_detial', 'solut_detail3', { current: solutNum == 3 }]">
              <h1 class="">移动走航与溯源评估数字化解决方案</h1>
              <p>
                近年来，走航监测作为颗粒物及臭氧污染排查的重要手段，得到广泛应用，但传统的走航监测仅能识别高值、生成简单走航报告，难以满足精准溯源及评估污染贡献占比等精准、量化的管控需求。新禾结合走航监测数据、气象数据、污染源清单、源谱库数据等，应用机器学习算法及环境模型，实现了科学规划走航路线，智能识别异常点、生成疑似污染源清单、定量评估污染贡献占比，助您构建数字化精准走航溯源创新应用！
              </p>
              <div class="key_box">
                <ul class="flex">
                  <li><i class="iconfont icon-yuanpushibie"></i>源谱识别</li>
                  <li><i class="iconfont icon-jingzhunsuyuan"></i>精准溯源</li>
                  <li><i class="iconfont icon-zhibiaopinggu"></i>定量评估</li>
                  <li><i class="iconfont icon-guanlibihuan"></i>管理闭环</li>
                </ul>
              </div>
            </div>
            <!--智慧园区-->
            <div :class="['solution_introduction_detial', 'solut_detail4', { current: solutNum == 4 }]">
              <h1 class="">智慧园区精细化监管及风险预警解决方案</h1>
              <p>
                目前，工业园区快速发展过程中带来的安全风险大、环境影响大等问题越来越突出，新禾智慧园区精细化监管及风险预警解决方案助您建立“日常不扰、无据不查、轻微不罚”的园区非现场监管模式，减少对企业现场检查，在保障生态环境的前提下持续推动企业良性发展，最终助您打造国家级安全园区、绿色园区、零碳园区！
              </p>
              <div class="key_box">
                <ul class="flex">
                  <li><i class="iconfont icon-fengxianyujing"></i>风险预警</li>
                  <li><i class="iconfont icon-yiweisuyuan"></i>异味溯源</li>
                  <li><i class="iconfont icon-lvseyuanqu"></i>绿色园区</li>
                  <li><i class="iconfont icon-jingjifazhan"></i>经济发展</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section case" id="section6">
      <div class="wow fadeInUp">
        <div class="page_title font40">客户案例</div>
        <swiper
          class="case_swiper_container"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :modules="mods"
          :speed="2000"
          :breakpoints="breakpoints"
          :navigation="true"
          :spaceBetween="30"
          :observer="true"
          :observeparents="true"
        >
          <swiper-slide key="1">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/wGnkvnSP1z4X9Fte4CpB4A')">
              <div class="img"><img src="~/assets/images/img1.jpg" /></div>
              <div class="des">
                <div class="name">数据推送</div>
                <p>员工省力，老板省心！全新数据推送等你解锁</p>
                <div class="bom flex between">
                  <div class="tip"><span>数据推送</span><button>AnewMap</button></div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="2">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/o-JZc7Lqx8SthMquQHUBSw')">
              <div class="img"><img src="~/assets/images/img2.jpg" /></div>
              <div class="des">
                <div class="name">Q市生态环境局</div>
                <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
                <div class="bom flex between">
                  <div class="tip"><span>事件调度</span><button>AnewMap</button></div>
                  <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/o-JZc7Lqx8SthMquQHUBSw')">详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="3">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/fMa6C0Gm7hztaq3D-YDz1Q')">
              <div class="img"><img src="~/assets/images/img3.jpg" /></div>
              <div class="des">
                <div class="name">大气走航精准溯源</div>
                <p>数字赋能走航溯源，重塑精准监管流程</p>
                <div class="bom flex between">
                  <div class="tip"><span>走航溯源</span><button>AnewAir</button></div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="4">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/Vak1MyGofmQtot2BGuS_WQ')">
              <div class="img"><img src="~/assets/images/img4.jpg" /></div>
              <div class="des">
                <div class="name">华南某市生态环境局</div>
                <p>颗粒物浓度连续三年下降，看看工地分级是怎么做到的</p>
                <div class="bom flex between">
                  <div class="tip"><span>工地分级</span><button>AnewMap</button></div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="5">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/2K9lLn9KqYXULXJuMB4t4Q')">
              <div class="img"><img src="~/assets/images/img5.jpg" /></div>
              <div class="des">
                <div class="name">空气质量智能预报</div>
                <p>智能预报、人工订正、微信推送...AnewMap™3.0打造空气质量预报新范式</p>
                <div class="bom flex between">
                  <div class="tip"><span>智能预报</span><button>AnewMap</button></div>
                  <a>详情></a>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide key="6">
            <div class="case_container" @click="jumpCaseDetail('https://mp.weixin.qq.com/s/MemL6mXoOUlRjZLw3IlbZQ')">
              <div class="img"><img src="~/assets/images/img6.png" /></div>
              <div class="des">
                <div class="name">污染源管控</div>
                <p>助力精准监管污染源，有效控制重污染天在1%以内</p>
                <div class="bom flex between">
                  <div class="tip"><span>污染源管控</span><button>AnewAir</button></div>
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
          新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS推动环保行业数字化变革，以SaaS方式提供端到端的软件及咨询服务，以订阅形成低成本、高质量、可持续交付，用AIoT收集最广泛的行业运行数据，将行业业务场景与物联网、大数据、AI技术深度融合，形成管用的行业数字化解决方案。
        </div>
      </div>
      <PageAbout />
    </section>
    <PageHonor />
    <section class="seciton f_banner" id="section9">
      <div class="container">
        <h2 class="wow fadeInDown">
          免费试用空气质量改善服务智能云平台<br />
          - AnewMap™
        </h2>
        <p class="wow fadeInDown">新品发布，抢先<span>免费试用</span></p>
        <div class="btn_more btn_gradient">
          <span @click="handleTrial">立即试用</span>
        </div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
const mods = ref([Autoplay, Pagination, Navigation, EffectFade]);
const router = useRouter();
const showVideo = ref(false);
useHead({
  // 外部引入js
  script: [
    {
      // type: "text/javascript",
      src: '/js/wow.min.js',
      body: true,
    },
  ],
});
const handleTrial = () => jumpWechat();
const jumpCaseDetail = (url) => {
  window.open(url, '_blank');
};
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

const go = (selector) => {
  document.querySelector(selector).scrollIntoView({
    // 不想要滚动动画,则设置为"instant"
    behavior: 'smooth', // 滚动动画
    block: 'center',
  });
};

// 解决方案点击
const solutClick = (index) => {
  solutNum.value = index;
};
onMounted(() => {
  // console.dir(res)
  // new WOW().init()
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();
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
  bottom: 0px;
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
        line-height: 25px;
      }
      // 统计
      .statis {
        padding-top: 80px;
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 9px;
        .count {
          font-size: 60px;
          font-weight: 400;
          color: #ffffff;
        }
        .count-txt {
          font-size: 16px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
        }
      }
    }
  }
}
.anewMap {
  margin-top: 50px;
}
// 产品介绍
.intor {
  h2 {
    font-size: 40px;
    color: #1f2429;
    line-height: 45px;
    font-weight: bold;
  }
  &-title {
    font-size: 40px;
    color: #1f2429;
  }
  &-logo {
    margin-top: 8px;
    padding-right: 10px;
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
      content: '';
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
  .intor-title {
    font-weight: bold;
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
  background: url('~/assets/images/bg_air.png') no-repeat center center;
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
          font-weight: bold;
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
          .tableq {
            opacity: 0;
            transition: all 0.5s;
          }

          &.current {
            border: 2px solid rgba(2, 199, 181, 0.28);
            box-shadow: 0px 2px 14px 0px rgba(2, 199, 181, 0.24);
            color: #02c7b5;
            .tableq {
              opacity: 1;
            }
          }
          &:hover {
            border: 2px solid rgba(2, 199, 181, 0.28);
            box-shadow: 0px 2px 14px 0px rgba(2, 199, 181, 0.24);
            .tableq {
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
        transition: all 0.5s linear;
        -webkit-transition: all 0.5s linear;
        display: none;

        &::after {
          content: '';
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
            background: url('~/assets/images/icon_qzx.png') no-repeat center center;
          }
        }
        &:nth-child(2) {
          &::after {
            background: url('~/assets/images/icon_data.png') no-repeat center center;
          }
        }
        &:nth-child(3) {
          &::after {
            background: url('~/assets/images/icon_zouh.png') no-repeat center center;
          }
        }
        &:nth-child(4) {
          &::after {
            background: url('~/assets/images/icon_yuanq.png') no-repeat center center;
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
            padding: 2px 13px;
            background: rgba(255, 255, 255, 0.3);
            margin-right: 14px;
            color: #637381;
            font-size: 16px;
            display: flex;
            align-items: center;
            i {
              font-size: 22px;
              color: #12caba;
              margin-right: 10px;
            }
          }
        }
        &.current {
          display: block;
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
  background: #edfaf8;
  overflow: hidden;
  .page_title {
    font-size: 40px;
    font-weight: bold;
  }
  .about_tip {
    color: #1f2429;
    text-align: left;
    font-size: 18px;
    line-height: 46px;
    margin-bottom: 60px;
    text-indent: 2em;
  }
}

.f_banner {
  background: url('~/assets/images/f-banner2.jpg') no-repeat center center;
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
<style lang="less">
.posBg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 4, 20, 0.1) 0%, rgba(0, 4, 20, 0.4) 100%);
}
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
          width: 100%;
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
          height: 50px;
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
        // font-size: 25px;
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
.section .iconfont {
  font-size: 40px;
  color: #02c7b5;
  vertical-align: middle;
}
</style>
