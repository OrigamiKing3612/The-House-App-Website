<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input v-if="label" :id="label" v-model="model" type="date">
        <input v-else :id="label" v-model="model" type="date">
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    label?: string,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean
}>(), {
    label: '',
    placeholder: '',
    readonly: false,
    required: false
});

const model = defineModel({ required: true });
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
