<template>
  <div class="anewCip">
    <section class="product-head">
      <div class="container">
        <div class="banner">
          <div class="banner-tips">
            <div class="platform-name">园区精细化监管及预警平台-AnewCIP™</div>
            <div class="platform-description">
              实现园区有毒有害及恶臭异味态势感知、预警监控、污染研判、企业评价、档案管理、移动互联等场景应用，<br />助力园区以最小的管理成本实现环境管理与企业经济协同发展
            </div>
            <div class="btns flex p-4">
              <div class="btn_parmay btn_parmay_main" @click="handleAsk">产品咨询<i class="iconfont icon-anniu-jiantou"></i></div>
              <div class="btn_parmay" @click="router.push('/case')">应用案例<i class="iconfont icon-anniu-jiantou"></i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="playerBtn" @click="showVideo = true"><i class="iconfont icon-guankanshipin"></i>观看视频</div>
    </section>
    <section class="adv-card container">
      <div class="feature-card flex between">
        <div class="feature-item" v-for="(item, index) in list" :key="index">
          <img src="~/assets/images/map/icon_cip_01.png" v-if="index === 0" />
          <img src="~/assets/images/map/icon_cip_02.png" v-if="index === 1" />
          <img src="~/assets/images/map/icon_cip_03.png" v-if="index === 2" />
          <img src="~/assets/images/map/icon_cip_04.png" v-if="index === 3" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </section>
    <section class="page container">
      <div class="page_title font40">
        <h2><i></i>核心优势<i></i></h2>
      </div>
      <div class="page-content">
        <img src="~/assets/images/map/cip_youshi.png" />
      </div>
    </section>
    <section class="page srceen">
      <div class="page_title font40">
        <h2><i></i>两大场景<i></i></h2>
      </div>
      <div class="page-content container">
        <div class="screen-item">
          <div class="screen-head flex">
            <div class="order">01</div>
            <div class="screen-des flex">
              <div class="screen-title">日常场景</div>
              <div class="audio"><img src="~/assets/images/xs_img1.png" /></div>
              <div class="tips">园区企业<span>无组织排放</span>问题突出，恶臭异味<span>溯源</span>困难？</div>
            </div>
          </div>
          <div class="srceen-content">
            <img src="~/assets/images/map/cip_cj_01.png" />
            <div class="screen-bottom-list flex">
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  智能预警
                </div>
                <div class="col-right">五级报警/嗅阈值报警机制、本地化扩散条件预测模型</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  事件交办
                </div>
                <div class="col-right">任务交办闭环管理、任务工单微信群推送</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  恶臭溯源
                </div>
                <div class="col-right">Calpuff扩散模型、VOCs走航核查、企业源谱关联</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  企业评价
                </div>
                <div class="col-right">TVOC/恶臭因子插值、企业四色图评价</div>
              </div>
            </div>
          </div>
        </div>
        <div class="screen-item m-t-140">
          <div class="screen-head flex">
            <div class="order">02</div>
            <div class="screen-des flex">
              <div class="screen-title">应急防控</div>
              <div class="audio"><img src="~/assets/images/xs_img2.png" /></div>
              <div class="tips">园区企业<span>应急处置</span>能力薄弱，如何<span>应急调度</span>减少损失？</div>
            </div>
          </div>
          <div class="srceen-content">
            <img src="~/assets/images/map/cip_cj_02.png" />
            <div class="screen-bottom-list flex">
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  智能预案
                </div>
                <div class="col-right">应急预案、应急模拟、疏散路线</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  应急联动
                </div>
                <div class="col-right">应急隔离、指挥标绘、应急调度</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  应急资源
                </div>
                <div class="col-right">应急专家、应急车辆、应急物资</div>
              </div>
              <div class="screen-bottom-list-item flex">
                <div class="col-left flex">
                  <div class="sanjiao"></div>
                  扩散模拟
                </div>
                <div class="col-right">Slab扩散模拟、影响范围评估</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page">
      <div class="page_title font40">
        <h2><i></i>客户案例<i></i></h2>
      </div>
      <div class="container">
        <ul class="park-case flex between">
          <li>
            <div class="img">
              <img src="~/assets/images/map/cip_case_01.png" />
              <div class="name">台州某园区</div>
            </div>
            <p>
              涉气信访投诉量：同比<span><i>下降40%</i></span>
            </p>
            <p>
              涉气问题数量：同比<span><i>下降90%</i></span>
            </p>
          </li>
          <li>
            <div class="img">
              <img src="~/assets/images/map/cip_case_02.png" />
              <div class="name">浙江某园区</div>
            </div>
            <p>
              园区服务:<span><i>313次</i></span
              >企业整改:<span><i>319家</i></span>
            </p>
            <p>
              季度污染天数：同比<span><i>下降88%</i></span>
            </p>
          </li>
        </ul>
      </div>
    </section>
    <video-player v-model:visable="showVideo" url="AnewCIP" />
  </div>
</template>
<script setup>
useHead({
  title: '园区精细化监管及预警平台_AnewCIP',
  meta: [
    {
      name: 'description',
      content:
        'AnewCIP可以实现园区有毒有害及恶臭异味态势感知、预警监控、污染研判、企业评价、档案管理、移动互联等场景应用，助力园区环境、民生、安全等问题实现精细化、智慧化管理，以最小的管理成本实现环境管理与企业经济协同发展。',
    },
    { name: 'keywords', content: '智慧园区，园区监管平台，AnewCIP' },
  ],
});
const router = useRouter();
const showVideo = ref(false);
const handleAsk = () => jumpWechat();
const list = ref([
  {
    icon: '',
    label: '问题发生秒级发现',
  },
  {
    icon: '',
    label: '恶臭异味工段溯源',
  },
  {
    icon: '',
    label: '管理责任到岗到人',
  },
  {
    icon: '',
    label: '园区经济效益提升',
  },
]);
</script>
<style lang="less" scoped>
.playerBtn {
  position: absolute;
  left: 47%;
  bottom: 26%;
  background: rgba(#000414, 0.64);
  &:hover {
    background: rgba(#02c7b5, 0.64);
  }
}
.m-t-140 {
  margin-top: 140px;
}
.gap-30 {
  gap: 30px;
}
.case-list {
  margin-bottom: 70px;
}
.list-item__title {
  line-height: 48px;
  border-radius: 0px 0px 8px 8px;
  text-align: center;
  font-size: 18px;
  color: #3d4f6a;
  .count {
    font-size: 20px;
    font-weight: bold;
    color: #3d4f6a;
    border-bottom: 8px solid #c0df9d;
    margin: 0 10px;
  }
}
.product-head {
  width: 100%;
  height: 920px;
  background: url('~/assets/images/map/toppic.png') no-repeat center center;
  background-size: cover;
  position: relative;
  &:hover {
    .playerBtn {
      opacity: 1;
    }
  }
  // background: linear-gradient(0deg, #FFFFFF 0%, #D6EEFE 40%, #B0D1F1 100%);
}
.banner {
  padding-top: 130px;
  align-items: center;
  color: #fff;
  .banner-tips {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .platform-name {
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      padding-bottom: 20px;
    }
    .platform-description {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      line-height: 34px;
    }
  }
  .btns {
    // margin-top: 64px;
    gap: 20px;
  }
  .btn {
    width: 140px;
    line-height: 48px;
    background: #02c7b5;
    box-shadow: 0px 3px 11px 0px rgba(2, 199, 181, 0.3);
    border-radius: 8px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    padding: 0;
    margin: 0;
  }
}
.adv-card {
  justify-content: space-around;
  height: 130px;
}
.page {
  &-title {
    line-height: 168px;
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #000414;
    text-align: center;
    // padding: 20px 0;
    position: relative;
  }
}
.screen-item {
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
      span {
        font-size: 24px;
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
    margin-bottom: 70px;
    &-item {
      width: 50%;
      line-height: 40px;
      margin-bottom: 10px;
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
      .col-left {
        color: #f47d4f;
      }
      .sanjiao {
        border-left: 8px solid #f47d4f;
      }
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
}
.srceen {
  margin-top: 72px;
  // height: 720px;
  width: 100%;
  background: url('~/assets/images/map/cip_screen_bg.png') no-repeat center top #f5f8fa;
  overflow: hidden;
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

.park-case {
  gap: 30px;
  li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .img {
      position: relative;
      .name {
        background: url('~/assets/images/solution/cip_anli01_textbg.png') no-repeat center center;
        background-size: 100% 100%;
        color: #ffffff;
        font-size: 18px;
        display: inline-block;
        width: 160px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateY(-100% - 20px) translateX(-50%);
      }
      .tip {
        display: flex;
        justify-content: flex-end;
        position: absolute;
        right: 0;
        top: -4px;
        dl {
          display: inline-block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          color: #fff;
          height: 100%;
          display: flex;
          justify-content: center;
          padding-top: 14px;
          dt {
          }
        }
      }
    }
    p {
      color: #3d4f6a;
      font-size: 18px;
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
      span {
        color: #3d4f6a;
        font-size: 20px;
        position: relative;
        font-weight: bold;
        z-index: 2;
        margin: 0 3%;
        display: inline-block;
        &::before {
          width: 120%;
          height: 8px;
          background: #c0df9d;
          content: '';
          position: absolute;
          bottom: 0;
          left: -10%;
          z-index: 1;
        }
        i {
          position: relative;
          z-index: 1;
        }
      }
    }
    &:nth-child(2) {
      .img {
        .name {
          background: url('~/assets/images/solution/cip_anli02_textbg.png') no-repeat center center;
        }
      }
    }
  }
}
</style>
