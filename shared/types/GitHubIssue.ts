import type { GitHubLabel } from "#imports";

class GitHubIssue {
    id: number;
    number: number;
    title: string;
    html_url: string;
    labels: GitHubLabel[];
    state: string;
    body: string;
    state_reason: string;

    constructor(id: number, number: number, title: string, html_url: string, labels: GitHubLabel[], state: string, body: string, state_reason: string) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.html_url = html_url;
        this.labels = labels;
        this.state = state;
        this.body = body;
        this.state_reason = state_reason;
    }
}

export default GitHubIssue;
