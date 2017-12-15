import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createCommentSelector} from '../selectors'
import withInter from '../decorators/withInternationalization'

class Comment extends React.Component {
    render() {
        return (
            <div>
                {this.props.comment.text} <b>{this.props.inter.by} {this.props.comment.user}</b>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

const createMapStateToProps = () => {
    const commentSelector = createCommentSelector()

    return (state, ownProps) => ({
        comment: commentSelector(state, ownProps)
    })
}

export default connect(createMapStateToProps)(withInter(Comment))