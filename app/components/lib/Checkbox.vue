<template>
    <div class="checkbox-container">
        <label :for="label" v-if="label">{{ label }}</label>
        <input v-if="label" :id="label" v-model="model" type="checkbox" class="input-checkbox">
        <input v-else v-model="model" type="checkbox" class="input-checkbox">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string,
}>();
const model = defineModel({ required: true })
</script>

<style lang="scss" scoped>
.checkbox-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
