<template>
    <Card :title="title">
        <p>This update brings UI fixes and improvements.</p>
    </Card>
</template>

<script lang="ts" setup>

const title = ref("v0.3.1 - UI fixes and improvements")

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped></style>
