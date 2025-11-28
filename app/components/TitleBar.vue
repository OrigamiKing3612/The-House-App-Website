<template>
    <div class="title-bar">
        <div class="left-window-controls">
            <ClientOnly>
                <div v-if="colorMode.value === 'dark'">
                    <NuxtImg src="/logo/icon-dark.png" width="30" class="logo" alt="House App Logo" />
                </div>
                <div v-else>
                    <NuxtImg src="/logo/icon.png" width="30" class="logo" alt="House App Logo" />
                </div>
            </ClientOnly>
            <!-- <BackButton v-if="props.showBackButton" /> -->
            <div class="tabs" id="tabs">
                <NuxtLink to="/" active-class="active" class="link">
                    <p class="title">Home</p>
                </NuxtLink>
                <NuxtLink to="/bugs-tracker" active-class="active" class="link">
                    <p class="title">Bug Tracker</p>
                </NuxtLink>
                <NuxtLink to="/blog" active-class="active" class="link">
                    <p class="title">Blog</p>
                </NuxtLink>
                <!-- <NuxtLink to="/about" active-class="active" class="link"> -->
                <!--     <p class="title">About</p> -->
                <!-- </NuxtLink> -->
                <NuxtLink to="/contact" active-class="active" class="link">
                    <p class="title">Contact Us</p>
                </NuxtLink>
            </div>
        </div>
        <div class="right-window-controls">
            <SwitchThemesButton />
        </div>
    </div>
    <ClientOnly>
        <div class="sidebar">
            <SidebarButton v-model="sidebar_open" />
            <Sidebar v-model="sidebar_open" />
        </div>
    </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
    showBackButton: boolean,
}>();
const colorMode = useColorMode();
const sidebar_open = ref(false);
</script>

<style scoped lang="scss">
.title-bar {
    position: fixed;
    top: env(safe-area-inset-top, 0);
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: calc(55px + env(safe-area-inset-top, 0));
    padding-top: env(safe-area-inset-top, 0);

    background-color: var(--background-0);
    border-bottom: var(--divider-thin);
    z-index: 999;
    transition: background-color 0.3s ease;

    .left-window-controls {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-left: max(20px, env(safe-area-inset-left, 0));
    }

    .right-window-controls {
        display: flex;
        align-items: center;
        gap: 15px;
        padding-right: max(20px, env(safe-area-inset-right, 0));
    }
}

@media (max-width: 450px) {
    .theme-button {
        display: none;
    }
}

@media (max-width: 650px) {
    #tabs {
        display: none;
    }
}

@media (min-width: 650px) {
    .sidebar {
        display: none;
    }
}

.tabs {
    display: flex;
    flex-direction: row;
    align-items: center;

    .title {
        font-size: 24px;
        margin: 0 15px;
        font-weight: bold;
        color: var(--text-0);

        &:hover {
            color: var(--accent);
            cursor: pointer;
        }
    }

}
</style>
