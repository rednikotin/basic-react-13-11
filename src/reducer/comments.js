import {ADD_COMMENT, LOAD_COMMENTS, SUCCESS} from '../constants'
import {Record} from 'immutable'
import {arrToImmutableMap} from './utils'

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
})

export default (comments = arrToImmutableMap([], CommentRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, new CommentRecord(payload.comment).updateIn(['id'], id => id || randomId))

        case LOAD_COMMENTS + SUCCESS:
            return comments.merge(arrToImmutableMap(payload.response, CommentRecord))

    }

    return comments
}