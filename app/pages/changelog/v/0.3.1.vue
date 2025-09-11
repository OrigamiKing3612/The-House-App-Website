<template>
    <Card :title="title">
        <p>This update brings UI fixes and improvements.</p>
    </Card>
</template>

<script lang="ts" setup>

const title = ref(data.changelogs["0.3.1"].title)

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped></style>
