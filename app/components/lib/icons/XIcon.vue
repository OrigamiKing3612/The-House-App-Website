<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
</template>

<style lang="scss" scoped>
svg {
    color: var(--text);
    transition: all 0.2s ease;

    &:hover {
        color: var(--x-hover);
        transform: scale(1.1);
    }
}
</style>
