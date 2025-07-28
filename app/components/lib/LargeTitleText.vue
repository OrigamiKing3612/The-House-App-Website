<template>
    <h1 class="largeTitle">
        <slot />
    </h1>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.largeTitle {
    font-size: 6em;
    text-align: left;
    line-height: 85%;
    letter-spacing: -5px;
    margin: 0px 0px 40px 0px
}

@media (max-width: $mobile-width) {
    .largeTitle {
        font-size: 3.6em;
        line-height: 90%;
        letter-spacing: -3px;
    }
}
</style>
