<template>

</template>

<script setup lang="ts">
const id = useRoute().params.id as string;

const issue = ref<GitHubIssue | null>(null);
const store = useStore();

onMounted(async () => {
    issue.value = store.issues.find
});
</script>
