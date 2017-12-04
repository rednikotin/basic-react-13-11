import {createSelector} from 'reselect'

export const articlesSelector = state => state.articles
export const filtersSelector = state => state.filters
export const commentListSelector = state => state.comments
export const idSelector = (_, props) => props.id

export const articlesAsArraySelector = createSelector(articlesSelector, (articles) => articles.valueSeq().toArray())

export const filtratedArticlesSelector = createSelector(articlesSelector, articlesAsArraySelector, filtersSelector, (articles, articlesArr, filters) => {
    console.log('---', 1)
    const {selected, dateRange: {from, to}} = filters

    if (selected.length) {
        return selected.reduce((acc, id) => {
            const article = articles.get(id)
            const published = Date.parse(article.date)
            if (!from || !to || (published > from && published < to)) {
                acc.push(id)
            }
            return acc
        }, [])
    } else {
        return articlesArr.filter(article => {
            const published = Date.parse(article.date)
            return (!from || !to || (published > from && published < to))
        }).map(article => article.id)
    }

})

export const createArticleSelector = () => createSelector(articlesSelector, idSelector, (articles, id) => {
    return articles.get(id)
})

export const createCommentSelector = () => createSelector(commentListSelector, idSelector, (comments, id) => {
    console.log('---', 'commentSelector', id)
    return comments.get(id)
})