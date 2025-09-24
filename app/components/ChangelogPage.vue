<template>
    <Card :title="data.title" id="card">
        <slot />
        <h1>Bugs and Feedback</h1>
        <p>As always, if you notice any bugs or have feedback, please share it on the profile page.</p>
    </Card>
</template>

<script lang="ts" setup>
const props = defineProps<{
    data: ChangelogData;
}>()

definePageMeta({
    layout: "default",
    title: props.data.title
});

useSeoMeta({
    title: `Changelog - ${props.data.title}`,
    description: props.data.description,
    ogTitle: `Changelog - ${props.data.title}`,
    ogUrl: "https://the-house-app.com",
    ogImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterTitle: `Changelog - ${props.data.title}`,
})
</script>

<style lang="scss">
h1 {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: left;
}

h2 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: left;
}

p {
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: left;
}

ul {
    margin-top: 10px;
    margin-bottom: 10px;
}

li {
    text-align: left;
    margin-left: -5px;
}

#card {
    .v-container {
        gap: 0px;
    }
}
</style>
