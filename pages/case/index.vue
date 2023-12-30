<template>
  <div id="case">
    <section class="banner">
      <div class="banner-content">
        <div class="title">世界因创新而美</div>
        <div class="sub-title">—— 新禾案例中心 ——</div>
      </div>
    </section>
    <section class="container case-list">
      <div class="flex flex-wrap">
        <div class="case_container w-1/2 md:w-1/3 p-4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">数据推送</div>
            <p>员工省力，老板省心！全新数据推送等你解锁</p>
            <div class="bom flex between">
              <div class="tip">
                <span>数据推送</span><button>AnewMap</button>
              </div>
              <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/wGnkvnSP1z4X9Fte4CpB4A')">详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/3 p-4">
          <div class="img"><img src="~/assets/images/img2.jpg" /></div>
          <div class="des">
            <div class="name">Q市生态环境局</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>事件调度</span><button>AnewMap</button>
              </div>
              <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/o-JZc7Lqx8SthMquQHUBSw')">详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/3 p-4">
          <div class="img"><img src="~/assets/images/img3.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>数字赋能走航溯源，重塑精准监管流程</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/fMa6C0Gm7hztaq3D-YDz1Q')">详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/3">
          <div class="img"><img src="~/assets/images/img6.png" /></div>
          <div class="des">
            <div class="name">污染源管控</div>
            <p>助力精准监管污染源，有效控制重污染天在1%以内</p>
            <div class="bom flex between">
              <div class="tip">
                <span>污染源管控</span><button>AnewAir</button>
              </div>
              <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/MemL6mXoOUlRjZLw3IlbZQ')">详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/3 p-4">
          <div class="img"><img src="~/assets/images/img5.jpg" /></div>
          <div class="des">
            <div class="name">空气质量智能预报</div>
            <p>智能预报、人工订正、微信推送...AnewMap™3.0打造空气质量预报新范式</p>
            <div class="bom flex between">
              <div class="tip">
                <span>智能预报</span><button>AnewMap</button>
              </div>
               <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/2K9lLn9KqYXULXJuMB4t4Q')">详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/3 p-4">
          <div class="img"><img src="~/assets/images/img4.jpg" /></div>
          <div class="des">
            <div class="name">华南某市生态环境局</div>
            <p>颗粒物浓度连续三年下降，看看工地分级是怎么做到的</p>
            <div class="bom flex between">
              <div class="tip">
                <span>工地分级</span><button>AnewMap</button>
              </div>
               <a @click="jumpCaseDetail('https://mp.weixin.qq.com/s/Vak1MyGofmQtot2BGuS_WQ')">详情></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: "客户案例-新禾案例中心",
  meta: [{ name: "description",  content: "新禾数科以客户价值为导向，以技术创新为驱动，在大气、水、双碳等生态环境领域，为国家、省市、区县、镇街、企业以及行业个人用户，提供更高质量、更低成本、更快交付，更好服务，努力为客户、员工、合作伙伴带来更加美好的体验和发展空间，成为生态环境领域优质的数字化服务提供商。" },
    { name: "keywords", content: "新禾客户案例，新禾实践案例，环保数字化"}
  ],
});
const jumpCaseDetail = (url) => {
  window.open(url, '_blank')
}
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 480px;
  background: url("~/assets/images/contactUs/banner1.png") no-repeat center
    center;
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
      font-size: 46px;
    }
    .sub-title {
      font-size: 24px;
    }
  }
}
.case-list {
  padding: 72px 0;
}
.case_container {
    transition: all .5s;
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
</style>