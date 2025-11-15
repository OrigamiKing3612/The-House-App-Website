<template>
    <TitleBar :show-back-button="false" />
    <div class="all">
        <slot />
    </div>
    <Footer />
</template>

<script setup lang="ts">
import { useSeoMeta } from 'nuxt/app';

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
