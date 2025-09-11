import RSS from 'rss';

export default defineEventHandler(async (event) => {

    const feed = new RSS({
        title: 'The House App',
        site_url: 'https://the-house-app.com/',
        feed_url: 'https://the-house-app.com/rss',
    });
    for (const post of Object.values(data.changelogs)) {
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

