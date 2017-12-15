import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment} from '../AC'
import Inter from './common/Inter'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick = {this.onClick}><Inter value="increment" /></button>
            </div>
        )
    }

    onClick = () => {
        this.props.handleIncrement()
    }
}

const mapStateToProps = (state) => ({
    count: state.counter
})

export default connect(mapStateToProps, {
    handleIncrement: increment
})(Counter)