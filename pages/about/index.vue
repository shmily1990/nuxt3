<template>
  <div>
    <div class="title">关于我们</div>
    <div>{{ userName }}</div>
    <div>这个是掊口数据{{ count }}</div>
    <a-spin />
    <a-steps
    :current="1"
    :items="[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]"
  ></a-steps>
    <!-- <a-button type="primary">Primary Button</a-button> -->
  </div>
</template>
<script setup>
// import { toRefs, onMounted } from 'vue'
import userPinia from "~/pinia/user";
const userStore = userPinia();
const { userName } = toRefs(userStore);
console.log(userName)
const description = "This is a description.";
// // const changeName = () => {
// //     console.log(666)
// //     userStore.setUserName('hi world')
// // }
// const title = "关于我们";
const { data: count } = await useFetch('/api/count')
onMounted(() => {
  // change
  userStore.setUserName("hi world");
});
// useHead({
//   title,
//   meta: [{ name: "description", content: "My amazing site." }],
// });
</script>
<style lang="less" scoped>
.title {
  font-size: 26px;
  color: @primary;
}
</style>