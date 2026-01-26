import { newGitHubIssue } from "#imports"
import axios from "axios"

const GetIssues = async () => {
    try {
        const response = await axios.get("https://n8n.origamiking3612.com/webhook/the-house-app/get/issues")

        if (!Array.isArray(response.data)) {
            throw new Error("Expected array of issues, got: " + typeof response.data)
        }

        return response.data.map((issue: any) => newGitHubIssue(
            issue.id,
            issue.number,
            issue.title,
            issue.html_url,
            (issue.labels || []).map((label: any) => ({
                id: label.id,
                name: label.name,
                color: label.color
            })),
            issue.state,
            issue.body,
            issue.state_reason
        ))

    } catch (error: any) {
        console.error("API error:", error.message)
        return []
    }
}

export default GetIssues
