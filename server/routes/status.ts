export default defineEventHandler((event) => {
    return sendRedirect(event, "https://status.origamisystems.org", 301)
})
