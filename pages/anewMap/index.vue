<template>
  <div class="anewMap">
    <section class="product-head">
      <div class="container">
        <div class="banner flex">
          <div class="left">
            <div class="name">AnewMapTM</div>
            <div class="platform-name">空气质量改善服务智能云平台</div>
            <div class="platform-description">
              帮助管理者快速、全面了解大气污染发生发展的全时空变化信息，建立环境敏感区域与污染源之间的全证据链关联分析，分场景给出精准管控方案并动态评估管控效果。
            </div>

             <div class="btns flex">
                            <div class=" btn_parmay btn_parmay_main">产品咨询<i class="iconfont icon-anniu-jiantou"></i></div>
                            <div class=" btn_parmay">应用案例<i class="iconfont icon-anniu-jiantou"></i></div>
                        </div>
          </div>
          <img
            src="~/assets/images/map-banner-img.png"
            class="wow fadeInRight"
          />
        </div>
      </div>
    </section>
    <section class="feature-card">
      <div class="container">
        <div class="feature-card flex between">
          <div class="feature-item" v-for="(item, index) in list" :key="index">
            <img src="~/assets/images/map/feature-card-01.png" v-if="index === 0" />
            <img src="~/assets/images/map/feature-card-02.png" v-if="index === 1" />
            <img src="~/assets/images/map/feature-card-03.png" v-if="index === 2" />
            <img src="~/assets/images/map/feature-card-04.png" v-if="index === 3" />
            <img src="~/assets/images/map/feature-card-05.png" v-if="index === 4" />
            <img src="~/assets/images/map/feature-card-06.png" v-if="index === 5" />
            <span>{{ item.label }}</span>
          </div>
        </div>
      </div>
    </section>
    <section class="page container">
      <div class="page_title">核心优势</div>
      <div class="page-content">
        <img src="~/assets/images/map/map_ys.png" />
      </div>
    </section>
    <section class="page goods">
      <div class="page_title">六大场景</div>
      <div class="page-content">
        <div class="item item1 relative">
          <div class="container">
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_01.png" />
            </div>
            <div class="introduction">
              <div class="title">
                <span class="order">01</span><span>智慧大屏</span>
              </div>
              <div class="sub-title">信息汇聚、掌控全局、成果尽显</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
          </div>
          <div class="p-bg"></div>
        </div>
        <div class="item item2 relative">
          <div class="container">
            <div class="introduction">
              <div class="title">
                <span class="order">02</span><span>数据推送</span>
              </div>
              <div class="sub-title">模板中心、数据修订、人工审核</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_02.png" />
            </div>
          </div>
          <div class="p-bg item-bg-02"></div>
        </div>
        <div class="item item3 relative">
          <div class="container">
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_03.png" />
            </div>
            <div class="introduction">
              <div class="title">
                <span class="order">03</span><span>预警预报</span>
              </div>
              <div class="sub-title">多源慧聚、短临预报、实时订正</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
          </div>
          <div class="p-bg"></div>
        </div>
        <div class="item item4 relative">
          <div class="container">
            <div class="introduction">
              <div class="title">
                <span class="order">04</span><span>数据推送</span>
              </div>
              <div class="sub-title">模板中心、数据修订、人工审核</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_04.png" />
            </div>
          </div>
          <div class="p-bg"></div>
        </div>
        <div class="item item5 relative">
          <div class="container">
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_05.png" />
            </div>
            <div class="introduction">
              <div class="title">
                <span class="order">05</span><span>污染源管控</span>
              </div>
              <div class="sub-title">在线台账、污染专项、在线表单</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
          </div>
          <div class="p-bg"></div>
        </div>
        <div class="item item6 relative">
          <div class="container">
            <div class="introduction">
              <div class="title">
                <span class="order">06</span><span>事件调度</span>
              </div>
              <div class="sub-title">智慧调度、整改跟踪、事件统计</div>
              <div class="desrciption">
                这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案，这里是描述文案。
              </div>
            </div>
            <div class="goods_img">
              <img src="~/assets/images/map/mapcj_06.png" />
            </div>
          </div>
          <div class="p-bg"></div>
        </div>
      </div>
    </section>
    <section class="page">
      <div class="page_title">客户案例</div>
      <div class="page-content container">
        <div class="case-list">
          <ul class="flex gap-30 center">
            <li class="case-list-item">
              <div class="list-item-img">
                <img src="~/assets/images/map/map_case01.png" />
              </div>
              <div class="list-item__title">清远项目</div>
            </li>
            <li class="case-list-item">
              <div class="list-item-img">
                <img src="~/assets/images/map/map_case02.png" />
              </div>
              <div class="list-item__title">清远项目</div>
            </li>
            <li class="case-list-item">
              <div class="list-item-img">
                <img src="~/assets/images/map/map_case03.png" />
              </div>
              <div class="list-item__title">清远项目</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const list = ref([
  {
    icon: "",
    label: "全局信息掌控",
  },
  {
    icon: "",
    label: "微信智能推送",
  },
  {
    icon: "",
    label: "智能精细预报",
  },
  {
    icon: "",
    label: "智能报警分析",
  },
  {
    icon: "",
    label: "污染专项管控",
  },
  {
    icon: "",
    label: "云端指挥调度",
  },
]);
</script>
<style lang="less" scoped>
.gap-30 {
  gap: 30px;
}
.case-list {
  margin-bottom: 70px;
  ul {
    li {
      box-shadow: 8px 8px 20px 0 rgba(55, 99, 170, 0.1), 1px 1px 20px 0 #fff;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      .list-item-img {
        overflow: hidden;
        img {
          transition: all 0.5s linear;
          -webkit-transition: all 0.5s linear;
        }
      }
      .list-item__title {
        line-height: 48px;
        background: linear-gradient(90deg, #7fc683, #02b7c3, #0294d2);
        border-radius: 0px 0px 8px 8px;
        text-align: center;
        font-size: 18px;
        color: #ffffff;
      }
      &:hover {
        box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
        transform: translateY(-16px);
        cursor: pointer;
        img {
        //   webkit-transform: scale(1.05);
        //   -ms-transform: scale(1.05);
        //   transform: scale(1.05);
        }
      }
    }
  }
}

.product-head {
  width: 100%;
  background: linear-gradient(0deg, #ffffff 0%, #d6eefe 40%, #b0d1f1 100%);
  overflow: hidden;
}
.banner {
  padding-top: 30px;
  align-items: center;

  .left {
    position: absolute;
    width: 30%;
    // top: 20%;
    .name {
      font-size: 36px;
      font-weight: bold;
      color: #000414;
      font-family: HarmonyOS Sans SC;
      padding: 25px 0;
    }
    .platform-name {
      font-size: 40px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #000414;
      padding-bottom: 40px;
    }
    .platform-description {
      font-size: 18px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #363e45;
      padding-bottom: 50px;
    }
  }
  .btns {
    margin-top: 64px;
    gap: 20px;
    padding: 0;
    margin: 0;
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
  }
}
.feature-card {
  .feature-item {
    text-align: center;
    img {
      margin: 5px auto;
    }
    color: #1f2429;
    font-size: 18px;
  }
}
.goods {
  background: #f0f9ff;
  margin-top: 70px;
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
.item {
  font-family: Source Han Sans CN;
  margin-bottom: 110px;
  .container {
    display: flex;
    z-index: 2;
    position: relative;
  }
  .introduction {
    padding-top: 3%;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #1f2429;
      padding: 20px 0;
      position: relative;
      border-bottom: 2px solid rgba(#31aae9, 0.2);
      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 0;
        border-top: 2px solid #31aae9;
        width: 10%;
        transition: all 0.3s;
        border-radius: 1px;
      }
      .order {
        color: #31aae9;
        font-size: 40px;
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
  .p-bg {
    width: 50%;
    height: 408px;
    /* background: red; */
    position: absolute;
    top: 0;
    background: linear-gradient(-90deg, #d6f1ff 0%, #d6f1ff 100%);
    z-index: 1;
    border-radius: 204px 0px 0px 204px;
    right: 0;
  }
  &:nth-child(2n) {
    .p-bg {
      border-radius: 0px 204px 204px 0px;
      left: 0;
    }
  }
  &.item1 {
    .p-bg {
      background: linear-gradient(90deg, #d6f1ff 0%, #d6f1ff 100%);
    }
  }
  &.item2 {
    .title {
      border-bottom: 2px solid rgba(#78c65f, 0.2);
      &::after {
        border-top: 2px solid #78c65f;
      }
      .order {
        color: #78c65f;
      }
    }
    .p-bg {
      background: linear-gradient(-90deg, #d3f2de 0%, #d3f2de 100%);
    }
  }
  &.item3 {
    .title {
      border-bottom: 2px solid rgba(#78c65f, 0.2);
      &::after {
        border-top: 2px solid #78c65f;
      }
      .order {
        color: #78c65f;
      }
    }
    .p-bg {
      background: linear-gradient(90deg, #d5f5e0 0%, #d5f5e0 100%);
    }
  }
  &.item4 {
    .title {
      border-bottom: 2px solid rgba(#f47d4f, 0.2);
      &::after {
        border-top: 2px solid #f47d4f;
      }
      .order {
        color: #f47d4f;
      }
    }
    .p-bg {
      background: linear-gradient(-90deg, #fae4dc 0%, #fae4dc 100%);
    }
  }
  &.item5 {
    .title {
      border-bottom: 2px solid rgba(#f47d4f, 0.2);
      &::after {
        border-top: 2px solid #f47d4f;
      }
      .order {
        color: #f47d4f;
      }
    }
    .p-bg {
      background: linear-gradient(90deg, #fae4dc 0%, #fae4dc 100%);
    }
  }
  &.item6 {
    .p-bg {
      background: linear-gradient(-90deg, #d6f1ff 0%, #d6f1ff 100%);
    }
  }
}
</style>