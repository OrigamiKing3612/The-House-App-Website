<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input :id="label" :type="props.type" :placeholder="placeholder" v-model="localValue" :readonly="props.readonly"
            :required="props.required" />
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
onMounted(() => {
    if (props.type === "password") {
        console.warn("Using 'password' type in TextField is not recommended. Use PasswordField instead.");
    }
});
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 450px) {
    .text-field {
        flex-direction: column;
        align-items: stretch;
    }

    .text-field label {
        text-align: left;
        margin-bottom: 0.25rem;
    }
}
</style>
