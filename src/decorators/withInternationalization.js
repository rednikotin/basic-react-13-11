import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

export default (Component, notPure) => connect((state) => { return { lang: state.lang } }, null, null, { pure: !notPure } )(
    class Internationalization extends Component {
        static contextTypes = {
            inter: PropTypes.func
        }

        render() {
            const inter = this.context.inter(this.props.lang)
            return <Component {...this.props} inter={inter}/>
        }
    })

