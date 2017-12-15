import React from 'react'
import withInter from '../../decorators/withInternationalization'

class Loader extends React.Component {
    render() {
        return (
            <h2>{this.props.inter.loading}...</h2>
        )
    }
}

export default withInter(Loader)