<template>
    <h1 class="large-title">
        <slot />
    </h1>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.large-title {
    font-size: clamp(2rem, 10vw, 6em);
    text-align: left;
    line-height: 85%;
    letter-spacing: -5px;
    margin: 0px 0px 40px 0px
}

@media (max-width: $mobile-width) {
    .large-title {
        letter-spacing: -1px;
    }
}
</style>
