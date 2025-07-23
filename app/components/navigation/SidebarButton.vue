<template>
    <div class="sidebar-button">
        <button class="sidebar-button-button" @click="localValue = !localValue">
            <ChevronLeftIcon style="width: 30px; height: 30px;" />
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    value: boolean
}>();

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
.sidebar-button {
    position: fixed;
    bottom: 80px;
    right: -7px;
    z-index: 2; //makes it above the footer

    .sidebar-button-button {
        background-color: var(--main-background);
        color: var(--text);
        border: var(--border);
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        cursor: pointer;
        font-size: 15px;
        box-shadow: var(--hover-shadow);

        &:hover {
            background-color: var(--background-primary);
        }
    }
}
</style>
