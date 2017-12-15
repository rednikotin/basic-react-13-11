import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import filters from './filters'
import lang from './lang'

export default combineReducers({
    counter: counterReducer,
    router: routerReducer,
    articles, comments, filters, lang
})