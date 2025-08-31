<template>
    <LargeTitleText>Bug<br>Tracker</LargeTitleText>
    <div class="bugs">
        <Card>
            <p>
                Welcome to The House App bug tracker! Here, you can find a list of known issues and bugs that have been
                reported by users. If you encounter any problems while using the app, please check this list to see if
                the issue has already been reported. If not, feel free to report it so we can work on fixing it. Your
                feedback is invaluable in helping us improve the app and provide a better experience for all users.
            </p>
            <p>
                For a comprehensive and up-to-date overview of reported bugs, please visit our <NuxtLink
                    class="text-link" to="https://github.com/OrigamiKing3612/The-House-App-Website/issues" external>
                    GitHub Issues page </NuxtLink>.
            </p>
        </Card>
        <RoundedContainer>
            <template #title>
                Known Issues
            </template>
            <template #default>
                <div v-if="issues.length > 0" v-for="issue in issues" :key="issue.id" class="left-aligned">
                    <BugItem :issue="issue" />
                </div>
                <div v-else class="left-aligned">
                    <div class="container">
                        <span class="title">No known issues at this time. If you encounter any problems, please report
                            them!</span>
                    </div>
                </div>
            </template>
        </RoundedContainer>
        <RoundedContainer>
            <template #title>
                Enhancements and Feature Requests
            </template>
            <template #default>
                <div v-if="enhancements.length > 0" v-for="enhancement in enhancements" :key="enhancement.id"
                    class="left-aligned">
                    <EnhancementItem :enhancement="enhancement" />
                </div>
                <div v-else class="left-aligned">
                    <div class="container">
                        <span class="title">No known enhancements or feature requests at this time. If you have any
                            ideas for new features, please let us know!</span>
                    </div>
                </div>
            </template>
        </RoundedContainer>
    </div>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '#imports';

const issues = ref<GitHubIssue[]>([]);
const enhancements = ref<GitHubIssue[]>([]);

definePageMeta({
    layout: "tab-view",
    title: "Bug Tracker"
});

onMounted(async () => {
    issues.value = await GetIssues()
    enhancements.value = await GetEnhancements()
});
</script>

<style lang="scss" scoped>
.bugs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    :deep(.card) {
        margin-bottom: 0px;
        max-width: 700px;
    }
}
</style>
