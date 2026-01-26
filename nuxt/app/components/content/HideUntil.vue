<template>
    <slot v-if="new Date(time) <= new Date()" />
</template>

<script lang="ts" setup>
const props = defineProps<{
    time: string, // 2026-01-07T09:00:00.000Z
}>()
</script>
