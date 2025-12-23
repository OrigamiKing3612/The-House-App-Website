import axios from "axios"

const SubmitContact = async (name: string, email: string, organization: string, hear: string, question?: string) => {
    try {
        const response = await axios.post("https://n8n.origamiking3612.com/webhook/the-house-app/contact", {
            name: name,
            email: email,
            organization: organization,
            hear: hear,
            question: question
        })

        return response.status == 200
    } catch (error: any) {
        console.error("API error:", error.message)
        return []
    }
}

export default SubmitContact
