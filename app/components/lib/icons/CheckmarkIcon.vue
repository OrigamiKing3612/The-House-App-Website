<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check">
        <path d="M20 6 9 17l-5-5" />
    </svg>
</template>

<style lang="scss" scoped>
svg {
    color: var(--text-1);
    transition: all 0.2s ease;

    &:hover {
        color: var(--checkmark-hover);
        transform: scale(1.1);
    }
}
</style>
