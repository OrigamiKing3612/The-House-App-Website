<template>
<Card :title="title">

</Card>
</template>

<script lang="ts" setup>

const title = ref("v0.4.0 - [title]")

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped>

</style>