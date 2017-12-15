import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import App from  './App'
import history from '../history'
import dict from './common/dict'

class Root extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        inter: PropTypes.func
    }

    getChildContext() {
        const inter = lang => Object.keys(dict).reduce((acc, key) => {
            acc[key] = dict[key][lang]
            return acc
        }, {})
        return { inter }
    }

    render() {
        return (
            <Provider store = {this.props.store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root