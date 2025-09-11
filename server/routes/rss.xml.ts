import RSS from 'rss';

export default defineEventHandler(async (event) => {
    const posts = [
        {
            title: "Version 0.3.1",
            id: '31',
            link: "https://the-house-app.com/changelog/v/0.3.1",
            date: new Date("2025-09-10"),
            description: "UI fixes and improvements",
            tags: ["changelog", "ui"]
        },
        {
            title: "Version 0.3.2",
            id: '32',
            link: "https://the-house-app.com/changelog/v/0.3.2",
            date: new Date("2022-09-10"),
            description: "Game Mode",
            tags: ["changelog", "game mode"]
        },
        {
            title: "Version 0.3.3",
            id: '33',
            link: "https://the-house-app.com/changelog/v/0.3.3",
            date: new Date("2022-09-10"),
            description: "Deleting Announcements",
            tags: ["changelog", "announcements"]
        }
    ]

    const feed = new RSS({
        title: 'The House App',
        site_url: 'https://the-house-app.com/',
        feed_url: 'https://the-house-app.com/rss',
    });
    for (const post of posts) {
        feed.item({
            title: post.title,
            url: post.link,
            description: post.description,
            date: post.date,
            categories: post.tags,
        });
    }
    const feedString = feed.xml({ indent: true });

    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);
})

