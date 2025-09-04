import { newGitHubIssue } from "#imports"
import axios from "axios"

const GetEnhancements = async () => {
    try {
        const response = await axios.get("https://n8n.origamiking3612.com/webhook/the-house-app/get/enhancements")

        if (!Array.isArray(response.data)) {
            throw new Error("Expected array of enhancements, got: " + typeof response.data)
        }

        return response.data.map((enhancements: any) => newGitHubIssue(
            enhancements.id,
            enhancements.number,
            enhancements.title,
            enhancements.html_url,
            (enhancements.labels || []).map((label: any) => ({
                id: label.id,
                name: label.name,
                color: label.color
            })),
            enhancements.state,
            enhancements.body,
            enhancements.state_reason
        ))

    } catch (error: any) {
        console.error("API error:", error.message)
        return []
    }
}

export default GetEnhancements
