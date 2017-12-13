import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import CommentsPageContent from '../CommentsPageContent'

class CommentsPage extends Component {

    render() {
        console.log('---', this.props.match)
        return (
            <div>
                <Route path={`${this.props.match.path}/:offset`} children={this.getCommentsPage} />
            </div>
        )
    }

    getCommentsPage = ({ match }) => {
        if (!match) return <h1>No comments!</h1>
        return <CommentsPageContent offset={match.params.offset} key={match.params.offset} />
    }

}

export default CommentsPage