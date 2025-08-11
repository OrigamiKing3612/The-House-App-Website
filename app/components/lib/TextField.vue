<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input :id="label" :type="props.type" :placeholder="placeholder" v-model="model" :readonly="props.readonly"
            :required="props.required" :disabled="props.disabled" />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    label?: string,
    placeholder?: string,
    type: 'text' | 'email' | 'number' | 'search' | 'username' | 'organization_id',
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

const model = defineModel<string | number>({ required: true })
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
