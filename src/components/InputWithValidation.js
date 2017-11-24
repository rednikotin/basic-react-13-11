import React, { Component } from 'react'
import PropTypes from 'prop-types'

class InputWithValidation extends Component {
    static propTypes = {
        low: PropTypes.number.isRequired,
        hi: PropTypes.number.isRequired,
        value: PropTypes.string,
        onChange: PropTypes.func,
        color: PropTypes.string
    }

    static defaultProps = {
        color: "#FF0000"
    }


    state = {
        value: this.props.value,
        style: {
            backgroundColor: null
        }
    }


    handleChange = ev => {
        const {value} = ev.target
        this.setState({
            value: value.length > this.props.hi ? this.state.value : value,
            style: {
                backgroundColor: value.length >= this.props.low ? null : this.props.color
            }
        })
        const validated = value.length < this.props.low ? '' : value.length > this.props.hi ? this.state.value : value
        this.props.onChange && this.props.onChange(validated)
    }

    render() {
        return <input value = {this.state.value} onChange = {this.handleChange} style = {this.state.style} />
    }
}

export default InputWithValidation