<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@use "@/assets/styles/main.scss" as *;

.window-controls {
    display: flex;
    flex-direction: row;
    z-index: 999;
    align-items: center;

    .titlebar-button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all ease-in-out 0.1s;
        background-color: var(--main-background);
        color: var(--text);
        border-radius: 0;
        border: 0;

        &.close {

            &:hover,
            &:active {
                background-color: red;
                color: var(--text);
            }
        }

        &:hover,
        &:active {
            background-color: var(--background-primary);
            color: var(--text);
        }
    }
}

.list-enter-active,
.list-leave-active {
    transition: opacity 1.0s;
}

.list-enter,
.list-leave-to {
    opacity: 0;
}
</style>
