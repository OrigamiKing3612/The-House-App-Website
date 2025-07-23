<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input v-if="label" :id="label" v-model="localValue" type="time">
        <input v-else :id="label" v-model="localValue" type="time">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        required: false
    },
    placeholder: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    readonly: {
        type: Boolean,
        default: false
    },
    required: {
        type: Boolean,
        default: false
    }
})

const localValue = ref(props.value)

watch(() => props.value, (newValue) => {
    localValue.value = newValue
})

watch(localValue, (newValue) => {
    emit('update:modelValue', newValue)
})
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
