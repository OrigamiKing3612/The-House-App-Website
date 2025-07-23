<template>
    <div class="text-area">
        <label :for="label" v-if="label">{{ label }}</label>
        <textarea :id="label" :placeholder="placeholder" v-model="localValue" class="area" />
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
.area {
    width: 95vw;
    max-width: 400px;
    height: 300px;
    resize: none;
    border-radius: var(--border-radius);
}
</style>
