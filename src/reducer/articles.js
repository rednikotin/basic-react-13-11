import {CREATE_COMMENT, DELETE_ARTICLE} from '../constants'
import {normalizedArticles as defaultArticles, normalizedComments as defaultComments} from '../fixtures'
import Immutable from 'immutable'

const articlesMap = defaultArticles.reduce((acc, article) => acc.set(article.id, article), new Immutable.Map())

export default (articlesState = articlesMap, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.id)
        case CREATE_COMMENT:
            const { articleId, id } = payload
            const article = articlesState.get(articleId)
            return articlesState.set(articleId, {
                ...article,
                comments: [ ...article.comments || [], id ]
            })
    }

    return articlesState
}