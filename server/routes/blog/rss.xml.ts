import RSS from 'rss';
import { queryCollection } from '@nuxt/content/server';

export default defineEventHandler(async (event) => {
    const feed = new RSS({
        title: 'The House App',
        site_url: 'https://the-house-app.com/',
        feed_url: 'https://the-house-app.com/rss',
    });

    const articles = await queryCollection(event, 'blog')
        .where('extension', '=', 'md')
        .where('draft', '<>', true)
        .order('timestamp', 'DESC')
        .all()
        .then((res: any) => res.filter((article: any) => article.path !== '/blog'))

    for (const a of articles) {
        feed.item({
            title: a.title,
            url: `https://the-house-app.com${a.path}`,
            description: a.description,
            date: a.timestamp,
            categories: a.tags,
        })
    }
    const feedString = feed.xml({ indent: true });

    event.node.res.setHeader('content-type', 'text/xml');
    event.node.res.end(feedString);
})

