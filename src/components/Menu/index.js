import React, { Component, Fragment } from 'react'
import MenuItem from './MenuItem'
import Inter from '../common/Inter'

//console.log('---', React.Fragment)
class Menu extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Fragment>
                <h2><Inter value="mainMenu" />:</h2>
                {this.props.children}
            </Fragment>
        )
    }
}

export {MenuItem}
export default Menu