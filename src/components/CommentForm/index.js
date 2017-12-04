import React, { Component } from 'react'
import './style.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createComment, deleteArticle} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <textarea value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit" disabled = {!this.isValidForm()} />
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.createComment(this.props.articleId, {...this.state})
        this.setState({
            user: '',
            text: ''
        })
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = type => this.state[type].length >= limits[type].min

    getClassName = type => this.isValidField(type) ? '' : 'form-input__error'

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 10,
        max: 100
    },
    text: {
        min: 20,
        max: 100
    }
}

export default connect(null, { createComment })(CommentForm)