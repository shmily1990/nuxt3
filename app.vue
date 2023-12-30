<template>
  <div>
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const layout = "default";
// if (process.client) {
//     const setRem = () => {
//     // 1920 默认大小16px; 1920px = 120rem ;每个元素px基础上/16
//     const screenWidth = 1920;
//     const scale = screenWidth / 16;
//     const htmlWidth =
//         document.documentElement.clientWidth || document.body.clientWidth;
//     // 得到html的Dom元素
//     const htmlDom = document.getElementsByTagName("html")[0];
//     // 设置根元素字体大小
//     const value = htmlWidth / scale
//     htmlDom.style.fontSize = value < 12 ? '12px' : value + "px";
//     }
//     setRem();
// }
</script>
<style lang="less">
//  html {
//     font-size: 13.33333333vw;
//   }

  // @media (min-width: 560px) {
  //  html {
  //     font-size: 74.66666666666667px;
  //   }
  // }

</style>