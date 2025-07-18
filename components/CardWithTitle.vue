<template>
    <div class="card">
        <h4 class="title">
            {{ props.title }}
        </h4>
        <div class="v-container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
}>();
</script>


<style lang="scss" scoped>
.card {
    position: relative;
    // padding: 40px 20px 20px;
    padding: 50px 20px 20px 20px;
    background-color: var(--main-background);
    border-radius: 20px;
    border: var(--border);
    margin-bottom: 10px;
    max-width: 450px;

    .title {
        position: absolute;
        top: -18px;
        left: 15px;
        // z-index: 2;
        // padding: 5px;
        // border-radius: 10px;
        // background-color: var(--background-primary);
        font-size: 1.4em;
        // margin: 5px;
        letter-spacing: -1px;

        .v-container {
            flex-direction: column;
            padding-top: 15px;
        }
    }
}
</style>
