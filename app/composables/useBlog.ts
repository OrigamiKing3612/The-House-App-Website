export const useBlog = () => {
    const { data: articles, refresh } = useAsyncData<BlogArticle[]>('blog', async () => {
        return queryCollection('blog')
            .where('extension', '=', 'md')
            .where('draft', '<>', true) // false
            .order('timestamp', 'DESC')
            .all()
            .then(res =>
                res.filter(article =>
                    article.path !== '/blog' &&
                    (!article.releaseDate || new Date(article.releaseDate) <= new Date())
                )
            )
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
