import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, START, LOAD_PAGE_COMMENTS, FAIL} from '../constants'
import {arrToMap} from './utils'
import {OrderedMap, Map, Record, Seq} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const PageRecord = Record({
    offset: null,
    loading: false,
    loaded: false,
    comments: new Seq()
})

const ReducerState = Record({
    entities: new OrderedMap({}),
    pages: new Map({}),
    total: null
})


export default (state = new ReducerState(), action) => {
    const { type, payload, response, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state
                .setIn(['entities', randomId], new CommentRecord({...payload.comment, id: randomId}))
                .updateIn(['localIds'], localIds => localIds.add(randomId))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_PAGE_COMMENTS + FAIL:
            console.log('---', action)

            return state
                .setIn(['pages', payload.offset], new PageRecord({
                    offset: payload.offset,
                    loading: false,
                    loaded: false,
                    comments: null
                }))

        case LOAD_PAGE_COMMENTS + START:
            console.log('---', action)

            return state
                .setIn(['pages', payload.offset], new PageRecord({
                    offset: payload.offset,
                    loading: true,
                    loaded: false,
                    comments: null
                }))

        case LOAD_PAGE_COMMENTS + SUCCESS:

            const commentsMap = arrToMap(response.records, CommentRecord)

            return state
                .mergeIn(['entities'], commentsMap)
                .setIn(['pages', payload.offset], new PageRecord({
                    offset: payload.offset,
                    loading: false,
                    loaded: true,
                    comments: Object.keys(commentsMap)
                }))
                .setIn(['total'], response.total)
    }

    return state
}