<template>
    <Card title="Blog">
        <div v-for="a in articles" :key="a.id">
            <NuxtLink :to="`${a.path}`" class="link">
                <AppSubmitButton>
                    {{ a.title }}
                </AppSubmitButton>
            </NuxtLink>
        </div>
    </Card>
</template>

<script setup lang="ts">

const { fetchList, articles } = useBlog()

definePageMeta({
    title: "Blog"
});

await fetchList()
</script>
