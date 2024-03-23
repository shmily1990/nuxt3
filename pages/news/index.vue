<template>
  <div id="news">
    <section class="banner">
      <div class="banner-content">
        <h2>新闻动态</h2>
        <div class="title">NEWS TRENDS</div>
      </div>
    </section>
    <section class="container">
      <div class="latest-news" @click="showDetail('https://mp.weixin.qq.com/s/m7SRWUdGDSy9f1hEwvqi5Q')">
        <img src="/images/new14.png" />
        <div class="new-introduction">
          <div class="type">最新动态</div>
          <h2>新禾喜获ISO20000和ISO27001双认证</h2>
          <div class="bottom">
            <div class="time"><i class="iconfont icon-jiezhishijian" /> 2024-03-15</div>
            <i class="iconfont icon-anniu-jiantou" />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="title">全部新闻</div>
        <div class="new-list">
          <div class="new-list-item" v-for="item in news" :key="item.id" @click="showDetail(item.href)">
            <img :src="`/images/${item.name}.png`" />
            <h2>{{ item.title }}</h2>
            <div class="bottom">
              <div class="time flex"><i class="iconfont icon-jiezhishijian" /> {{ item.time }}</div>
              <div class="jiantou">详情 <i class="iconfont icon-gengduo-xiangyou" /></div>
            </div>
          </div>

          <!-- <div class="new-list-item">
            <img src="~/assets/images/new/new11.png" />
            <h2>新禾副总盛世杰受邀为广州禾信营销团队培训</h2>
            <div class="bottom">
              <div class="time">2024-02-18</div>
              <div class="jiantou">详情 ></div>
            </div>
          </div>
          <div class="new-list-item">
            <img src="~/assets/images/new/new12.png" />
            <h2>新禾副总盛世杰受邀为广州禾信营销团队培训</h2>
            <div class="bottom">
              <div class="time">2024-02-18</div>
              <div class="jiantou">详情 ></div>
            </div>
          </div> -->
        </div>
        <a-pagination v-model:current="current" :total="11" :defaultPageSize="pageSize" show-less-items size="middle" class="my-pagination" />
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: '新闻动态 – 新禾数字科技（无锡）有限公司',
  meta: [
    {
      name: 'description',
      content:
        '新禾数科秉持“用AIoT和SaaS推动环保行业数字化变革”的使命，以客户价值为导向，以技术创新为驱动，在大气、水、双碳等生态环境领域，为国家、省市、区县、镇街、企业以及行业个人用户，提供更高质量、更低成本、更快交付，更好服务，努力为客户、员工、合作伙伴带来更加美好的体验和发展空间，成为生态环境领域优质的数字化服务提供商。',
    },
    { name: 'keywords', content: '新禾公司，新禾数字科技，新禾动态' },
  ],
});
const current = ref(1);
const pageSize = ref(9);
const imageList = reactive([
  {
    title: '获颁发明专利证书！一种基于机器学习的O3余量预测方法',
    name: 'new13',
    time: ' 2024-03-01',
    id: '13',
    href: 'https://mp.weixin.qq.com/s/EKOgiOH-a9vf9psnKT7RQQ',
  },
  {
    title: '喜报！新禾团队入选无锡经开区2023年度“尚贤人才计划”',
    name: 'new1',
    time: '2024-02-18',
    id: '0',
    href: 'https://mp.weixin.qq.com/s/PEu3m7k-lrRgK1nc8rSfKg',
  },
  {
    title: '新禾副总盛世杰受邀为广州禾信营销团队培训',
    name: 'new2',
    time: '2024-01-26',
    id: 1,
    href: 'https://mp.weixin.qq.com/s/QaGgLYmytyjyhDyT1xBdvA',
  },
  {
    title: '江苏省常州环境监测中心一行至新禾探讨臭氧短临预报构建新路径',
    name: 'new3',
    time: '2023-11-24',
    id: 2,
    href: 'https://mp.weixin.qq.com/s/Ptmc9TrXYxEPuCFBbDVsXw',
  },
  {
    title: '省钱·省心·真智能 | AnewMap™ 3.0 新品直播发布会圆满举办',
    name: 'new4',
    time: '2023-11-10',
    id: 3,
    href: 'https://mp.weixin.qq.com/s/syOP6x_-MeEP0n06l5TLCQ',
  },
  {
    title: '第二批省星级上云企业名单公布，新禾上榜！',
    name: 'new5',
    time: '2023-11-10',
    id: 4,
    href: 'https://mp.weixin.qq.com/s/fzgSftHAjmkxJHOv2AqjQQ',
  },
  {
    title: '喜报！新禾数科顺利获得“双软”认证',
    name: 'new6',
    time: '2023-10-13',
    id: 5,
    href: 'https://mp.weixin.qq.com/s/mFxhgUXDTn6jrQU9y_dnhg',
  },
  {
    title: '广东省科技进步一等奖！恭喜禾信，共荣共誉',
    name: 'new7',
    time: '2023-09-28',
    id: 6,
    href: 'https://mp.weixin.qq.com/s/8qzWaJVhfATiS_sfXqrrOg',
  },
  {
    title: '新禾亮相第二十届北京分析测试学术报告会暨展览会（BCEIA 2023）',
    name: 'new8',
    time: '2023-09-08',
    id: 7,
    href: 'https://mp.weixin.qq.com/s/Pv4k9gVO3efCQt_B9OR0SA',
  },
  {
    title: '新禾入选“江苏省科技型中小企业”，科技创新实力再获肯定！',
    name: 'new9',
    time: '2023-08-25',
    id: 8,
    href: 'https://mp.weixin.qq.com/s/s9tKQEN5-bgsZLoQhivcYw',
  },
  {
    title: '新禾出席“江南大学-无锡经开区科技成果与技术需求对接会”',
    name: 'new10',
    time: '2023-08-25',
    id: 9,
    href: 'https://mp.weixin.qq.com/s/TlM0_i3z9dFO3apuesOZow',
  },
  {
    title: '新禾顺利通过ISO三项体系认证！”',
    name: 'new11',
    time: '2023-08-09',
    id: 10,
    href: 'https://mp.weixin.qq.com/s/VXeBYX2-iUMz_rSsthod2g',
  },
  {
    title: '南信大无锡研究院专家莅临新禾数科调研交流”',
    name: 'new12',
    time: '2023-07-19',
    id: 11,
    href: 'https://mp.weixin.qq.com/s/M-T227TIUuctZE7wtLm4HA',
  },
]);
const news = computed(() => {
  return imageList.slice(
    (current.value - 1) * pageSize.value,
    imageList.length > current.value * pageSize.value ? pageSize.value : current.value * pageSize.value,
  );
});
const showDetail = (url) => {
  window.open(url, '_blank');
};
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 480px;
  background: url('~/assets/images/new/banner.png') no-repeat center center;
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
.latest-news {
  display: flex;
  margin-top: -75px;
  background: #fff;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid rgba(99, 115, 129, 0.1);
  box-shadow: 0px 7px 30px 0px rgba(54, 62, 69, 0.12);
  img {
    border-radius: 20px;
  }
  .new-introduction {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    .type {
      margin-top: 57px;
      width: 96px;
      font-size: 16px;
      text-align: center;
      line-height: 32px;
      color: #02c7b5;
      border: 1px solid rgba(2, 199, 181, 0.4);
      border-radius: 4px;
    }
    h2 {
      margin-top: 44px;
      font-weight: bold;
      color: #000414;
      font-size: 28px;
      width: 100%;
      flex: 1;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 40px 0;
      border-top: 1px solid #f0f4f7;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 10%;
        transition: all 0.3s;
        background: #32dbc0;
        top: -1px;
      }
      .time {
        font-size: 20px;
        color: #637381;
      }
      i {
        color: #b3bdc7;
        font-size: 26px;
        cursor: pointer;
      }
    }
  }
  &:hover {
    box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
    .bottom {
      &::before {
        width: 100%;
      }
    }
  }
}
.content {
  .title {
    margin: 80px 0 47px 0;
    font-size: 40px;
    font-weight: bold;
  }
}
.new-list {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  &-item {
    width: calc(33.33333333333333% - 23px);
    background: #ffffff;
    border: 1px solid rgba(99, 115, 129, 0.1);
    box-shadow: 0px 2px 25px 0px rgba(54, 62, 69, 0.12);
    border-radius: 8px;
    transition: all 0.5s;
    -webkit-box-shadow: 0px 2px 25px 0px rgba(54, 62, 69, 0.12);
    cursor: pointer;
    -webkit-transition: -webkit-transform 0.3s linear;
    transition: -webkit-transform 0.3s linear;
    transition: transform 0.3s linear;
    transition: transform 0.3s linear, -webkit-transform 0.3s linear;

    img {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
    h2 {
      padding: 32px 20px 0 20px;
      font-size: 20px;
      font-weight: bold;
      color: #000414;
      height: 118px;
    }
    .bottom {
      height: 70px;
      // padding: 0 20px;
      line-height: 70px;
      position: relative;
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #f0f4f7;
      width: calc(100% - 40px);
      margin: 0 auto;
      align-items: center;
      &::before {
        content: '';
        position: absolute;
        height: 1px;
        width: 0;
        transition: all 0.3s;
        background: #32dbc0;
        top: -1px;
      }
      .time {
        color: #637381;
        font-size: 16px;
        i {
          color: #b3bdc7;
          font-size: 26px;
        }
      }
      .jiantou {
        color: #02c7b5;
        font-size: 14px;
        cursor: pointer;
        line-height: 26px;
        padding: 0 16px;
      }
    }
    &:hover {
      -webkit-box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      box-shadow: 0 8px 32px 0 rgba(20, 30, 49, 0.1);
      -webkit-transform: translateY(-16px);
      transform: translateY(-16px);
      .bottom {
        &::before {
          width: 100%;
        }
        .jiantou {
          background: #02c7b5;
          color: #fff;
        }
      }
    }
  }
}
.my-pagination {
  display: flex;
  justify-content: center;
  margin: 50px 0 80px 0;
}
@media (max-width: 750px) {
  .new-list {
    flex-direction: column;
    &-item {
      width: 100%;
    }
  }
  .latest-news {
    flex-direction: column;
  }
  .latest-news {
    .new-introduction {
      padding: 0 20px;
      .type {
        margin-top: 30px;
      }
      h2 {
        margin: 30px 0;
      }
      .bottom {
        padding: 20px 0;
      }
    }
  }
}
</style>
