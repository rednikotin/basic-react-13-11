import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputWithValidation from './InputWithValidation'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        user: '',
        text: ''
    }

    handleUserCahnge = value => {
        this.setState({
            user: value
        })
    }

    handleTextCahnge = value => {
        this.setState({
            text: value
        })
    }

    handleSubmit = () => {
        console.log('---', 'submitted', this.state)
    }

    render() {
        return (
            <div>
                User: <InputWithValidation low = {10} hi = {100} value = {this.state.user} onChange = {this.handleUserCahnge} />
                Text: <InputWithValidation low = {20} hi = {100} value = {this.state.text} onChange = {this.handleTextCahnge} />
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        )
    }
}

export default CommentForm