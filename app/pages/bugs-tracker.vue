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
            <SearchField v-model="search" class="search" />
            <Dropdown :options="['Issues', 'Feature Requests']" :option-display="(a: string) => a" v-model="mode"
                class="mode" />
            <Dropdown :options="['Open', 'Closed']" :option-display="(a: string) => a" v-model="status"
                class="status" />
        </div>
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
</template>

<script setup lang="ts">
import type { GitHubIssue } from '#imports';

const mode = ref<'Issues' | 'Feature Requests'>('Issues');
const status = ref<'Open' | 'Closed'>('Open');
const search = ref<string>('');

const store = useStore();

const issues = computed<GitHubIssue[]>(() => store.issues);
const enhancements = computed<GitHubIssue[]>(() => store.enhancements);

definePageMeta({
    title: "Bug Tracker"
});

const filtered = computed<GitHubIssue[]>(() => {
    let result
    if (mode.value === 'Issues') {
        result = issues.value;
    } else {
        result = enhancements.value;
    }

    result = result.filter(u => u.state == status.value.toLowerCase());

    if (search.value.trim() !== "") {
        result = result.filter(u =>
            u.title.toLowerCase().includes(search.value.toLowerCase().trim())
        );
    }
    return result;
})

onMounted(async () => {
    await store.getIssues();
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: .6rem;
    align-items: center;
    justify-items: center;
    transition: all 0.3s ease;
}

@media (max-width: 720px) {
    .settings {
        grid-template-columns: repeat(2, 1fr);
    }

    .search {
        grid-column: span 2;
    }
}

@media (max-width: 480px) {
    .settings {
        grid-template-columns: 1fr;

        .search {
            grid-column: span 1;
        }
    }
}
</style>
