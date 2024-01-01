<template>
  <div class="anewMap">
    <section class="product-head">
      <div class="container">
        <div class="banner">
          <div class="left">
            <div class="name flex"><img src="~/assets/images/map/air_logo1.png" /> AnewAir™</div>
            <div class="platform-name">大气污染智能管控终端</div>
            <div class="platform-description">
              帮助环境管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方案并动态评估管控效果。
            </div>
            <div class="btns flex">
              <div class="btn_parmay btn_parmay_main" @click="jumpWechat">产品咨询<i class="iconfont icon-anniu-jiantou"></i></div>
              <div class="btn_parmay" @click="router.push('/case')">应用案例<i class="iconfont icon-anniu-jiantou"></i></div>
            </div>
          </div>
          <div class="relative videoPic overflow-hidden wow fadeInRight">
            <img src="~/assets/images/map/air_pad.png" />
            <div class="playerBtn" @click="showVideo = true"><i class="iconfont icon-guankanshipin"></i>观看视频</div>
          </div>
        </div>
        <div class="feature-card flex between">
          <div class="feature-item" v-for="(item, index) in list" :key="index">
            <img src="~/assets/images/map/feature-card-01.png" v-if="index === 0" />
            <img src="~/assets/images/map/icon_air_02.png" v-if="index === 1" />
            <img src="~/assets/images/map/icon_air_03.png" v-if="index === 2" />
            <img src="~/assets/images/map/icon_air_04.png" v-if="index === 3" />
            <img src="~/assets/images/map/icon_air_05.png" v-if="index === 4" />
            <img src="~/assets/images/map/icon_air_06.png" v-if="index === 5" />
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page container">
      <div class="page_title font40">
        <h2><i></i>核心优势<i></i></h2>
      </div>
      <div class="page-content">
        <div class="info flex">
          <div class="info-col-left">
            <div>
              <h3>数据孤岛，业务壁垒</h3>
              <p>业务系统林立，信息无法打通</p>
            </div>
            <div>
              <h3>感知局限，交互复杂</h3>
              <p>无法实时感知，用户体验欠佳</p>
            </div>
          </div>

          <div class="info-col-mid">
            <div class="item-mid">
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_left.png" />
              </div>
              <div class="name-nav">
                <span><i>业务</i></span>
              </div>
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_right.png" />
              </div>
            </div>
            <div class="item-mid">
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_left.png" />
              </div>
              <div class="name-nav">
                <span><i>产品</i></span>
              </div>
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_right.png" />
              </div>
            </div>
          </div>

          <div class="info-col-right">
            <div>
              <h3>场景闭环，真正管用</h3>
              <p>聚焦高频、高价值业务场景，更落地</p>
            </div>
            <div>
              <h3>掌上办公，一触即达</h3>
              <p>移动式体验，领导关注随处分享</p>
            </div>
          </div>
        </div>

        <img src="~/assets/images/map/air_vs.png" />
        <div class="info flex">
          <div class="info-col-left">
            <div>
              <h3>周期难控，成本高昂</h3>
              <p>采购流程复杂，实施周期漫长</p>
            </div>
            <div>
              <h3>运维为主，升级困难</h3>
              <p>售后体验一般，项目验收即结束</p>
            </div>
          </div>

          <div class="info-col-mid">
            <div class="item-mid">
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_left.png" />
              </div>
              <div class="name-nav">
                <span><i>交付</i></span>
              </div>
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_right.png" />
              </div>
            </div>
            <div class="item-mid">
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_left.png" />
              </div>
              <div class="name-nav">
                <span><i>服务</i></span>
              </div>
              <div class="info-col-line">
                <img src="~/assets/images/map/map_ys_right.png" />
              </div>
            </div>
          </div>

          <div class="info-col-right">
            <div>
              <h3>无需部署，开箱即用</h3>
              <p>采购路径短，产品快速交付</p>
            </div>
            <div>
              <h3>客户成功，专业咨询</h3>
              <p>以客户为中心，持续运营，协同共创</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page scene">
      <div class="page_title font40">
        <h2><i></i>三大场景<i></i></h2>
      </div>
      <div class="page-content container">
        <div class="screen-item">
          <div class="screen-head flex">
            <div class="order">01</div>
            <div class="screen-des flex">
              <div class="screen-title">日常场景</div>
              <div class="audio"><img src="~/assets/images/xs_img1.png" /></div>
              <div class="tips">今年考核<span>指标</span>怎么样？<span>排名</span>如何？污染<span>成因</span>？</div>
            </div>
          </div>
          <div class="srceen-content flex justify-content-end">
            <div class="introduction left-0">
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">数据感知</div>
                <div class="col-right">多源数据融合，分钟级刷新</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">达标形势</div>
                <div class="col-right">AQI达标率、优良天数、年度PM2.5、年度达标规划</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">区域排名</div>
                <div class="col-right">订阅关心城市，排名信息尽在掌握</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">咨询报告</div>
                <div class="col-right">轻咨询在线编制，领导关注随处分享</div>
              </div>
            </div>
            <img src="~/assets/images/map/air_ys_01.png" />
          </div>
        </div>
        <div class="screen-item">
          <div class="screen-head flex">
            <div class="order">02</div>
            <div class="screen-des flex">
              <div class="screen-title">应急场景</div>
              <div class="audio"><img src="~/assets/images/xs_img2.png" /></div>
              <div class="tips">今天有没<span>超标风险</span>？管哪里？如何管？</div>
            </div>
          </div>
          <div class="srceen-content flex">
            <img src="~/assets/images/map/air_ys_02.png" />
            <div class="introduction right-0">
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">智能预报</div>
                <div class="col-right">AI机器学习模型，小时级精准预报，臭氧余量表在线评估</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">实时调度</div>
                <div class="col-right">分钟数据&因子余量实时播报，指导管控调度</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">区域传输</div>
                <div class="col-right">小尺度溯源模型，百米级精细溯源，动态追溯污染气团来源</div>
              </div>
              <div class="introduction-list-item flex">
                <div class="sanjiao"></div>
                <div class="col-left">夜间巡查</div>
                <div class="col-right">污染源信息动态更新，环境污染无所遁形</div>
              </div>
            </div>
          </div>
        </div>
        <div class="screen-item">
          <div class="screen-head flex">
            <div class="order">03</div>
            <div class="screen-des flex">
              <div class="screen-title">通用场景</div>
              <div class="audio"><img src="~/assets/images/xs_img3.png" /></div>
              <div class="tips">如何轻松<span>掌握行业动态</span>?</div>
            </div>
          </div>
          <div class="srceen-content flex justify-content-end">
            <div class="introduction left-0">
              <div class="introduction-list-item">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  <span>环保资讯信息</span>
                </div>
                <div class="col-right__last">热点资讯、政策法规、环保问答、帮助<br />管理者轻松掌握行业动态</div>
              </div>
            </div>
            <img src="~/assets/images/map/air_ys_03.png" />
          </div>
        </div>
      </div>
    </section>
    <section class="page bgcolor">
      <div class="page_title font40">
        <h2><i></i>客户价值<i></i></h2>
      </div>
      <div class="page-content container">
        <img src="~/assets/images/map/air_khjz.png" />
      </div>
    </section>
    <video-player v-model:visable="showVideo" url="AnewAir" />
  </div>
</template>
<script setup>
useHead({
  title: '大气污染智能管控终端_AnewAir',
  meta: [
    {
      name: 'description',
      content:
        'AnewAir可以帮助管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方案并动态评估管控效果。开箱即用，持续更新，同时AnewAir团队可提供贴心、专业的咨询服务，让大气污染防治更高效，更得心应手！',
    },
    { name: 'keywords', content: '大气污染管控，AnewAir，环境污染管控' },
  ],
});
const router = useRouter();
const showVideo = ref(false);
const jumpWechat = () => {
  window.open('https://work.weixin.qq.com/kfid/kfcb9bde46a45113692', '_blank');
};
const list = ref([
  {
    icon: '',
    label: '掌控全局',
  },
  {
    icon: '',
    label: '助力达标',
  },
  {
    icon: '',
    label: '开箱即用',
  },
  {
    icon: '',
    label: '在线更新',
  },
  {
    icon: '',
    label: '服务专业',
  },
  {
    icon: '',
    label: '多屏互动',
  },
]);
</script>
<style lang="less" scoped>
.videoPic {
  .playerBtn {
    height: 38px;
    font-size: 16px;
    color: #ffffff;
    padding: 0px 20px;
    border: 1px solid #03e8be;
    border-radius: 19px;
    background: #00041499;
    position: absolute;
    left: 57%;
    top: 33%;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    i {
      color: #03e8be;
    }
  }
  &:hover {
    .playerBtn {
      opacity: 1;
    }
  }
}
.info {
  justify-content: center;
  margin-bottom: 40px;
  align-items: stretch;
  .info-col-mid {
    font-size: 24px;
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .item-mid {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
    }

    .name-nav {
      width: 80px;
      span {
        font-size: 20px;
        position: relative;
        font-weight: bold;
        z-index: 2;
        margin: 0 3%;
        display: inline-block;
        width: 100%;
        text-align: center;
        color: #1f2429;
        &::before {
          width: 100%;
          height: 8px;
          background: #c0df9d;
          content: '';
          position: absolute;
          bottom: 0;
          left: 0%;
          z-index: 1;
        }
        i {
          position: relative;
          z-index: 1;
        }
      }
    }
  }
  .info-col-line {
    padding: 0 32px;
  }
  .info-col-left,
  .info-col-right {
    > div {
      &:first-child {
        margin-bottom: 20px;
      }
    }
    padding-left: 26px;
    h3 {
      font-size: 20px;
      font-weight: bold;
      color: #363e45;
      margin-bottom: 5px;
    }
    p {
      color: #637381;
      font-size: 16px;
    }
    div {
      font-size: 16px;
      color: #637381;
      padding-top: 10px;
    }
  }
  .info-col-left {
    text-align: right;
  }
}
.page {
  overflow: hidden;
}
.bgcolor {
  background: #fff9f0;
  overflow: hidden;
}
.gap-30 {
  gap: 30px;
}
.case-list {
  margin-bottom: 70px;
}
.list-item__title {
  line-height: 48px;
  background: linear-gradient(90deg, #7fc683, #02b7c3, #0294d2);
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  font-size: 18px;
  color: #ffffff;
}
.product-head {
  width: 100%;
  background: url('~/assets/images/map/air_banner-bg.png') no-repeat center center;
  // background: linear-gradient(0deg, #FFFFFF 0%, #D6EEFE 40%, #B0D1F1 100%);
  overflow: hidden;
  background-size: cover;
}
.banner {
  padding-top: 168px;
  align-items: center;
  overflow: hidden;
  img {
    float: right;
  }
  .left {
    position: absolute;
    width: 30%;
    top: 20%;
    z-index: 2;
    .name {
      font-size: 36px;
      font-weight: bold;
      color: #000414;
      font-family: HarmonyOS Sans SC;
      font-weight: bold;
      img {
        margin-right: 20px;
      }
    }
    .platform-name {
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #000414;
    }
    .platform-description {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #363e45;
      line-height: 34px;
    }
  }
  .btns {
    margin-top: 64px;
    gap: 20px;
    padding-top: 68px;
    margin: 0;
  }
}
.scene {
  background: url('~/assets/images/wenli.png') no-repeat center top;
  background: 100% auto;
}
.bottom-card {
  justify-content: space-around;
}

.p-bg {
  width: 45%;
  height: 408px;
  /* background: red; */
  position: absolute;
  top: 0;
  background: linear-gradient(-90deg, #d6f1ff 0%, #d6f1ff 100%);
  z-index: -1;
}
.item-bg-01 {
  border-radius: 204px 0px 0px 204px;
  right: 0;
}
.item-bg-02 {
  border-radius: 0px 204px 204px 0;
  left: 0;
}
.item {
  font-family: Source Han Sans CN;
  margin-bottom: 110px;
  .container {
    display: flex;
  }
  .introduction {
    padding-top: 3%;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #1f2429;
      padding: 20px 0;
      position: relative;
      border-bottom: 2px solid #2fa8e933;
      &::after {
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
      .order {
        color: #31aae9;
        font-size: 40px;
        font-weight: bold;
        padding-right: 25px;
      }
    }
    .sub-title {
      font-size: 20px;
      font-weight: 400;
      color: #363e45;
      line-height: 26px;
      padding: 24px 0;
    }
    .description {
      font-size: 16px;
      font-weight: 400;
      color: #637381;
      line-height: 26px;
    }
    &:hover {
      cursor: pointer;
      .title {
        &::after {
          width: 100%;
        }
      }
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.screen-item {
  justify-content: end;
  position: relative;
  padding-top: 60px;

  .screen-head {
    margin-bottom: 82px;
    margin-top: 23px;
    .screen-title {
      width: 149px;
      border: 2px solid rgba(220, 238, 219, 0.4);
      border-radius: 25px;
      text-align: center;
      line-height: 50px;
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #8cc54d;
      background: #ffffffa6;
    }
    .audio {
      margin: 0px 5px 0 20px;
    }
    .tips {
      line-height: 50px;
      background: #94ca59;
      border-radius: 8px;
      margin-left: 20px;
      padding: 0 20px;
      font-size: 20px;
      color: #fff;
      position: relative;
      span {
        font-size: 24px;
      }
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -9px;
        transform: translateY(-50%);
        border-top: 10px solid transparent; /* 顶部透明 */
        border-bottom: 10px solid transparent; /* 底部透明 */
        border-right: 10px solid #94ca59; /* 右侧红色，可以根据需要修改颜色和大小 */
      }
    }
    .order {
      width: 60px;
      height: 46px;
      font-size: 64px;
      font-family: Alibaba PuHuiTi;
      font-weight: bold;
      color: #94ca59;
      position: absolute;
      margin-bottom: 107px;
      z-index: 0;
    }
    .screen-des {
      position: absolute;
      margin-left: 38px;
    }
  }
  .screen-bottom-list {
    flex-wrap: wrap;
    margin-top: 20px;
    &-item {
      width: 50%;
      line-height: 40px;
      .col-left {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: bold;
        color: #8cc54d;
      }
      .col-right {
        margin-left: 50px;
        font-size: 18px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: #3d4f6a;
        position: relative;
        &::before {
          content: '';
          background: #e2e7ec;
          width: 1px;
          height: 18px;
          left: -23px;
          top: 12px;
          position: absolute;
        }
      }
    }
  }
  &:nth-child(2) {
    .screen-title {
      color: #f47d4f;
    }
    .tips {
      background: #f47d4f;
      &::before {
        border-right: 10px solid #f47d4f; /* 右侧红色，可以根据需要修改颜色和大小 */
      }
    }
    .order {
      color: #f47d4f;
    }
    .srceen-content {
      .introduction-list-item {
        .sanjiao {
          border-left: 8px solid #f47d4f;
        }
        .col-left {
          color: #f47d4f;
        }
      }
    }
  }
  &:nth-child(3) {
    .screen-title {
      color: #00a8ce;
    }
    .tips {
      background: #00a8ce;
      &::before {
        border-right: 10px solid #00a8ce; /* 右侧红色，可以根据需要修改颜色和大小 */
      }
    }
    .order {
      color: #00a8ce;
    }
    .srceen-content {
      .introduction-list-item {
        .sanjiao {
          border-left: 8px solid #00a8ce;
        }
        .col-left {
          color: #00a8ce;
        }
      }
    }
  }
}
.srceen {
  margin-top: 72px;
  // height: 720px;
  width: 100%;
  // background: url('~/assets/images/map/cip_screen_bg.png') no-repeat center center;
}
.introduction {
  position: absolute;
}
.justify-content-end {
  justify-content: end;
}
.introduction-list {
  &-item {
    line-height: 40px;
    .col-left {
      font-size: 20px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #8cc54d;
    }
    .col-right {
      margin-left: 50px;
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #3d4f6a;
      position: relative;
      &::before {
        content: '';
        background: #e2e7ec;
        width: 1px;
        height: 18px;
        left: -23px;
        top: 12px;
        position: absolute;
      }
    }
    .col-right__last {
      position: initial;
      font-size: 18px;
      color: #3d4f6a;
    }
  }
}
.left-0 {
  left: 0;
}
.right-0 {
  right: 0;
}
.feature-card {
  margin: 100px 0 40px;
  .feature-item {
    text-align: center;
    img {
      margin: 5px auto;
    }
    color: #1f2429;
    font-size: 18px;
  }
}
</style>
