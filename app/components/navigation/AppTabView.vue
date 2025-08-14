<template>
    <div class="floating">
        <div class="tab-view">
            <NuxtLink to="/" :class="{ active: route.path === '/' }">
                <HomeIcon style="width: 30px; height: 30px;" />
            </NuxtLink>
            <NuxtLink to="/bugs" :class="{ active: route.path === '/bugs' }">
                <BugIcon style="width: 30px; height: 30px;" />
            </NuxtLink>
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
const route = useRoute();

const sidebar_open = ref(false);
</script>

<style lang="scss" scoped>
.floating {
    position: fixed;
    bottom: 10px;
    background: none;
    text-align: center;
    padding: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; //makes it under the add points button
    transition: display 0.1s ease;

    .tab-view {
        width: min-content;
        display: flex;
        justify-content: center;
        background-color: var(--main-background);
        border-radius: 20px;
        border: 2px solid var(--text);
        box-shadow: 5px 5px 0px var(--primary);
        padding: 5px 20px;
        margin: auto;

        a {
            padding: 5px 30px;
            color: var(--text);
            background-color: var(--main-background);
            border-radius: 15px;
            text-decoration: none;
            transition: background-color 0.1s ease;
            margin: 3px;

            &:hover {
                background-color: var(--background-primary);
            }

            &.active {
                background-color: var(--background-primary);

                path {
                    color: var(--primary);
                }

                :deep(svg),
                :deep(path) {
                    color: var(--primary);
                }
            }
        }
    }
}

@media (max-width: 450px) {
    .floating {
        display: none;
    }
}

@media (min-width: 451px) {
    .sidebar {
        display: none;
    }
}
</style>
