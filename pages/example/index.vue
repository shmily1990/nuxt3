<template>
  <div id="solution">
    <section class="banner">
      <div class="banner-content">
        <h2>推动环保行业数字化变革</h2>
        <div class="title">— 新禾解决方案中心 —</div>
        <div class="sub-title">Anew Solution Center</div>
      </div>
    </section>
    <!-- tab -->
    <section class="solution-wrapper">
      <div class="solut-tab">
        <div class="page_title font40">数字化应用解决方案</div>
        <div class="container">
          <ul class="name-wrapper flex center pc">
            <li v-for="(item, idx) in tabData" :key="idx" @click="tabIdx = idx" :class="{ active: idx == tabIdx }">{{ item }}</li>
          </ul>
          <ul class="name-wrapper flex center mobile">
            <li v-for="(item, idx) in tabData" :key="idx" @click="tabIdx = idx" :class="{ active: idx == tabIdx }">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div class="tab-wrapper">
        <QZX v-if="tabIdx == 0" />
        <!-- 2 -->
        <ZH v-if="tabIdx == 1" />
        <!-- 3 -->
        <BigData v-if="tabIdx == 2" />
        <!-- 4 -->
        <Park v-if="tabIdx == 3" />
      </div>
    </section>
    <!--footbanner-->
    <section class="seciton solutin_f_banner">
      <div class="container flex center column">
        <h2 class="wow fadeInDown color_white">新禾数科期待与您的合作</h2>
        <p class="wow fadeInDown color_white">新品发布，抢先免费试用！</p>
        <div class="pro_more wow fadeInDown">
          <span @click="handleTrial">产品试用</span>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import QZX from './qzx.vue';
import ZH from './zh.vue';
import BigData from './bigData.vue';
import Park from './park.vue';
useHead({
  title: '空气质量改善_大气溯源_大气大数据平台-新禾解决方案中心',
  meta: [
    {
      name: 'description',
      content:
        '新禾数科以具备自主知识产权的SaaS云计算技术、环境模型及机器学习AI算法为核心技术，融合AIoT多源数据，实现数据感知、预报预警、研判分析、指挥调度、综合评估、云端一体等应用场景，针对大气污染源智能监管领域，开发了多种独特的数字化解决方案。',
    },
    { name: 'keywords', content: '空气质量改善，环保数字化，大气大数据，大气溯源' },
  ],
});
const tabIdx = ref(0);
const tabData = ref(['空气质量改善轻咨询服务', '移动走航与溯源评估方案', '城市和区县大气大数据平台', '智慧园区精细化监管方案']);
const handleTrial = () => jumpWechat();
</script>
<style lang="less">
.tab-wrapper {
  .bg {
    background: #f7fafe;
    overflow: hidden;
  }
  .background {
    position: relative;
    background: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.64);
    box-shadow: 0px 8px 32px 0px rgba(33, 193, 243, 0.16);
    border-radius: 20px;
    margin-bottom: 62px;
    h2 {
      width: 100%;
      height: 64px;
      background: rgba(#ee2525, 0.7);
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      font-size: 18px;
      color: #fff;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #1f2429;
      padding: 20px;
      line-height: 34px;
    }
    &.container {
      padding: 0;
    }
  }
}
.person-case {
  margin-bottom: 60px;
  gap: 20px;
  li {
    -webkit-transition: -webkit-transform 0.3s linear;
    transition: -webkit-transform 0.3s linear;
    transition: transform 0.3s linear;
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;
    cursor: pointer;
    flex: 1;
    width: 88%;
    img {
      border: 2px solid #cceaf6;
      border-radius: 8px;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: #f1f8fd;
      border-radius: 8px;
      padding: 15px 0;
      margin-bottom: 15px;
      color: #43586a;
      font-size: 16px;
      span {
        width: 12px;
        height: 12px;
        background: #f1f8fd;
        border-radius: 50%;
        display: inline-block;
        background: #faaa58;
        position: relative;
        margin: 0 10px;
        &::after {
          width: 20px;
          height: 20px;
          background: rgba(250, 185, 122, 0.2);
          content: '';
          position: absolute;
          left: -4px;
          top: -4px;
          border-radius: 50%;
        }
      }
    }
    &:hover {
      // -webkit-box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      // box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      // -webkit-transform: translateY(-16px);
      // transform: translateY(-16px);
    }
  }
}
@media (max-width: 750px) {
  .tab-wrapper {
    .background {
      h2 {
        height: 32px;
        font-size: 14px;
      }
      .rounded-20 {
        border-radius: 0;
      }
    }
    .person-case {
      flex-direction: column;
    }
  }
}
</style>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 480px;
  background: url('~/assets/images/solution/jjfa_top_banner.jpg') no-repeat center center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  &-content {
    text-align: center;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #ffffff;
    // margin-left: -95px;
    // margin-top: -50px;
    letter-spacing: 5px;
    h2 {
      font-size: 48px;
      font-family: Source Han Sans CN;
      font-weight: bold;
      color: #ffffff;

      text-shadow: 0px 3px 16px rgba(24, 86, 141, 0.3);
    }
    .title {
      font-size: 24px;
      font-weight: 400;
      color: #ffffff;
      text-shadow: 0px 3px 16px rgba(24, 86, 141, 0.3);
      margin: 30px auto 5px;
    }
    .sub-title {
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 0px 3px 10px rgba(24, 86, 141, 0.3);
    }
  }
}
.container {
  padding: 0;
}
.solution-wrapper {
  .solut-tab {
    background: #f7fafe;
    overflow: hidden;
  }
  .name-wrapper {
    background: #ffffff;
    border: 1px solid #f5f8fa;
    box-shadow: 0px 4px 22px 0px rgba(99, 115, 129, 0.14);
    border-radius: 36px;
    li {
      font-size: 18px;
      font-weight: 400;
      color: #1f2429;
      padding: 20px 0px;
      flex: 1;
      text-align: center;
      border-radius: 36px;
      border: 2px solid #ffffff;
      transition: all 0.3s ease-in-out;
      position: relative;
      font-weight: bold;
      cursor: pointer;
      &.active {
        background: linear-gradient(90deg, #12cfbe, #4db2f2);
        color: #fff;
        // font-weight: bold;
        cursor: pointer;
        // font-size: 20px;
      }
      &::after {
        width: 1px;
        height: 24px;
        background: #717f8b;
        opacity: 0.2;
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
      &:hover:not(.active) {
        background: #f5f8fa;
        color: #1f2429;
        // font-weight: normal;
      }
    }
  }
}

.solutin_f_banner {
  background: url('~/assets/images/solution/banner3.jpg') no-repeat center center;
  padding: 10px;
  background-size: cover;
  margin-top: 80px;
  padding: 90px 0;
  h2 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 15px;
  }
  p {
    font-size: 18px;
  }
  .pro_more {
    margin-top: 30px;
    padding: 0 32px;
    background: #fff;
    color: #02c7b5;
    font-size: 18px;
    height: 44px;
    background: #ffffff;
    border-radius: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #02c7b5;
      border: 1px solid rgba(#fff, 0.4);
      color: #fff;
    }
    &:active {
      background: #01abab;
      color: #fff;
      border: 1px solid rgba(#fff, 0.4);
    }
  }
}
.mobile {
  display: none;
}
@media (max-width: 750px) {
  .solution-wrapper .page_title {
    font-size: 30px;
  }
  .solutin_f_banner h2 {
    font-size: 30px;
  }
  .banner {
    // height: 360px;
    &-content {
      .title {
        font-size: 20px;
      }
      .sub-title {
        font-size: inherit;
      }
      h2 {
        font-size: 40px;
      }
    }
  }
  .pc {
    display: none;
  }
  .mobile {
    display: flex;
  }
  .solution-wrapper .name-wrapper {
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 0 10px;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: 0;
    margin-bottom: 15px;
    li {
      font-size: 16px;
      width: calc(50% - 10px);
      flex: none;
      box-shadow: 0px 3px 17px 0px rgba(99, 115, 129, 0.14);
      line-height: 44px;
      padding: 0;
      &::after {
        width: 0;
      }
    }
  }
}
</style>
