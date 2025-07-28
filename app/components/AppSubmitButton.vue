<template>
    <button class="app-submit-button" :class="{ 'loading': loading, 'danger': props.danger }" type="submit"
        :disabled="loading" @click="clickAction">
        <slot />
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: "click"): void
}>();
const props = defineProps<{
    danger?: boolean,
}>();

const loading = ref();

function clickAction() {
    loading.value = true;
    emit("click");
    loading.value = false;
}

</script>

<style scoped lang="scss">
.app-submit-button {
    background-color: var(--main-background);
    color: var(--text);
    border: 3px solid var(--text);
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 15px;
    box-shadow: 0 0 0 var(--primary);
    transition: box-shadow 0.5;

    &:hover {
        background-color: var(--background-primary);
        box-shadow: 3px 3px 0px var(--primary);
    }

    &.loading {
        background-color: var(--submit-button-loading);
        // TODO: fix this
        cursor: not-allowed;

        &:hover {
            background-color: var(--submit-button-loading-hover);
        }
    }

    &.danger {
        &:hover {
            // background-color: var(--submit-button-danger);
            box-shadow: 3px 3px 0px var(--submit-button-danger-hover);
        }
    }
}
</style>
