<template>
    <div class="title-bar">
        <div class="left-window-controls">
            <!-- <div v-if="props.showTitle" class="navigation-title-container"> -->
            <!--   <div class="navigation-title" :style="'color: ' + titleBarStore.color + ';'"> -->
            <!--     {{ titleBarStore.title }} -->
            <!--   </div> -->
            <!-- </div> -->
            <NuxtLink to="/">
                <div v-if="colorMode.value === 'dark'">
                    <img src="~/assets/images/logo-icon-dark.png" width="30" class="logo"
                        alt="House App Dark Mode Logo">
                </div>
                <div v-else>
                    <img src="~/assets/images/logo-icon.png" width="30" class="logo" alt="House App Logo">
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const leftPadding = ref("10px");

</script>

<style scoped lang="scss">
.title-bar {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    // background-color: var(--main-background);
    z-index: 999;
    transition: background-color 0.3s ease;

    .right-window-controls {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 7px;
        right: 10px;
        gap: 10px;
    }

    .left-window-controls {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 7px;
        left: v-bind(leftPadding);
        gap: 10px;

        .navigation-title-container {
            z-index: 999;
        }

        .navigation-title {
            text-decoration: none;
            border: 0;
            background: var(--background-secondary);
            border-radius: 10px;
            font-weight: bold;
            color: var(--text);
            padding: 10px;
            font-size: 16px;
        }
    }
}

@media (max-width: 900px) {
    .title-bar {
        background-color: var(--main-background);
    }
}

.logo {
    margin: 10px;
}
</style>
