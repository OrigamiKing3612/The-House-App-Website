<template>
    <div class="title-bar">
        <div class="left-window-controls">
            <NuxtLink to="/">
                <img src="~/assets/images/logo-icon.png" width="30" class="logo" alt="House App Logo">
            </NuxtLink>
        </div>
        <div class="right-window-controls">
            <SwitchThemesButton />
        </div>
    </div>
</template>

<script setup lang="ts">
const leftPadding = ref("10px");

const colorMode = useColorMode();

function changeTheme() {
    colorMode.preference = (colorMode.value === 'dark' ? 'light' : 'dark')
}
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
    }
}

@media (max-width: 900px) {
    .title-bar {
        background-color: var(--main-background);
    }
}

@media (max-width: 450px) {
    .theme-button {
        display: none;
    }
}

.logo {
    margin: 10px;
}
</style>
