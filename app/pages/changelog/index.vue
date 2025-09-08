<template>
    <Card title="Changelog">
        <div v-for="v in data.reverse()">
            <NuxtLink :to="`/changelog/v/${v.text}`" class="link">
                <AppSubmitButton>
                    v{{ v.text }}
                </AppSubmitButton>
            </NuxtLink>
        </div>
    </Card>
</template>

<script lang="ts" setup>
const data = [
    {
        text: "0.3.1"
    },
    {
        text: "0.3.2"
    },
    {
        text: "0.3.3"
    },
    // {
    //     text: "0.4.0",
    // },
]

definePageMeta({
    layout: "tab-view",
    title: "Changelog"
});
</script>

<style scoped lang="scss"></style>
