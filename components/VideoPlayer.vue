<template>
    <a-modal v-model:open="visable" :footer="null" centered width="80%" @cancel="cancel" destroyOnClose>
      <video width="100%" height="100%" controls>
        <source :src="url" type="video/mp4">
      </video>
    </a-modal>
</template>
<script setup>
const props = defineProps({
    visable: {
        type: Boolean,
        default: false
    },
    url: {
        type: String,
        default: 'https://file.qingflow.com/official-page/index/v2022/section1.mp4'
    }
})
let emit = defineEmits(["update:visable"])
const { visable, url } = toRefs(props)
const cancel = () => {
    emit("update:visable", false)
}
</script>
<style lang="less">
.ant-modal {
    &-content {
        padding: 0 !important;
        background-color: inherit !important;
    }
}
</style>