import type { GitHubLabel } from "../types/GitHubLabel";

export function newGitHubLabel(id: number, name: string, color: string): GitHubLabel {
    return {
        id,
        name,
        color
    };
}
