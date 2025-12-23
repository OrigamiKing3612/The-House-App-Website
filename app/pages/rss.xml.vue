<template>
    Redirecting...
</template>

<script setup lang="ts">
onMounted(() => {
    navigateTo('/blog/rss.xml', { redirectCode: 301 });
});
</script>
