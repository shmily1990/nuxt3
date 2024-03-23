<template>
  <div class="about_cards">
    <div class="container">
      <ul class="flex between wow fadeInUp pc">
        <li class="dh">
          <div class="li_bg"><img src="~/assets/images/box1.png" /></div>
          <div class="li_item">
            <div class="name">
              <img src="~/assets/images/box_title1.png" />
            </div>
            <p>环保行业，深耕20年产品研发及经营团队创办的高科技公司，致力于用<span>AIoT和SaaS推动环保行业数字化变革！</span></p>
          </div>
        </li>
        <li class="sass">
          <div class="li_bg"><img src="~/assets/images/box2.png" /></div>
          <div class="li_item">
            <div class="name">
              <img src="~/assets/images/box_title2.png" />
            </div>
            <p>环保行业，<span>首家成功</span>构建“SaaS软件服务”体系，并实现商业化运行，<span>累计服务数百家</span>政府及企业客户!</p>
          </div>
        </li>
        <li class="zn">
          <div class="li_bg"><img src="~/assets/images/box3.png" /></div>
          <div class="li_item">
            <div class="name">
              <img src="~/assets/images/box_title3.png" />
            </div>
            <p>
              环保行业，<span>首家成功</span>构建”数智化咨询服务”体系，将人工智能算法深度应用于<span>“咨-测-析-管-治-评”全场景</span>环境质量达标业务!
            </p>
          </div>
        </li>
      </ul>
      <ul class="flex between wow fadeInUp mobile">
        <swiper class="case_swiper_container2" :autoplay="{ delay: 5000, disableOnInteraction: false }" :modules="mods">
          <swiper-slide key="1" class="flex justify-center">
            <li class="dh">
              <div class="li_bg"><img src="~/assets/images/box1.png" /></div>
              <div class="li_item">
                <div class="name">
                  <img src="~/assets/images/box_title1.png" />
                </div>
                <p>环保行业，深耕20年产品研发及经营团队创办的高科技公司，致力于用<span>AIoT和SaaS推动环保行业数字化变革！</span></p>
              </div>
            </li>
          </swiper-slide>
          <swiper-slide key="2" class="flex justify-center">
            <li class="sass">
              <div class="li_bg"><img src="~/assets/images/box2.png" /></div>
              <div class="li_item">
                <div class="name">
                  <img src="~/assets/images/box_title2.png" />
                </div>
                <p>环保行业，<span>首家成功</span>构建“SaaS软件服务”体系，并实现商业化运行，<span>累计服务数百家</span>政府及企业客户!</p>
              </div>
            </li>
          </swiper-slide>
          <swiper-slide key="3" class="flex justify-center">
            <li class="zn">
              <div class="li_bg"><img src="~/assets/images/box3.png" /></div>
              <div class="li_item">
                <div class="name">
                  <img src="~/assets/images/box_title3.png" />
                </div>
                <p>
                  环保行业，<span>首家成功</span>构建”数智化咨询服务”体系，将人工智能算法深度应用于<span>“咨-测-析-管-治-评”全场景</span>环境质量达标业务!
                </p>
              </div>
            </li>
          </swiper-slide>
        </swiper>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
const mods = ref([Autoplay, Pagination, Navigation, EffectFade]);
/** 断点 */
let breakpoints = ref(null);
breakpoints.value = {
  320: {
    //当屏幕宽度大于等于320
    slidesPerView: 1,
  },
  768: {
    //当屏幕宽度大于等于768
    slidesPerView: 1,
  },
  900: {
    //当屏幕宽度大于等于1280
    slidesPerView: 1,
  },
};
</script>
<style lang="less" scoped>
// about

.about_cards {
  padding: 90px 0;
  background: url('~/assets/images/bg_xinhe.jpg') no-repeat center center;
  // background-size: cover;
  object-fit: fill;
  background-size: cover;
  ul {
    li {
      max-width: 354px;
      position: relative;
      transition: all 0.5s linear;
      -webkit-transition: all 0.5s linear;
      line-height: 45px;
      &:nth-child(1) {
        .li_item {
          .name {
            &::before {
              content: '懂行';
            }
          }
        }
      }
      &:nth-child(2) {
        .li_item {
          .name {
            &::before {
              content: 'SaaS';
            }
          }
        }
      }
      &:nth-child(3) {
        .li_item {
          .name {
            &::before {
              content: '智能';
            }
          }
        }
      }
      .li_bg {
        position: relative;
        z-index: 1;
      }
      .li_item {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 00px 20px 60px;
        .name {
          position: relative;
          font-weight: bold;
          margin-bottom: 30px;
          font-size: 20px;
          color: #111018;
          line-height: 46px;
          &::before {
            content: '懂行';
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
          }
        }

        img {
          margin: 0 auto;
          // position: absolute;
          // left:50%;
          // transform:translateX(-50%) translateY(0%);
          // top:0;
        }
        p {
          font-size: 22px;
          color: #111018;
          span {
            color: #156fb7;
            font-weight: bold;
            font-size: 24px;
          }
        }
      }
      &:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
      }
    }
  }
  .mobile {
    display: none;
  }
}

@media (max-width: 750px) {
  .about_cards {
    padding: 50px 0;
    .pc {
      display: none;
    }

    ul {
      flex-wrap: wrap;
      justify-content: center;
      li {
        width: 100%;
        margin-bottom: 20px;
      }
      line-height: 45px;
      li.dh {
        .li_item {
          .name {
            &::before {
              content: '懂行';
            }
          }
        }
      }
      li.sass {
        .li_item {
          .name {
            &::before {
              content: 'SaaS';
            }
          }
        }
      }
      li.zn {
        .li_item {
          .name {
            &::before {
              content: '智能';
            }
          }
        }
      }
    }
    .mobile {
      display: flex;
    }
  }
}
</style>
