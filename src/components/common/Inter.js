import React, {Fragment, PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Inter extends PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired
    }

    static contextTypes = {
        inter: PropTypes.object
    }

    render() {
        const interValue = this.context.inter[this.props.value][this.props.lang]
        return <Fragment>{interValue}</Fragment>
    }
}

export default connect((state) => {
    return {lang: state.lang}
})(Inter)