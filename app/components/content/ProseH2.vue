<template>
    <h2 :id="props.id" class="prose-h">
        <a v-if="props.id && generate" :href="`#${props.id}`">
            <slot />
        </a>
        <slot v-else />
    </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h2)))
</script>

<style lang="scss" scoped>
h2 {
    font-size: 20px;
}
</style>
