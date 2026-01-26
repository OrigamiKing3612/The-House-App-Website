<template>
    <TitleBar>
        <template #icon>
            <ClientOnly>
                <NuxtLink :to="`/`" v-if="colorMode.value === 'dark'">
                    <img src="/icons/dark/favicon.png" width="30" class="logo" alt="The House App Logo" />
                </NuxtLink>
                <NuxtLink :to="`/`" v-else>
                    <img src="/icons/light/favicon.png" width="30" class="logo" alt="The House App Logo" />
                </NuxtLink>
            </ClientOnly>
        </template>
        <template #tabs>
            <TitleBarItem to="/">Home</TitleBarItem>
            <TitleBarItem to="/bugs-tracker">Bugs Tracker</TitleBarItem>
            <TitleBarItem to="/blog">Blog</TitleBarItem>
            <TitleBarItem to="/contact">Contact</TitleBarItem>
        </template>
        <template #sidebar-items>
            <AppSidebar />
        </template>
    </TitleBar>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style scoped lang="scss">
.icon {
    width: 30px;
    height: 30px;
}
</style>
