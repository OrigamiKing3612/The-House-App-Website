<template>
    <TitleBar :show-title="true" :show-back-button="false" :show-profile="true" :show-refresh-button="true" />
    <div class="all">
        <slot />
    </div>
    <AppTabView />
    <Footer />
</template>

<script setup lang="ts">
useSeoMeta({
    title: "The House App",
    description: "The House App is a cutting-edge tool designed to enrich the educational journey for students and teachers alike. It offers insights to track house-related activities and achievements, fostering engagement within the school community.",
    ogTitle: "The House App",
    ogUrl: "https://the-house-app.com",
    ogImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterTitle: "The House App",
})
</script>

<style scoped lang="scss">
.all {}
</style>
