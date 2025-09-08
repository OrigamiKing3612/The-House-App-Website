<template>
    <Card title="Changelog">
        <div v-for="v in data">
        <NuxtLink :to="`/changelog/v/${v.text}`" class="link">
        <AppSubmitButton>
            {{ v.version }}
        </AppSubmitButton>
        </NuxtLink>
        </div>
    </Card>
</template>

<script lang="ts" setup>
const data = [
    {
        text: "0.4.0",
        version: "v0.4.0"
    },
]

</script>

<style scoped lang="scss">

</style>