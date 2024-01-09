<template>
  <div class="tab-box park">
    <div class="solution-item bg">
      <div class="page_title font34">
        <h2><i></i>方案背景<i></i></h2>
      </div>
      <div class="background container">
        <img src="~/assets/images/solution/park1.jpg" class="rounded-20" />
        <h2 class="flex center">园区现状：安全风险大！环境影响大！企业管理难！</h2>
        <p>
          近年来，园区的快速发展给相关部门带来了一系列监管难题：安全风险大、环境影响大、企业管理难。如何建立“日常不扰、无据不查、轻微不罚”的园区非现场监管模式，进一步减少对企业现场检查，在保障生态环境的前提下持续推动企业良性发展，是园区监管面临的重大挑战。
          后疫情时代，园区需要通过精细化监管实现环境管理与企业经济协同发展
        </p>
      </div>
      <dl class="goods container flex between">
        <dd>
          <span><i class="iconfont icon-fengxianyujing"></i></span>
          <h3>安全风险高</h3>
          <p>安全风险评估能力薄弱 <br />企业管理存在疏忽</p>
        </dd>
        <dd>
          <span><i class="iconfont icon-yiweisuyuan"></i></span>
          <h3>异味投诉多</h3>
          <p>异味溯源评估手段少 <br />恶臭异味来源不明确</p>
        </dd>
        <dd>
          <span><i class="iconfont icon-yingjizhichengshao"></i></span>
          <h3>应急少支撑</h3>
          <p>
            重污染天气应急响应 <br />
            希望保经济效益
          </p>
        </dd>
        <dd>
          <span><i class="iconfont icon-qiyejianguan"></i></span>
          <h3>企业监管难</h3>
          <p>
            监测不精准，溯源不到位
            <br />
            机制不落地，评估不系统
          </p>
        </dd>
      </dl>
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>解决思路<i></i></h2>
      </div>
      <img src="~/assets/images/solution/park2.png" />
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>建设立体网络<i></i></h2>
      </div>
      <div class="park-special flex between">
        <div class="img"><img src="~/assets/images/solution/network.png" /></div>
        <div class="text">
          <div class="sub-title">监测联网、实时感知</div>
          <p>
            基于异味评估，结合优先管控异味污染物原则，布设“厂内监测站-企业厂界站-扩散边界站-环境敏感站”立体监测网络，采用DMTS-1000、ACGC-MS等先进科学的监测仪器仪表对园区异味区域和来源实现全面感知、实时监测、量化指标、科学监管。
          </p>
        </div>
      </div>
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>数字化工具赋能<i></i></h2>
      </div>
      <div class="park-special flex between">
        <div class="text">
          <div class="sub-title">科学研判、决策调度</div>
          <p>
            基于异味评估，结合优先管控异味污染物原则，布设“厂内监测站-企业厂界站-扩散边界站-环境敏感站”立体监测网络，采用DMTS-1000、ACGC-MS等先进科学的监测仪器仪表对园区异味区域和来源实现全面感知、实时监测、量化指标、科学监管。
          </p>
        </div>
        <div class="img"><img src="~/assets/images/solution/park-funeng.png" /></div>
      </div>
    </div>

    <div class="solution-item">
      <div class="page_title font34">
        <h2><i></i>客户案例<i></i></h2>
      </div>
      <div class="container">
        <ul class="park-case flex between">
          <li>
            <div class="img">
              <div class="tip">
                <dl class="">
                  <img src="~/assets/images/solution/cip_anli_textbg.png" />
                  <dt>已升级为国家级化工园区</dt>
                </dl>
              </div>
              <img src="~/assets/images/solution/park-case1.png" />
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
              <img src="~/assets/images/solution/park-case2.png" />
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
    </div>
  </div>
</template>
<script setup></script>
<style lang="less" scoped>
.goods {
  margin-bottom: 60px;
  dd {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    span {
      width: 80px;
      height: 80px;
      background: linear-gradient(-45deg, #ea7973, #f8afa4);
      border-radius: 50%;
      display: flex;
      align-items: center;
      font-size: 34px;
      color: #fff;
      justify-content: center;
      .iconfont {
        font-size: 50px;
      }
    }
    h3 {
      margin: 20px 0 16px;
      color: #3e4f6a;
      font-size: 20px;
    }
    p {
      color: #929eab;
      font-size: 16px;
      text-align: center;
      padding: 0;
    }
  }
}
.park {
  .solution-item {
    .tip-title {
      text-align: center;
      margin-bottom: 11px;
      span {
        font-size: 22px;
        font-family: Source Han Sans CN;
        color: #222b36;
        display: inline-block;
        position: relative;
        z-index: 2;
        &::after {
          width: 120%;
          height: 10px;
          background: #fed0a4;
          opacity: 0.59;
          content: '';
          position: absolute;
          bottom: 0;
          left: -10%;
          z-index: 1;
        }
      }
    }
    .park-special {
      gap: 60px;
      .text {
        flex: 0 0 330px;
        .sub-title {
          color: #3aa3db;
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 30px;
          &::before {
            width: 0;
            height: 0;
            border: 8px solid;
            border-color: transparent transparent transparent #3aa3db;
            content: '';
            display: inline-block;
            margin-right: 3px;
          }
        }
        p {
          color: #3d4f6a;
          font-size: 18px;
          line-height: 40px;
        }
      }
      .img {
        img {
          background: #cceaf6;
          border: 2px solid rgba(255, 255, 255, 0.64);
          box-shadow: 0px 8px 32px 0px rgba(33, 193, 243, 0.22);
          border-radius: 20px;
        }
      }
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
            // position: absolute;
            // top: 50%;
            transform: translateY(-20px);
            width: 100%;
            color: #fff;
            display: flex;
            justify-content: center;
            padding-top: 14px;
            position: relative;
            dt {
              position: absolute;
              top: 28px;
              width: 100%;
              text-align: center;
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
}
</style>
