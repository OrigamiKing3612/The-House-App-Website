import type { GitHubLabel } from "./GitHubLabel";

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

