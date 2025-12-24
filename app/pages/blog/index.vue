<template>
    <LargeTitleText>
        Blog
    </LargeTitleText>
    <div class="container">
        <div v-for="a in articles" :key="a.id">
            <NuxtLink :to="`${a.path}`" class="link">
                <div class="item">
                    <div class="title">{{ a.title }}</div>
                    <div class="description">{{ a.description }}</div>
                    <div class="extra">
                        <Badge>{{ normalizeString(a.type) }}</Badge>
                        <div class="tags">
                            <div v-for="tag in a.tags" :key="tag" class="tag">
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                    <NuxtTime class="timestamp" :datetime="a.timestamp" />
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import { normalizeString } from '#imports';

const { fetchList, articles } = useBlog()

definePageMeta({
    title: "Blog"
});

useHead({
    link: [{
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'The House App Blog RSS',
        href: 'https://the-house-app.com/blog/rss.xml'
    }]
})
onMounted(async () => {
    await fetchList()
})
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    gap: 10px;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    width: 90%;
}

.item {
    position: relative;
    padding: 20px;
    text-align: left;
    border: var(--border);
    // background-color: var(--background-1);
    border-radius: var(--border-radius);
    flex: 1;

    .title {
        color: var(--text-0);
        font-weight: bold;
        margin-bottom: 20px;
        font-size: 1.2rem;
    }

    .description {
        color: var(--subtext-0);
    }

    .extra {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 15px;

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 10px;
            font-size: 0.9rem;

            .tag {
                color: var(--subtext-2);
            }
        }
    }

    .timestamp {
        position: absolute;
        right: 15px;
        top: 10px;
        color: var(--subtext-1);
        font-size: 0.8rem;
    }
}
</style>
