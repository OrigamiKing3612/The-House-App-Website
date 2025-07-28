<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input v-if="label" :id="label" v-model="model" type="time">
        <input v-else :id="label" v-model="model" type="time">
    </div>
</template>

<script setup lang="ts">
defineProps<{
    label?: string,
    placeholder: string,
}>()

const model = defineModel<string>({ required: true })
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
