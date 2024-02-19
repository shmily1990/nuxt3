<template>
  <section class="seciton honor" id="section8">
    <div class="container">
      <div class="page_title font40 wow fadeInUp">权威认证</div>
      <ul class="flex between wow fadeInUp">
        <li>
          <img src="~/assets/images/honor1.png" />
          <p>质量管理体系</p>
        </li>
        <li>
          <img src="~/assets/images/honor2.png" />
          <p>环境管理体系</p>
        </li>
        <li>
          <img src="~/assets/images/honor3.png" />
          <p>职业健康安全管理体系</p>
        </li>
        <li>
          <img src="~/assets/images/honor4.png" />
          <p>科技型中小企业</p>
        </li>
        <li>
          <img src="~/assets/images/honor5.png" />
          <p>软件产品和软件企业认证</p>
        </li>
      </ul>
      <div class="btn_more wow fadeInUp" v-show="props.showBtn"><span @click="router.push('/about')">了解新禾 >></span></div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  showBtn: {
    type: Boolean,
    default: true,
  },
});
const router = useRouter();
</script>

<style lang="less" scoped>
// honor
.honor {
  .container {
    text-align: center;
    ul {
      li {
        width: 20%;
        text-align: center;
        img {
          margin: 0px auto 15px;
        }
        p {
          font-size: 16px;
          color: #1f2429;
        }
      }
    }
    .btn_more {
      margin-top: 40px;
    }
  }
}

@media (max-width: 750px) {
  .honor {
    .container {
      ul {
        flex-wrap: wrap;
        justify-content: space-between;
        // gap: 10px;
        li {
          width: 50%;
          margin-bottom: 20px;
          // padding: 10px;
          // gap: 10px;
          // p {
          //   font-size: 16px;
          // }
        }
      }
    }
  }
  .page_title {
    font-size: 26px;
  }
}
</style>
