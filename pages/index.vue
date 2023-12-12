<template>
    <div>
        <NuxtLayout :name="layout">
          <nuxt-link to='/about'>关于我们</nuxt-link>
          {{ year }}
          <div>{{ msg }}</div>
          <div>{{ counter }}</div>
	  </NuxtLayout>
    </div>
</template>
<script setup>
definePageMeta({
  title: '关于我们',
  middleware: (to) => {
    console.log(to, 12123123)
    // return navigateTo("/about");
  },
});
const layout = 'default';
const year = getYear()
const msg = ref('this is my message')
const counter = useState('counter', () => Math.round(Math.random() * 1000))
</script>