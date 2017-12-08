import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import {loadCommentsForArticle} from "../AC"
import {connect} from "react-redux"
import Loader from "./common/Loader"

class CommentList extends Component {
    componentWillReceiveProps({article, isOpen, loadCommentsForArticle}) {
        if (!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadCommentsForArticle(article.id)
        }
    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {article: { comments, id, commentsLoading, commentsLoaded }, isOpen} = this.props
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}

export default connect( null , { loadCommentsForArticle })(toggleOpen(CommentList))