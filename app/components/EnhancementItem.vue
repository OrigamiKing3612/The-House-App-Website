<template>
    <NuxtLink :to="enhancement.html_url" external class="link">
        <div class="container">
            <span class="title">#{{ enhancement.number }}: {{ enhancement.title }}</span>
            <span class="status-text" style="color: var(--always-white);" :class="{ [enhancement.state]: true }">{{
                normalizeString(enhancement.state) }}</span>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import { normalizeString, type GitHubIssue } from '#imports';

defineProps<{
    enhancement: GitHubIssue,
}>();
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px;
    border-bottom: 0.5px solid var(--background-0);

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
    background-color: var(--background-1);
}
</style>
