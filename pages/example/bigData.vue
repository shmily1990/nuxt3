<template>
  <div class="tab-box bigData">
    <div class="solution-item bg">
      <div class="page_title font34">
        <h2><i></i>方案背景<i></i></h2>
      </div>
      <div class="background container">
        <img src="~/assets/images/solution/bigData1.jpg" />
        <h2 class="flex center">传统信息化产品难以支撑不断变化的客户需求！</h2>
        <p>
          随着生态环境治理数字化转型的不断深入，为加强城市大气质量达标管理，环保系统建设了众多孤立的业务系统，传统信息化产品难以支撑新时代背景下不断变化的客户需求。后疫情时代，需要通过科学精准手段平衡环保考核与经济发展双重发展，以数字技术赋能生态环境治理，全面提升大气环境一网统管能力。
        </p>
      </div>
      <dl class="goods container flex between">
        <dd>
          <span><i class="iconfont icon-yewuzhicheng"></i></span>
          <h3>业务支撑弱</h3>
          <p>数据孤岛，业务壁垒 <br />全局支撑效果弱</p>
        </dd>
        <dd>
          <span><i class="iconfont icon-jishujiagou"></i></span>
          <h3>技术架构旧</h3>
          <p>无法持续迭代 <br />技术架构老</p>
        </dd>
        <dd>
          <span><i class="iconfont icon-fenxishendu"></i></span>
          <h3>分析深度浅</h3>
          <p>
            数据分析深度浅<br />
            大数据算法应用少
          </p>
        </dd>
        <dd>
          <span><i class="iconfont icon-kehumanyi"></i></span>
          <h3>客户满意度低</h3>
          <p>
            交付即结束<br />
            共创共享性差
          </p>
        </dd>
      </dl>
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>解决思路<i></i></h2>
      </div>
      <img src="~/assets/images/solution/bigData2.png" />
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>技术架构<i></i></h2>
      </div>
      <img src="~/assets/images/solution/bigData3.png" />
    </div>
    <div class="solution-item container">
      <div class="page_title font34">
        <h2><i></i>算法体系<i></i></h2>
      </div>
      <div class="tip-title fontBold"><span>基于环境领域模型算法和大数据模型算法深度融合，辅助决策体系</span></div>
      <div class="algorithm">
        <div class="l">
          <div class="name">
            <i><img src="~/assets/images/solution/jiantou.png" /></i>
            <div class="tip-title"><span>环境领域模型算法</span></div>
          </div>
          <ul class="flex column">
            <li>
              <div class="img"><img src="~/assets/images/solution/shuyuan.png" /></div>
              <p>FP小尺度溯源</p>
            </li>
            <li>
              <div class="img"><img src="~/assets/images/solution/keliwu.png" /></div>
              <p>颗粒物源解析</p>
            </li>
          </ul>
        </div>
        <div class="r">
          <div class="name">
            <i><img src="~/assets/images/solution/jiantou2.png" /></i>
            <div class="tip-title"><span>大数据模型算法</span></div>
          </div>
          <ul class="flex column">
            <li>
              <div class="img"><img src="~/assets/images/solution/obm.png" /></div>
              <p>OBM模型</p>
            </li>
            <li>
              <div class="img"><img src="~/assets/images/solution/shortreport.png" /></div>
              <p>短临预报</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="solution-item">
      <div class="page_title font34">
        <h2><i></i>客户案例<i></i></h2>
      </div>
      <div class="container">
        <ul class="person-case flex between">
          <li>
            <p><span></span> 林州市智慧环保平台</p>
            <!-- <div class="img"><img src="~/assets/images/solution/case1.jpg" /></div> -->
          </li>
          <li>
            <p><span></span> 珠海市高新区智慧环保平台</p>
            <!-- <div class="img"><img src="~/assets/images/solution/case1.jpg" /></div> -->
          </li>
          <li>
            <p><span></span> 曹妃甸大气污染管控平台</p>
            <!-- <div class="img"><img src="~/assets/images/solution/case1.jpg" /></div> -->
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
.bigData {
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
    // 算法体系
    .algorithm {
      margin-top: 20px;
      display: flex;
      gap: 80px;
      justify-content: space-between;
      flex: 1;

      .l {
        .name {
          background: url('~/assets/images/solution/green_bg.png') no-repeat center center;
        }
      }
      .r {
        .name {
          background: url('~/assets/images/solution/blue_bg.png') no-repeat center center;
          .tip-title {
            span {
              &::after {
                background: #53b1e4;
              }
            }
          }
        }
        p {
          background: rgba(#4ca2da, 0.9);
        }
      }
      .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .tip-title {
          font-size: 20px;
          margin: 20px 0 30px;
          span {
            &::after {
              background: #94ca59;
            }
          }
        }
      }

      ul {
        gap: 30px;
        li {
          width: 100%;
          position: relative;
          p {
            background: rgba(#94ca58, 0.9);
            border-radius: 0px 8px 0px 8px;
            line-height: 34px;
            width: 30%;
            position: absolute;
            left: 0;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            bottom: 0;
          }
        }
      }
    }
  }
}
</style>
