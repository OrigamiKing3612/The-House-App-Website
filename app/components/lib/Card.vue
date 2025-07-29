<template>
    <div class="card">
        <h4 v-if="props.title" class="title">
            {{ props.title }}
        </h4>
        <div class="v-container">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string,
}>();

const padding_top = computed(() => {
    return props.title ? '50px' : '20px';
});
</script>


<style lang="scss" scoped>
.card {
    position: relative;
    padding: v-bind(padding_top) 20px 20px 20px;
    background-color: var(--main-background);
    border-radius: var(--border-radius);
    border: var(--border);
    margin-bottom: 10px;
    max-width: 450px;

    .title {
        position: absolute;
        top: -18px;
        left: 15px;
        font-size: 1.4em;
        letter-spacing: -1px;

        .v-container {
            flex-direction: column;
            padding-top: 15px;
        }
    }
}
</style>
