export default defineEventHandler((event) => {
    return sendRedirect(event, "https://status.the-house-app.com", 301)
})
