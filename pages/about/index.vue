<template>
  <div id="page_about">
    <section class="nybanner flex center">
      <div class="banner-content">
        <div class="title wow fadeInUp">联系我们</div>
        <div class="sub-title">CONTACT US</div>
      </div>
    </section>
    <!--认识新禾-->
    <section class="section know">
      <div class="container">
        <div class="page_title">认识新禾</div>
        <div class="know_xinhe">
          <div class="know_xinhe_t">
            <div class="flex wrap">
              <img src="~/assets/images/text_logo.png" />
              <span
                >新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，新禾数科致力于用AIoT和SaaS新禾数字科技（无锡）有限公司，是生态环境行业资深产品研发及经营团队创办的数字化高科技公司，</span
              >
            </div>
            <p>
              新禾数字科技（无锡）有限公司由广州禾信仪器股份有限公司产业投资，广州禾信既是新禾数科投资人，也是新禾渠道商和产品服务客户之一,新禾数字科技（无锡）有限公司由广州禾信仪器股份有限公司产业投资，广州禾信既是新禾数科投资人，也是新禾渠道商和产品服务客户之一
            </p>
            <img src="~/assets/images/nyabout1.jpg" />
            <p>
              为了建设“美丽中国”，打赢“生态环境保卫战”，全国数十万环境保护从业者投身于此，夜以继日、兢兢业业，降低一毫克、减少一个污染,新禾数字科技（无锡）有限公司由广州禾信仪器股份有限公司产业投资，广州禾信既是新禾数科投资人，也是新禾渠道商和产品服务客户之一
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
        <div class="page_title">新禾文化</div>
        <div class="culture_box flex between wrap">
          <div class="item">
            <h3 class="flex">
              <img src="~/assets/images/yuan.png" /> <span>使命</span
              ><em>MISSION</em>
            </h3>
            <h2>用AIoT和SaaS推动环保行业数字化变革！</h2>
          </div>
          <div class="item">
            <h3 class="flex">
              <img src="~/assets/images/yuan.png" /> <span>愿景</span
              ><em>VISION</em>
            </h3>
            <h2>打造<i>80万</i>环保从业者爱用的软件及咨询服务!</h2>
            <div class="service flex ">
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
            <h3 class="flex">
              <img src="~/assets/images/yuan.png" /> <span>价值观</span
              ><em>VALUE</em>
            </h3>
            <ul class="flex between">
                <li>
                    <div class="value_name flex">
                        <img src="~/assets/images/va_ic_1.png" />客户为先
                    </div>
                     <p>以客户口碑，评价产品和服务</p>
                </li>
                <li>
                    <div class="value_name flex">
                        <img src="~/assets/images/va_ic_2.png" />快乐正直
                    </div>
                     <p>乐观积极、正能量、信守承诺</p>
                </li>
                <li>
                    <div class="value_name flex">
                        <img src="~/assets/images/va_ic_3.png" />坦诚清晰
                    </div>
                     <p>真实、准确、简洁、直接</p>
                </li>
                <li>
                    <div class="value_name flex">
                        <img src="~/assets/images/va_ic_4.png" />极致创新
                    </div>
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
            <div class="page_title">技术实力</div>
            <ul class="flex">
                <li>
                    <img src="~/assets/images/ruanzhu_pic.png" /> 
                    <span>获得7项软件著作权</span>
                </li>
                <li>
                    <img src="~/assets/images/shangbiao_pic.png" /> 
                    <span>4项商标注册</span>
                </li>
                <li>
                    <img src="~/assets/images/ruanzhu_pic.png" /> 
                    <span>获得3件发明专利</span>
                </li>
            </ul>
        </div>

    </section>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
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
  background-image: url("~/assets/images/topbanner.jpg");
  height: 400px;
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
    padding: 40px 70px;
    background: rgba(255, 255, 255, 0.4);
  
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
      p{
        color: #637381;
        font-size: 16px;
      }
      .service{
         text{
                    background: #208AC3;
                    padding:0 15px;
                    color:#fff;
                    font-size: 20px;
                    line-height: 36px;
                    border-radius: 18px;
                    margin-right: 40px;
                }
        dl{
            dt{
               
                margin:0 40px;
                strong{
                    color: #208AC3;
                    font-size: 28px;
                    font-weight: bold;
                }
            }
        }

      }
      ul{
       margin-top: 25px;
        li{
            padding:20px;
            box-shadow: 0px 10px 19px 0px rgba(32,138,195,0.14);
            border-radius: 12px;
            background: #fff;
            width: 23%;
            min-height: 130px;
            transition: all 0.3s;
            .value_name{
                color: #0D0C16;
                font-size: 20px;
                img{
                    margin-right: 10px;
                }
            }
            p{
                margin-top: 10px;
            }
            &:hover{
                cursor: pointer;
                transform: scale(1.12);
            }
        }
      }
    }
  }
}
.technology{
    ul{
        li{
            span{
                line-height: 28px;
                display: inline-block;
                &::before,&::after{
                   width:17px;
                   height: 28px;
                   content: "";
                   display: inline-block;
                   margin:0 15px;
                }
                &::before{
                     background: url("~/assets/images/img_left.png") no-repeat center center;
                }
                 &::after{
                     background: url("~/assets/images/img_right.png") no-repeat center center;
                }
                
            }
        }
    }
}
</style>