<template>
    <Card title="Changelog">
        <div v-for="v in Object.values(data.changelogs).reverse()">
            <NuxtLink :to="`/changelog/v/${v.version}`" class="link">
                <AppSubmitButton>
                    v{{ v.version }}
                </AppSubmitButton>
            </NuxtLink>
        </div>
    </Card>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: "tab-view",
    title: "Changelog"
});
</script>

<style scoped lang="scss"></style>
