import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './common/Loader'
import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadPageComments} from '../AC'
import {PAGE_SIZE} from "../constants";
import {totalCommentsSelector, commentsPageSelector} from "../selectors";

class CommentsPageContent extends Component {
    componentDidMount() {
        const { total, offset, page, loadPageComments } = this.props
        if (!total || !page || (!page.loading && !page.loaded)) loadPageComments(offset)
    }

    render() {
        const total = Number(this.props.total ? this.props.total : PAGE_SIZE + 1)
        const offset = Number(this.props.offset)
        return (
            <div>
                {this.getPage()}
                {this.getPaginator(total, offset)}
            </div>
        )
    }

    getPaginator(total, offset) {
        const prev = (offset - PAGE_SIZE) < 0 ? <span>prev</span> : <Link to={`/comments/${offset - PAGE_SIZE}`}>prev</Link>
        const next = (offset + PAGE_SIZE) >= total ? <span>next</span> : <Link to={`/comments/${offset + PAGE_SIZE}`}>next</Link>
        return <div>{prev} {offset + 1}-{Math.min(offset + PAGE_SIZE, total)} {next}</div>
    }

    getPage() {
        const { page } = this.props
        if (!page) return null
        if (page.loading) return <Loader />
        if (!page.comments) return <div>No Comments!</div>
        const body = page.comments.length ? (
            <ul>
                {page.comments.map(id => <li key = {id}><Comment id = {id} />{id}</li>)}
            </ul>
        ) : <h3>No comments yet</h3>
        return <div>{body}</div>
    }
}

export default connect((state, props) => ({
    total: totalCommentsSelector(state),
    page: commentsPageSelector(state, props)
}), { loadPageComments })(CommentsPageContent)