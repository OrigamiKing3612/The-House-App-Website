import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    state: () => ({
        hasFetchedIssues: false,
        issues: [] as GitHubIssue[],
        enhancements: [] as GitHubIssue[]
    }),
    actions: {
        async getIssues() {
            if (this.hasFetchedIssues) return
            this.issues = await GetIssues()
            this.enhancements = await GetEnhancements()
            this.hasFetchedIssues = true
        }
    }
})
