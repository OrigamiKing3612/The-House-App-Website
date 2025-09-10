<template>
    <Card :title="title">
        <p>This update adds deleting announcements. Announcements can now be deleted by pressing the pencil icon on the
            announcement.</p>
    </Card>
</template>

<script lang="ts" setup>

const title = ref("v0.3.3 - Deleting Announcements")

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped></style>
