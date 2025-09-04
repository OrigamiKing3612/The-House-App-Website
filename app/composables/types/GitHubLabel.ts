export interface GitHubLabel {
    id: number;
    name: string;
    color: string;
}
export function newGitHubLabel(id: number, name: string, color: string): GitHubLabel {
    return {
        id,
        name,
        color
    };
}
