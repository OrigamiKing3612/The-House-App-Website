class GitHubLabel {
    id: number;
    name: string;
    color: string;

    constructor(id: number, name: string, color: string) {
        this.id = id;
        this.name = name;
        this.color = color;
    }
}

export default GitHubLabel;
