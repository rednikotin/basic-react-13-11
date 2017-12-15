import React, {Component} from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import withInter from '../decorators/withInternationalization'

class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        username: PropTypes.string,
        lang: PropTypes.string,
        dictionary: PropTypes.object
    }

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen, inter } = this.props
        const text = isOpen ? inter.hideComments : inter.showComments
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        console.log('---', 5)
        //console.log('--- context', this.context)
        const { article: {comments, id, commentsLoading, commentsLoaded}, isOpen, inter } = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>{inter.noComments}</h3>

        return (
            <div>
                <h3>{this.context.username}</h3>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect( null , { loadArticleComments }, null, { pure: false })(withInter(toggleOpen(CommentList)))