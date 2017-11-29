import {INCREMENT, DELETE_ARTICLE, RANGE_FILTER, IDS_FILTER} from '../constants'

export function increment() {
    const action = { type: INCREMENT }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function rangeFilter(range) {
    return {
        type: RANGE_FILTER,
        payload: { range }
    }
}

export function idsFilter(ids) {
    return {
        type: IDS_FILTER,
        payload: { ids }
    }
}