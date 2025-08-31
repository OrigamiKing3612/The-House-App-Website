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
        <div class="settings">
            <Dropdown :options="['Issues', 'Feature Requests']" :option-display="a => a" v-model="mode" class="mode" />
            <SearchField v-model="search" v-if="!isScreenWidth && !isSmaller" />
            <Dropdown :options="['Open', 'Closed']" :option-display="a => a" v-model="status" class="status" />
        </div>
        <SearchField v-model="search" v-if="isSmaller && !isScreenWidth" class="search" />
        <RoundedContainer v-if="mode === 'Issues'">
            <template #title>
                Known Issues
            </template>
            <template #default>
                <div v-if="filtered.length > 0" v-for="issue in filtered" :key="issue.id" class="left-aligned">
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
        <RoundedContainer v-if="mode === 'Feature Requests'">
            <template #title>
                Enhancements and Feature Requests
            </template>
            <template #default>
                <div v-if="filtered.length > 0" v-for="enhancement in filtered" :key="enhancement.id"
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
    <SearchField v-if="isScreenWidth" v-model="search" class="mobile search-field" />
</template>

<script setup lang="ts">
import type { GitHubIssue } from '#imports';

const issues = ref<GitHubIssue[]>([]);
const enhancements = ref<GitHubIssue[]>([]);

const mode = ref<'Issues' | 'Feature Requests'>('Issues');
const status = ref<'Open' | 'Closed'>('Open');
const search = ref<string>('');

const isScreenWidth = useScreenWidth(520);
const isSmaller = useScreenWidth(650);

definePageMeta({
    layout: "tab-view",
    title: "Bug Tracker"
});

const filtered = computed<GitHubIssue[]>(() => {
    let result
    if (mode.value === 'Issues') {
        result = issues.value;
    } else {
        result = enhancements.value;
    }

    if (mode.value === 'Issues') {
        result = result.filter(u => u.state == status.value.toLowerCase());
    }

    if (mode.value === 'Feature Requests') {
        result = result.filter(u => u.state == status.value.toLowerCase());
    }

    if (search.value.trim() !== "") {
        result = result.filter(u =>
            u.title.toLowerCase().includes(search.value.toLowerCase().trim())
        );
    }
    return result;
})

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

.settings {
    width: 100%;
    max-width: 700px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


    .mode {
        min-width: 200px;
        justify-content: flex-end;
    }

    .status {
        justify-content: flex-start;
    }
}

@media (max-width: 520px) {
    .settings {
        justify-content: center;
        gap: 10px;

        .mode,
        .status {
            width: 100%;
            justify-content: space-between;
        }
    }
}

@media (max-width: 650px) {
    .settings {
        justify-content: center;
        gap: 10px;

        .mode,
        .status {
            width: 100%;
            justify-content: space-between;
        }
    }
}

.mobile {
    position: fixed;
    bottom: 10px;
    background: none;
    text-align: center;
    padding: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.1s ease;
    z-index: 999;
}
</style>
