<template>
    <TitleBar :show-title="true" :show-back-button="false" :show-profile="true" :show-refresh-button="true" />
    <div class="all">
        <slot />
    </div>
    <AppTabView />
</template>

<script setup lang="ts">
const colorMode = useColorMode();
</script>

<style scoped lang="scss">
.all {}
</style>
