<template>
    <div :class="{ separator: separator, 'context-menu-item': !separator, danger: danger }">
        <div class="icon">
            <slot name="icon" />
        </div>

        <div class="content">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    separator?: boolean,
    danger?: boolean,
}>();
</script>

<style scoped lang="scss">
.context-menu-item {
    display: flex;
    flex-direction: row;
    padding: 5px 10px;
    gap: 10px;
    text-align: left;
    align-items: center;

    .icon {
        display: inline-flex;
        width: 1rem;
        height: 1rem;
        transform: translateY(-4px);

        svg {
            width: 100%;
            height: 100%;
            display: block;
        }
    }

    .content {
        flex: 1;
    }

    &:hover {
        background-color: var(--background-2);
        border-radius: var(--border-radius);
        cursor: pointer;
    }
}

.danger {
    color: var(--submit-button-danger);

    &:hover {
        background-color: var(--submit-button-danger-hover);
        border-radius: var(--border-radius);
        cursor: pointer;
    }
}

.separator {
    padding: 0;
    border-bottom: var(--border);
    margin: 4px 0;
    height: 0;
}
</style>
