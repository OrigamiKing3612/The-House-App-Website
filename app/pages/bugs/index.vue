<template>
    Redirecting...
</template>

<script setup lang="ts">
onMounted(() => {
    navigateTo('/bugs-tracker', { redirectCode: 301 });
});
</script>
