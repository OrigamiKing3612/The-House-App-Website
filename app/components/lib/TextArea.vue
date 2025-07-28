<template>
    <div class="text-area">
        <label :for="label" v-if="label">{{ label }}</label>
        <textarea :id="label" :placeholder="placeholder" v-model="model" class="area" />
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
})

const model = defineModel<string>({ required: true })
</script>

<style scoped lang="scss">
.area {
    width: 95vw;
    max-width: 400px;
    height: 300px;
    resize: none;
    border-radius: var(--border-radius);
}
</style>
