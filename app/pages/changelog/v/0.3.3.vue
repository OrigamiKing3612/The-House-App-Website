<template>
    <Card :title="title">
        <p>This update adds deleting announcements. Announcements can now be deleted by pressing the pencil icon on the
            announcement.</p>
    </Card>
</template>

<script lang="ts" setup>

const title = ref(data.changelogs["0.3.3"].title)

definePageMeta({
    layout: "default",
    title: title.value
});
</script>

<style lang="scss" scoped></style>
