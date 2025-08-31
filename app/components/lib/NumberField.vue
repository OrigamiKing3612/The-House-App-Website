<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input :id="label" type="number" :placeholder="`${placeholder}`" v-model="model" :readonly="props.readonly"
            :required="props.required" :disabled="props.disabled" @input="onInput" />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    label?: string,
    placeholder?: string | number,
    readonly?: boolean,
    required?: boolean,
    disabled?: boolean
}>(), {
    label: '',
    placeholder: '',
    type: 'text',
    readonly: false,
    required: false,
    disabled: false
})

const model = defineModel<number | string>({ required: true })

const onInput = (event: Event) => {
    const input = event.target as HTMLInputElement
    // Remove any non-digit characters
    const sanitized = input.value.replace(/[^0-9]/g, "")
    input.value = sanitized
    model.value = sanitized === "" ? "" : Number(sanitized)
}
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
