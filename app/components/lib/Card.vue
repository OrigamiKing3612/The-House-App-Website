<template>
    <div class="card">
        <div v-if="props.title" class="title">
            {{ props.title }}
        </div>
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
    padding: v-bind(padding_top) 0px 20px 0px;
    background-color: var(--background-0);
    border-radius: var(--border-radius);
    border: var(--border);
    max-width: 450px;
    width: 100%;

    .title {
        display: block;
        margin-top: 1.33em;
        margin-bottom: 1.33em;
        margin-left: 0;
        margin-right: 0;
        font-weight: bold;
        position: absolute;
        top: -18px;
        left: 15px;
        font-size: 1.4em;
        letter-spacing: -1px;
        text-align: left;
        color: var(--text-1);
    }

    .v-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0 20px;

        :deep(form),
        :deep(.card-ignore),
        :deep(.link) {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        :deep(.disclosure-group) {
            margin: 0 -10px;
        }
    }
}

:deep(p) {
    text-align: left;
}
</style>
