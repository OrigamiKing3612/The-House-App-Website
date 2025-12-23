export const useDocs = () => {
    const { data: docs, refresh } = useAsyncData<DocsArticle[]>('docs', async () => {
        return queryCollection('docs')
            .where('extension', '=', 'md')
            // .where('draft', '<>', true)
            .all()
            .then(res => res.filter(article => article.path !== '/docs'))
    }, { default: () => [] })

    async function fetchList() {
        if (!docs.value?.length) {
            return refresh()
        }
    }

    return {
        docs,
        fetchList
    }
}
