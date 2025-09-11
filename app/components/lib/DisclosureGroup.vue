<template>
    <div class="disclosure-group">
        <div class="title" :class="{ open: dropdownVisible }" @click="toggleDropdown">
            <div class="closed-content">
                {{ props.label }}
                <div class="selected-option-icon" :style="{ transform: dropdownVisible ? 'rotate(90deg)' : '' }">
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
        <div v-if="dropdownVisible" class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
    label: string;
}>();

const dropdownVisible = ref(false);

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};
</script>

<style scoped lang="scss">
.title {
    border: var(--border);
    border-radius: var(--border-radius);
    height: 55px;
    line-height: 50px;
    background-color: var(--main-background);
    cursor: pointer;

    .closed-content {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;
        align-items: center;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 100%; // ensures it fits inside the dropdown
    }

    &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0px;
    }

    .selected-option-icon {
        height: 50px;
        display: flex;
        align-items: center;
        color: var(--text);
        margin-right: -7px;
        transition: transform 0.3s ease;
    }
}

.content {
    border: var(--border);
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: var(--main-background);
    height: max-content;
    max-height: 300px;
    overflow-y: auto;
    transition: transform 0.6s ease;
    padding: 0px 20px 20px 20px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    :deep(.disclosure-group) {
        margin: 0 -10px;
    }
}
</style>
