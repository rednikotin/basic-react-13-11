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

const interWrap = (Component, props) => connect((state) => {
    return { lang: state.lang }
})(class InterWrapper extends React.Component {
    static contextTypes = {
        inter: PropTypes.object
    }

    render() {
        const inter = Object.keys(props).reduce((acc, key) => {
            acc[key] = this.context.inter[key][this.props.lang]
            return acc
        }, {})

        return <Component {...inter} />
    }
})

export {interWrap}

export default connect((state) => {
    return {lang: state.lang}
})(Inter)