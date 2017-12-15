import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import ArticlesPage from './routes/ArticlesPage'
import CommentsPage from './routes/CommentsPage'
import UserForm from './UserForm'
import Filters from './Filters'
import Counter from './Counter'
import Menu, {MenuItem} from './Menu'
import {connect} from 'react-redux'
import {switchLang} from "../AC"
import withInter from '../decorators/withInternationalization'

class App extends Component {
    static childContextTypes = {
        username: PropTypes.string
    }

    getChildContext() {
        return {
            username: this.state.user
        }
    }

    state = {
        user: ''
    }

    handleUserChange = user => this.setState({ user })
    handleLangChange = lang => this.props.switchLang()

    render() {
        console.log('---', 1)
        return (
            <div>
                <h1>{this.props.inter.appName}</h1>
                <button onClick={this.handleLangChange}>{this.props.inter.lang}</button>
                <UserForm value = {this.state.user} onChange = {this.handleUserChange}/>
                <Menu>
                    <MenuItem url="/counter">{this.props.inter.counter}</MenuItem>
                    <MenuItem url="/articles">{this.props.inter.articles}</MenuItem>
                    <MenuItem url="/filters">{this.props.inter.filters}</MenuItem>
                    <MenuItem url="/comments/1">{this.props.inter.comments}</MenuItem>
                </Menu>
                <Switch>
                    <Redirect from="/" exact to="/articles"/>
                    <Route path="/counter" component={Counter} strict exact/>
                    <Route path="/filters" component={Filters}/>
                    <Route path="/articles/new" render={() => <h1>{this.props.inter.newArticle}</h1>}/>
                    <Route path="/articles" component={ArticlesPage}/>
                    <Route path="/comments" component = {CommentsPage}/>
                    <Route path="/error" component = {() => <h1>{this.props.inter.oops}</h1>}/>
                    <Route path="*" render={() => <h1>{this.props.inter.notFound}</h1>}/>
                </Switch>
            </div>
        )
    }
}

export default connect( null, { switchLang }, null, { pure: false } )(withInter(App, { notPure: true }))