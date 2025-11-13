export const useBlog = () => {
    const { data: articles, refresh } = useAsyncData<BlogArticle[]>('blog', async () => {
        return queryCollection('blog')
            .where('extension', '=', 'md')
            .order('timestamp', 'DESC')
            .all()
            .then(res => res.filter(article => article.path !== '/blog'))
    }, { default: () => [] })

    async function fetchList() {
        if (!articles.value?.length) {
            return refresh()
        }
    }

    return {
        articles,
        fetchList
    }
}
