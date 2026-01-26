<template>
    <div class="docs" v-if="doc">
        <div class="header">
            <h1>{{ doc.title }}</h1>
            <div class="description">{{ doc.description }}</div>
        </div>
        <hr>
        <ContentRenderer :value="doc" />
    </div>
    <div v-else>
        An error occurred while loading the docs post.
    </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug
const { data: doc } = await useAsyncData(`docs-${slug}`, () => {
    return queryCollection('docs').path(`/docs/${slug}`).first()
})

useSeoMeta({
    title: `${doc.value?.seo.title} - Docs`,
    description: doc.value?.description,
    ogTitle: `${doc.value?.title} - Docs`,
    ogUrl: "https://the-house-app.com",
    ogImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterTitle: `${doc.value?.title} - Docs`,
})
</script>

<style scoped lang="scss">
.docs {
    width: 80vw;

    .header {
        margin-bottom: 1rem;
        text-align: left;

        .description {
            color: var(--subtext-0);
        }
    }
}

hr {
    width: 100%;
}
</style>
