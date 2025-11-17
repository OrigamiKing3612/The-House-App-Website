import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    state: () => ({
        issues: [] as GitHubIssue[],
        enhancements: [] as GitHubIssue[]
    }),
    actions: {
        async getIssues() {
            this.issues = await GetIssues()
            this.enhancements = await GetEnhancements()
        }
    }
})
