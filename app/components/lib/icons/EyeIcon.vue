<template>
    <div v-if="open" class="eye-icon open">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-eye-icon lucide-eye">
            <path
                d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    </div>
    <div v-else class="eye-icon closed">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-eye-closed-icon lucide-eye-closed">
            <path d="m15 18-.722-3.25" />
            <path d="M2 8a10.645 10.645 0 0 0 20 0" />
            <path d="m20 15-1.726-2.05" />
            <path d="m4 15 1.726-2.05" />
            <path d="m9 18 .722-3.25" />
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    open: boolean;
}>();
</script>

<style scoped lang="scss">
.eye-icon {
    width: 18px;
    height: 18px;
    transform: translateY(8px);
    cursor: pointer;

    svg {
        width: 100%;
        height: 100%;
        color: var(--color-text);
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }
}
</style>
