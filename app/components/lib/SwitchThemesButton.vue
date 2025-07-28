<template>
    <AppSubmitButton @click="changeTheme()">
        <div v-if="props.useIcon">
            <div class="theme-button" @click="changeTheme()">
                <div v-if="colorMode.value === 'dark'">
                    <LightModeIcon width="30" height="30" />
                </div>
                <div v-else>
                    <DarkModeIcon width="30" height="30" />
                </div>
            </div>
        </div>
        <div v-else>
            Toggle theme
        </div>
    </AppSubmitButton>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const props = withDefaults(defineProps<{
    useIcon?: boolean
}>(), {
    useIcon: true
});

const changeTheme = () => {
    colorMode.preference = (colorMode.value === 'dark' ? 'light' : 'dark');
};
</script>

<style scoped lang="scss"></style>
