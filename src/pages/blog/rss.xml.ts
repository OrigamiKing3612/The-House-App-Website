import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

function sortPosts(a: { data: { timestamp: Date } }, b: { data: { timestamp: Date } }) {
    return Number(b.data.timestamp) - Number(a.data.timestamp);
}

function formatDate(date: Date) {
    date.setUTCHours(0);
    return date;
}

export const GET: APIRoute = async (context) => {
    const unsortedPosts = [...(await getCollection('blog'))];
    const posts = unsortedPosts.sort((a, b) => sortPosts(a, b));

    return rss({
        title: "The House App",
        description: "Updates and news from The House App",
        site: (context.site as URL).href,
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.description,
            link: `/blog/${item.id}/`,
            pubDate: formatDate(item.data.timestamp),
        })),
    })
}
