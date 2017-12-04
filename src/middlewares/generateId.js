import Immutable, { fromJS } from 'immutable'

export default store => next => action => {
    if (action.generateId) {
        const id = Math.random().toString(36).substring(2)
        const newAction = fromJS(action).setIn(['payload', 'id'], id).toJS()
        next(newAction)
    } else {
        next(action)
    }
}