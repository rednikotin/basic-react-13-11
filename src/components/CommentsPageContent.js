import React, {Component} from 'react'
import Comment from './Comment'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadPageComments} from '../AC'
import {commentsPageSelector} from "../selectors";

class CommentsPageContent extends Component {
    componentDidMount() {
        const { offset, page, loadPageComments } = this.props
        if (!page || (!page.loading && !page.loaded)) loadPageComments(offset)
    }

    render() {
        return (
            <div>
                {this.getPage()}
            </div>
        )
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
    page: commentsPageSelector(state, props)
}), { loadPageComments })(CommentsPageContent)