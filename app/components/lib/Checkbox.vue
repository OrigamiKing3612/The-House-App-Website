<template>
    <div class="checkbox-container">
        <label :for="label" v-if="label">{{ label }}</label>
        <input v-if="label" :id="label" v-model="localValue" type="checkbox" class="input-checkbox">
        <input v-else v-model="localValue" type="checkbox" class="input-checkbox">
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    label?: string,
    value: boolean
}>();
const localValue = ref(props.value)

watch(() => props.value, (newValue) => {
    localValue.value = newValue
})

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})
const emit = defineEmits(["update:modelValue"]);

</script>

<style lang="scss" scoped>
.checkbox-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
