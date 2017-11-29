import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import range from './range'
import selected from './selected'

export default combineReducers({
    counter: counterReducer,
    articles,
    range,
    selected
})