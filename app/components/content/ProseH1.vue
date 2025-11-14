<template>
    <h1 :id="props.id">
        <a v-if="generate" :href="`#${props.id}`">
            <slot />
        </a>
        <slot v-else />
    </h1>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h1)))
</script>
<style lang="scss" scoped>
h1 {
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 5px;
    text-align: left;

    :deep(a) {
        color: var(--text-0);
        text-decoration: none;
    }
}
</style>
