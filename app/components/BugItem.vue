<template>
    <NuxtLink :to="'/bugs/' + issue.number" class="link">
        <div class="container">
            <span class="title">#{{ issue.number }}: {{ issue.title }}</span>
            <span class="status-text" :class="issue.state">{{ normalizeString(issue.state) }}</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '#imports';

defineProps<{
    issue: GitHubIssue,
}>();
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px;
    border-bottom: 0.5px solid var(--main-background);

    .status-text {
        padding: 6px;
        border-radius: var(--border-radius);

        &.closed {
            background-color: var(--house-purple);
        }

        &.open {
            background-color: var(--house-green);
        }
    }
}

.container:nth-child(odd) {
    background-color: var(--background-primary);
}
</style>
