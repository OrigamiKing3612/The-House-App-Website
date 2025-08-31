<template>
    <div v-if="props.useIcon" @click="changeTheme(() => { })">
        <div class="theme-button">
            <LightModeIcon v-show="colorMode.value === 'dark'" width="30" height="30" />
            <DarkModeIcon v-show="colorMode.value !== 'dark'" width="30" height="30" />
        </div>
    </div>
    <div v-else @click="changeTheme(() => { })">
        Toggle theme
    </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const props = withDefaults(defineProps<{
    useIcon?: boolean
}>(), {
    useIcon: true
});

const changeTheme = (done: () => void) => {
    colorMode.preference = (colorMode.value === 'dark' ? 'light' : 'dark');
    done();
};
</script>

<style scoped lang="scss">
.theme-button {
    padding: 5px 15px;

    &:hover {
        background-color: var(--background-primary);
        border-radius: var(--border-radius);
        transform: scale(1.05);
    }
}
</style>
