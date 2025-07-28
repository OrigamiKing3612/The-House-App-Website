<template>
    <div class="text-field">
        <label :for="label" v-if="label">{{ label }}</label>
        <div class="input-wrapper">
            <input :id="label" :type="type" :placeholder="placeholder" v-model="model" :readonly="props.readonly"
                :required="props.required" />
            <button v-if="!props.readonly && model != ''" type="button" class="toggle-password"
                @click="show_password = !show_password">
                <EyeIcon :open="show_password" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    label?: string,
    placeholder?: string,
    readonly?: boolean,
    required?: boolean
}>(), {
    placeholder: '',
    readonly: false,
    required: false
})

const model = defineModel<string>({ required: true })
const show_password = ref(false)
const type = computed(() => show_password.value ? 'text' : 'password')
</script>

<style scoped lang="scss">
.text-field {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.input-wrapper {
    position: relative;
    // width: 100%;
}

.toggle-password {
    position: absolute;
    right: 0.5rem;
    top: 25%;
    // transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: var(--text);
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

    .toggle-password {
        margin-right: 2rem;
    }
}
</style>
