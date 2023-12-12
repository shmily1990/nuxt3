<template>
  <div>
    <span>新闻中心</span>
  </div>
</template>
<script setup>
definePageMeta({
    middleware: ["listen"]
})
// 自定引入css文件
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>
<style lang="less" scoped>
.title {
  font-size: 26px;
  color: @primary;
}
</style>