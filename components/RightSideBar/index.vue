<template>
  <div class="right-side-bar">
    <div class="button-item" @click="handleClick('https://doc.weixin.qq.com/forms/AKIASgdJACwAaQAlwa_ANAMhEg0A6uTEf')">
      <i class="iconfont icon-shangwuzixun"></i>
      <p>商务咨询</p>
    </div>
    <div class="button-item relative" @click="handleClick('https://work.weixin.qq.com/kfid/kfcb9bde46a45113692')">
      <i class="iconfont icon-kefu"></i>
      <p>在线客服</p>
    </div>

    <a-popover placement="left">
      <template #content>
        <img src="~/assets/images/contactUs/qr-3.png" style="width: 118px; height: 118px" />
      </template>
      <div class="button-item flex justify-center">
        <i class="iconfont icon-erweima"></i>
      </div>
    </a-popover>
    <a-popover placement="left">
      <template #content>
        <p class="text-sm" style="color: #637381">咨询电话</p>
        <p class="text-lg" style="color: #02c7b5">189-1248-3668</p>
      </template>
      <div class="button-item flex justify-center">
        <i class="iconfont icon-lianxidianhua"></i>
      </div>
    </a-popover>
  </div>
  <div class="m_right-side-bar">
    <div class="button-item" @click="handleClick('https://doc.weixin.qq.com/forms/AKIASgdJACwAaQAlwa_ANAMhEg0A6uTEf')">
      <i class="iconfont icon-shangwuzixun"></i>
      <p>商务咨询</p>
    </div>
    <div class="button-item" @click="handleClick('https://work.weixin.qq.com/kfid/kfcb9bde46a45113692')">
      <i class="iconfont icon-kefu"></i>
      <p>在线客服</p>
    </div>

    <a-popover>
      <template #content>
        <img src="~/assets/images/contactUs/qr-3.png" style="width: 118px; height: 118px" />
      </template>
      <div class="button-item">
        <i class="iconfont icon-erweima"></i>
        <p>关注我们</p>
      </div>
    </a-popover>
    <a-popover>
      <template #content>
        <p class="text-sm" style="color: #637381">咨询电话</p>
        <p class="text-lg" style="color: #02c7b5">189-1248-3668</p>
      </template>
      <div class="button-item">
        <i class="iconfont icon-lianxidianhua"></i>
        <p>咨询电话</p>
      </div>
    </a-popover>
  </div>
</template>
<script setup>
const handleClick = (url) => jumpWechat(url);
</script>
<style lang="less" scoped>
.right-side-bar {
  position: fixed;
  right: 20px;
  z-index: 200;
  top: 50%;
  transform: translateY(-50%);
  width: 64px;
  height: 272px;
  background: #ffffff;
  border: 1px solid rgba(99, 115, 129, 0.08);
  box-shadow: 0px 3px 20px 0px rgba(54, 62, 69, 0.14);
  border-radius: 8px;
  .button-item {
    // height: 56px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    i {
      font-size: 30px;
      color: #828f9a;
    }
    p {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #1f2429;
    }
    &:hover {
      i {
        color: #02c7b5;
      }
      p {
        color: #02c7b5;
      }
    }
    // &:nth-child(1) {
    //     i {
    //         color: #828F9A;
    //     }
    // }
    &:nth-child(2) {
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 15px;
        width: 32px;
        height: 2px;
        background: #f0f4f7;
      }
    }
    &:nth-child(3) {
      i {
        color: #828f9a;
      }
      &:hover {
        background: #02c7b5;
        i {
          color: #ffffff;
        }
      }
    }
    &:nth-child(4) {
      i {
        color: #828f9a;
      }
      &:hover {
        background: #02c7b5;
        i {
          color: #ffffff;
        }
      }
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 10px;
}
.m_right-side-bar {
  position: fixed;
  z-index: 200;
  bottom: 0;
  // transform: translateY(-50%);
  width: 100%;
  height: 64px;
  background: #ffffff;
  border: 1px solid rgba(99, 115, 129, 0.08);
  box-shadow: 0px 3px 20px 0px rgba(54, 62, 69, 0.14);

  // border-radius: 8px;
  .button-item {
    // height: 56px;
    text-align: center;
    flex: 1;
    cursor: pointer;
    i {
      font-size: 30px;
      color: #828f9a;
    }
    p {
      font-size: 12px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: #1f2429;
    }
    &:hover {
      i {
        color: #02c7b5;
      }
      p {
        color: #02c7b5;
      }
    }
    // &:nth-child(1) {
    //     i {
    //         color: #828F9A;
    //     }
    // }
    &:nth-child(2) {
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 15px;
        width: 32px;
        height: 2px;
        background: #f0f4f7;
      }
    }
    &:nth-child(3) {
      i {
        color: #828f9a;
      }
      &:hover {
        background: #02c7b5;
        i {
          color: #ffffff;
        }
      }
    }
    &:nth-child(4) {
      i {
        color: #828f9a;
      }
      &:hover {
        background: #02c7b5;
        i {
          color: #ffffff;
        }
      }
    }
  }
  display: flex;
  // flex-direction: column;
  align-items: center;
  display: none;
  // justify-items: center;
  // gap: 10px;
}
@media (max-width: 750px) {
  .right-side-bar {
    display: none;
  }
  .m_right-side-bar {
    display: flex;
    .button-item {
      i {
        font-size: 30px;
        color: #828f9a;
        height: 37px;
        display: inline-block;
      }
    }
  }
}
</style>
