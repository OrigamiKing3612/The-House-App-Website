<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label: string,
}>()
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        text-align: left;
    }
}
</style>
