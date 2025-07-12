<template>
  <button
    class="app-submit-button" :class="{ 'loading': isLoading, 'danger': props.danger}" type="submit"
    @click="clickAction"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
const isLoading = ref();

const props = defineProps({
    danger: {
        type: Boolean,
        default: false,
    },
});

function clickAction() {
  isLoading.value = true;
  emit("click");
  isLoading.value = false;
}

const emit = defineEmits(["click"]);
</script>

<style scoped lang="scss">
@use "@/assets/styles/main.scss" as *;
@use "@/assets/styles/lib/_housecolors.scss" as *;

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

