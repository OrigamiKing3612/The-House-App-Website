<template>
    <div class="card">
        <div class="v-container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
</script>


<style lang="scss" scoped>
.card {
    padding: 20px;
    background-color: var(--main-background);
    border-radius: var(--border-radius);
    border: var(--border);
    max-width: 450px;

    .v-container {
        flex-direction: column;
    }
}
</style>
