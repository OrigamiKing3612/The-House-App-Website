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

<style scoped lang="scss"></style>
