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
        <div class="case_container w-1/2 md:w-1/4 p-4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a>详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/4 p-4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a>详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/4 p-4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a>详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a>详情></a>
            </div>
          </div>
        </div>
        <div class="case_container w-1/2 md:w-1/4 p-4">
          <div class="img"><img src="~/assets/images/img1.jpg" /></div>
          <div class="des">
            <div class="name">大气走航精准溯源</div>
            <p>这样做事件交办，办结效率轻松提升30%，整改率高达93%</p>
            <div class="bom flex between">
              <div class="tip">
                <span>走航溯源</span><button>AnewAir</button>
              </div>
              <a>详情></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
.banner {
  width: 100%;
  height: 400px;
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