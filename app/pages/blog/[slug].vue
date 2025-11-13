<template>
    <div class="blog" v-if="post">
        <div class="header">
            <h1>{{ post.title }}</h1>
            <div class="description">{{ post.description }}</div>
        </div>
        <hr>
        <ContentRenderer :value="post" />
        <ReleaseFooter v-if="post.type == 'release'" />
    </div>
    <div v-else>
        An error occurred while loading the blog post.
    </div>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
    return queryCollection('blog').path(`/blog/${slug}`).first()
})

useSeoMeta({
    title: `Changelog - ${post.value?.seo.title}`,
    description: post.value?.description,
    ogTitle: `Changelog - ${post.value?.title}`,
    ogUrl: "https://the-house-app.com",
    ogImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterImage: "https://the-house-app.com/web-app-manifest-192x192.png",
    twitterTitle: `Changelog - ${post.value?.title}`,
})
</script>

<style scoped lang="scss">
.blog {
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
