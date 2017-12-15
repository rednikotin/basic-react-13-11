import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import Accordion from './common/Accordion'
import Loader from './common/Loader'
import {connect} from 'react-redux'
import {filtratedArticlesSelector, articlesLoadingSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import withInter from '../decorators/withInternationalization'

class ArticleList extends Accordion {
    componentDidMount() {
        // Prevent reloading!
        const { articles, loading } = this.props
        if (!loading && articles.length === 0) this.props.loadAllArticles()
    }

    render() {
        const {articles, loading, inter} = this.props
        if (loading) return <Loader />
        if (!articles.length) return <h3>{inter.noArticle}</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <NavLink activeStyle={{color: 'red'}} to={`/articles/${article.id}`}>{article.title}</NavLink>
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => {
    return {
        articles: filtratedArticlesSelector(state),
        loading: articlesLoadingSelector(state)
    }
}, { loadAllArticles })(withInter(ArticleList))