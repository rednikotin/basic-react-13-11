import {normalizedComments as defaultComments} from '../fixtures'
import Immutable from 'immutable'
import {CREATE_COMMENT} from "../constants";

const commentsMap = defaultComments.reduce((acc, comment) => acc.set(comment.id, comment), new Immutable.Map())

export default (commentsState = commentsMap, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case CREATE_COMMENT:
            const { comment, id } = payload
            const commentWithId = {
                ...comment,
                id
            }
            return commentsState.set(id, commentWithId)
    }

    return commentsState
}