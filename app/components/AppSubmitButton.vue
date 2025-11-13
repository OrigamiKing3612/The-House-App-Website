<template>
    <button class="app-submit-button" :class="{ 'loading': loading, 'danger': props.danger }" :type="type ?? 'submit'"
        :disabled="loading" @click="clickAction">
        <template v-if="!loading">
            <slot />
        </template>
        <template v-else>
            <span class="spinner"></span>
        </template>
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    click: [done: () => void]
}>();
const props = defineProps<{
    danger?: boolean,
    type?: 'button' | 'submit' | 'reset' | undefined | null
}>();

const loading = ref<boolean>(false);
const hasClickListener = getCurrentInstance()?.vnode.props?.onClick;

async function clickAction() {
    if (loading.value) return;

    loading.value = true;

    if (hasClickListener) {
        emit("click", () => {
            loading.value = false;
        });
    } else {
        loading.value = false;
    }
}
</script>

<style scoped lang="scss">
.app-submit-button {
    background-color: var(--background-0);
    color: var(--text-1);
    border: 3px solid var(--text-1);
    border-radius: var(--border-radius);
    padding: 10px 20px;
    cursor: pointer;
    font-size: 15px;
    box-shadow: 0 0 0 var(--accent);
    transition: box-shadow 0.1s;

    &:hover {
        background-color: var(--background-1);
        box-shadow: 3px 3px 0px var(--accent);
    }

    &.loading {
        background-color: var(--submit-button-loading);
        cursor: not-allowed;

        &:hover {
            background-color: var(--submit-button-loading-hover);
        }
    }

    &.danger {
        &:hover {
            box-shadow: 3px 3px 0px var(--submit-button-danger-hover);
        }
    }
}

.spinner {
    width: 1em;
    height: 1em;
    border: 2px solid var(--text-1);
    border-top-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
