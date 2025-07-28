<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <input :id="label" :type="props.type" :placeholder="placeholder" v-model="model" :readonly="props.readonly"
            :required="props.required" />
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    label?: string,
    placeholder?: string,
    type: 'text' | 'email' | 'number' | 'search' | 'username' | 'organization_id',
    readonly?: boolean,
    required?: boolean
}>(), {
    label: '',
    placeholder: '',
    type: 'text',
    readonly: false,
    required: false
})

const model = defineModel<string>({ required: true })
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: $mobile-width) {
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
