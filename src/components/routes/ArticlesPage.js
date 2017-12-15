import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ArticleList from '../ArticleList'
import Article from '../Article'
import withInter from '../../decorators/withInternationalization'

class ArticlesPage extends Component {
    static propTypes = {

    };

    render() {
        console.log('---', 2)
        return (
            <div>
                <ArticleList />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        if (!match) return <h1>{this.props.inter.pleaseSelectArticle}</h1>
        console.log('---', 3)
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default withInter(ArticlesPage)