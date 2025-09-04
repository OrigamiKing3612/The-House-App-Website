import type { GitHubLabel } from "#imports";

export interface GitHubIssue {
    id: number;
    number: number;
    title: string;
    html_url: string;
    labels: GitHubLabel[];
    state: string;
    body: string;
    state_reason: string;
}

export function newGitHubIssue(id: number, number: number, title: string, html_url: string, labels: GitHubLabel[], state: string, body: string, state_reason: string): GitHubIssue {
    return {
        id,
        number,
        title,
        html_url,
        labels,
        state,
        body,
        state_reason
    }
}
