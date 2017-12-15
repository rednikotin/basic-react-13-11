import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withInter from '../decorators/withInternationalization'

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
                {this.props.inter.username}: <input value = {this.props.value} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default withInter(UserForm)