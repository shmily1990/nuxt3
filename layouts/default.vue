<template>
  <div @scroll="handleScroll">
    <MyHead />
    <slot />
    <MyFooter />
    <RightSideBar v-if="isShow" />
  </div>
</template>
<script>
import { defineComponent, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const isShow = ref(false);
    watch(
      route,
      (to) => {
        const path = to.fullPath;
        isShow.value = false;
      },
      { flush: 'pre', immediate: true, deep: true },
    );
    const handleScroll = (v) => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 700) {
        isShow.value = true;
      } else {
        isShow.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll');
    });
    return {
      isShow,
      handleScroll,
    };
  },
});
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
//     htmlDom.style.fontSize = htmlWidth / scale + "px";
//     }
//     setRem();
// }
// const setRem = () => {
//   // 1920 默认大小16px; 1920px = 120rem ;每个元素px基础上/16
//   const screenWidth = 1920;
//   const scale = screenWidth / 16;
//   const htmlWidth =
//     document.documentElement.clientWidth || document.body.clientWidth;
//   // 得到html的Dom元素
//   const htmlDom = document.getElementsByTagName("html")[0];
//   // 设置根元素字体大小
//   htmlDom.style.fontSize = htmlWidth / scale + "px";
// }

// on(() => {
//     // 初始化
//     setRem();
//     // 改变窗口大小时重新设置 rem
//     window.onresize = function () {
//         setRem();
//     };
// })
</script>
