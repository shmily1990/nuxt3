<template>
  <div id="page_about">
    <section class="nybanner flex center">
      <div class="banner-content">
        <img src="~/assets/images/map/topbanner_text.png" />
      </div>
    </section>
    <!--认识新禾-->
    <section class="section know">
      <div class="container">
        <div class="page_title font40">认识新禾</div>
        <div class="know_xinhe">
          <div class="know_xinhe_t">
            <div class="flex wrap">
              <img src="~/assets/images/text_logo.png" />
              <span class="text-indent-2"
                >新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS推动环保行业数字化变革，以SaaS方式提供端到端的软件及咨询服务，以订阅形成低成本、高质量、可持续交付，用AIoT收集最广泛的行业运行数据，将行业业务场景与物联网、大数据、AI技术深度融合，形成管用的行业数字化解决方案。</span
              >
            </div>
            <p class="text-indent-2">
              新禾数字科技（无锡）有限公司由广州禾信仪器股份有限公司产业投资，广州禾信既是新禾数科投资人，也是新禾渠道商和产品服务客户之一。广州禾信仪器股份有限公司（2021年科创板上市，股票代码：688622）国家火炬计划重点高新技术企业，禾信公司专注于质谱仪的自主研发、国产化及产业化，掌握质谱核心技术并具有先进工艺装配能力，是国内质谱仪领域从事自主研发的少数企业之一，面向环境监测、医疗健康、食品安全、工业生产等领域，公司提供了多种质谱产品及技术服务解决方案。
            </p>
            <img src="~/assets/images/nyabout1.jpg" />
            <p class="text-indent-2">
              为了建设“美丽中国”，打赢“生态环境保卫战”，全国数十万环境保护从业者投身于此，夜以继日、兢兢业业，降低一毫克、减少一个污染天……“新禾数科”致力于用数据智能改变环保行业的工作方式，让从业者的工作更轻松、更高效、更快乐，让全体国人的生活环境更清新、更健康、更美好！
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--part2-->
    <PageAbout />
    <!--新禾企业文化-->
    <section class="section culture">
      <div class="container">
        <div class="page_title font40">新禾文化</div>
        <div class="culture_box">
          <div class="item">
            <h3 class="flex"><img src="~/assets/images/yuan.png" /> <span>使命</span><em>MISSION</em></h3>
            <h2>用AIoT和SaaS推动环保行业数字化变革！</h2>
          </div>
          <div class="item">
            <h3 class="flex"><img src="~/assets/images/yuan.png" /> <span>愿景</span><em>VISION</em></h3>
            <h2>打造<i>80万</i>环保从业者爱用的软件及咨询服务!</h2>
            <div class="service flex">
              <text>5年内服务</text>
              <img src="~/assets/images/sanjiao.png" />
              <dl class="flex">
                <dt>
                  <p>政府租户</p>
                  <strong>500+</strong>
                </dt>
                <dt>
                  <p>企业租户</p>
                  <strong>5000+</strong>
                </dt>
                <dt>
                  <p>个人租户</p>
                  <strong>50000+</strong>
                </dt>
              </dl>
            </div>
          </div>
          <div class="item">
            <h3 class="flex"><img src="~/assets/images/yuan.png" /> <span>价值观</span><em>VALUE</em></h3>
            <ul class="flex between">
              <li>
                <div class="value_name flex"><img src="~/assets/images/va_ic_1.png" />客户为先</div>
                <p>以客户口碑，评价产品和服务</p>
              </li>
              <li>
                <div class="value_name flex"><img src="~/assets/images/va_ic_2.png" />快乐正直</div>
                <p>乐观积极、正能量、信守承诺</p>
              </li>
              <li>
                <div class="value_name flex"><img src="~/assets/images/va_ic_3.png" />坦诚清晰</div>
                <p>真实、准确、简洁、直接</p>
              </li>
              <li>
                <div class="value_name flex"><img src="~/assets/images/va_ic_4.png" />极致创新</div>
                <p>敢于冒险、追求卓越、高标准</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- 技术实力 -->
    <section class="section technology">
      <div class="container">
        <div class="page_title font40">知识产权</div>
        <ul class="flex">
          <li>
            <img src="~/assets/images/ruanzhu_pic.png" />
            <span>软件著作权</span>
          </li>
          <li>
            <img src="~/assets/images/shangbiao_pic.png" />
            <span>商标注册</span>
          </li>
          <li>
            <div class="zhuanli-wrapper">
              <div class="zhuanli">
                <img src="~/assets/images/zhuanli.png" />
                <div class="text-wrapper">
                  <dl>一种自动识别出污染来源解析结果的方法及系统</dl>
                  <dl>一种结合移动监测的大气污染物快速溯源定位技术</dl>
                  <dl>一种基于机器学习的O3余量预测技术</dl>
                </div>
              </div>
            </div>
            <span>发明专利</span>
          </li>
        </ul>
      </div>
    </section>
    <PageHonor :showBtn="false" />
  </div>
</template>
<script setup>
useHead({
  title: '了解新禾-新禾数科介绍',
  meta: [
    {
      name: 'description',
      content:
        '新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，致力于用AIoT和SaaS推动环保行业数字化变革，以SaaS方式提供端到端的软件及咨询服务，以订阅形成低成本、高质量、可持续交付，用AIoT收集最广泛的行业运行数据，将行业业务场景与物联网、大数据、AI技术深度融合，形成管用的行业数字化解决方案。',
    },
    { name: 'keywords', content: '新禾数科，新禾数字科技，环保数字化' },
  ],
});
</script>
<style lang="less" scoped>
#page_about {
  margin-bottom: 70px;
}
.nybanner {
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  //   background-attachment: fixed;
  background-size: cover;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  padding: 50px 0;
  position: relative;
  text-align: center;
  background-image: url('~/assets/images/topbanner.jpg');
  height: 480px;
  .banner-content {
    color: #fff;
    .title {
      font-size: 48px;
      font-weight: bold;
      text-shadow: 0px 3px 16px rgba(24, 86, 141, 0.3);
    }
    .sub_title {
      font-size: 18px;
      text-shadow: 0px 3px 10px rgba(24, 86, 141, 0.3);
      font-weight: bold;
    }
  }
}
.know_xinhe {
  .know_xinhe_t {
    font-size: 16px;
    color: #1f2429;
    line-height: 32px;
    div {
      margin-bottom: 35px;
      img {
        margin-right: 50px;
      }
      span {
        flex: 1;
      }
    }
    p {
      margin: 10px 0;
      text-indent: 20px;
    }
  }
}
.about_cards {
  margin-top: 60px;
}
.culture {
  background: url(~/assets/images/wenhua_bg.jpg) no-repeat center center;
  overflow: hidden;
  .culture_box {
    border: 3px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    padding: 40px 50px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    .item {
      h2 {
        color: #1f2429;
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 30px;
      }
      h3 {
        color: #000414;
        font-size: 20px;
        img {
          //   margin-right: 0px;
        }
        span {
          margin: 0 20px;
          font-weight: bold;
        }
        em {
          color: #828f9a;
          font-size: 16px;
        }
      }
      p {
        color: #637381;
        font-size: 16px;
      }
      .service {
        text {
          background: #208ac3;
          padding: 0 15px;
          color: #fff;
          font-size: 20px;
          line-height: 36px;
          border-radius: 18px;
          margin-right: 40px;
        }
        dl {
          dt {
            margin: 0 40px;
            strong {
              color: #208ac3;
              font-size: 28px;
              font-weight: bold;
            }
          }
        }
      }
      ul {
        margin-top: 25px;
        li {
          padding: 20px 15px;
          box-shadow: 0px 10px 19px 0px rgba(32, 138, 195, 0.14);
          border-radius: 12px;
          background: #fff;
          width: 24%;
          min-height: 130px;
          transition: all 0.3s;
          .value_name {
            color: #0d0c16;
            font-size: 20px;
            img {
              margin-right: 10px;
            }
          }
          p {
            margin-top: 10px;
          }
          &:hover {
            cursor: pointer;
            transform: scale(1.12);
          }
        }
      }
    }
  }
}
.technology {
  ul {
    justify-content: space-between;
    li {
      width: 32%;
      display: flex;
      flex-direction: column;
      span {
        line-height: 28px;
        display: inline-block;
        text-align: center;
        padding-top: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #1f2429;
        &::before,
        &::after {
          width: 17px;
          height: 28px;
          content: '';
          display: inline-block;
          margin: 0 15px;
        }
        &::before {
          background: url('~/assets/images/img_left.png') no-repeat center center;
        }
        &::after {
          background: url('~/assets/images/img_right.png') no-repeat center center;
        }
      }
      .zhuanli {
        display: flex;
        align-items: stretch;
        img {
          position: relative;
          z-index: 9;
        }
      }
      .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transform: translateX(-10px);
        dl {
          background: linear-gradient(0deg, #ffffff, #fbfdff);
          border: 1px solid rgba(99, 115, 129, 0.1);
          border-radius: 8px;
          line-height: 44px;
          font-size: 15px;
          font-family: Source Han Sans SC;
          font-weight: 400;
          color: #1f2429;
          padding-left: 20px;
          height: 44px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
.text-indent-2 {
  text-indent: 2em !important;
}
@media (max-width: 1140px) {
  .culture {
    .culture_box {
      .item {
        p {
          font-size: 12px;
        }
      }
    }
  }
  .technology ul li .text-wrapper dl {
    font-size: 14px;
  }
}
</style>
