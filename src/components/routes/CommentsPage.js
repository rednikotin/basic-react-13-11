import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import CommentsPageContent from '../CommentsPageContent'
import { browserHistory } from 'react-router'
import {connect} from "react-redux"
import {totalCommentsSelector} from "../../selectors"
import Paginator from "../Paginator";

class CommentsPage extends Component {
    render() {
        console.log('---', this.props.match)
        return (
            <div>
                <Route path={`${this.props.match.path}/:offset`} render={this.getCommentsPage} />
                <Route path={`${this.props.match.path}/:offset`} children={this.getPaginator} />
            </div>
        )
    }

    getCommentsPage = ({ match }) => {
        return <CommentsPageContent offset={match.params.offset} key={match.params.offset} />
    }

    getPaginator = ({ match }) => {
        const CommentPaginator = connect((state) => ({
            total: totalCommentsSelector(state)
        }))(Paginator)
        return <CommentPaginator offset={match.params.offset} path={this.props.match.path} />
    }

}

export default CommentsPage
