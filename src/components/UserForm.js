import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Inter from './common/Inter'

class UserForm extends Component {
    static propTypes = {

    };

    handleChange = ev => {
        const {value} = ev.target
        this.props.onChange(value)
    }

    render() {
        return (
            <div>
                <Inter value="username" />: <input value = {this.props.value} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default UserForm