<template>
    <CardWithTitle title="The House App Bug Tracker">
        <p class="left-aligned">
            Welcome to The House App bug tracker! Here, you can find a list of known issues and bugs
            that have been reported by users. If you encounter any problems while using the app, please check this list
            to see if the issue has already been reported. If not, feel free to report it so we can work on fixing it.
            Your feedback is invaluable in helping us improve the app and provide a better experience for all users.
        </p>
    </CardWithTitle>
    <RoundedCard>
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
    </RoundedCard>
    <RoundedCard>
        <template #title>
            Enhancements and Feature Requests
        </template>
        <template #default>
            <div v-if="issues.length > 0" v-for="enhancement in issues" :key="enhancement.id" class="left-aligned">
                <EnhancementItem :enhancement="enhancement" />
            </div>
            <div v-else class="left-aligned">
                <div class="container">
                    <span class="title">No known enhancements or feature requests at this time. If you have any ideas
                        for new features, please let us know!</span>
                </div>
            </div>
        </template>
    </RoundedCard>
</template>

<script setup lang="ts">
import type { GitHubIssue } from '#imports';

const issues = ref<GitHubIssue[]>([]);

onMounted(async () => {
    issues.value = await GetIssues()
});
</script>

<style lang="scss" scoped>
.title {
    width: 85%;
    max-width: 700px;
}

.left-aligned {
    text-align: left;
}


.container {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    padding: 10px;
    border-bottom: 0.5px solid var(--main-background);
}
</style>
