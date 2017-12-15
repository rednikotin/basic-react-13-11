import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import withInter from '../../decorators/withInternationalization'

//console.log('---', React.Fragment)
class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Fragment>
                <h2>{this.props.inter.mainMenu}:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default withInter(Menu)