import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordion from './common/Accordion'
import {connect} from 'react-redux'
import { DateUtils } from 'react-day-picker'

class ArticleList extends Accordion {
    render() {
        const { articles, selected, range } = this.props
        const selectedSet = new Set(selected)
        const articlesToDisplay = articles
            .filter(article => selected.length === 0 || selectedSet.has(article.id))
            .filter(this.checkArticle(range))
        if (!articlesToDisplay.length) return <h3>No Articles</h3>
        const articleElements = articlesToDisplay
            .map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openItemId}
                     toggleOpen={this.toggleOpenItemMemoized(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    checkArticle = (range) => (article) => {
        if (!(range.from && range.to)) return true
        // todo: fixme
        const res = DateUtils.isDayInRange(article.date, range)
        console.log('---', 'filters', res)
        return res
    }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default connect(state => ({
    articles: state.articles,
    selected: state.selected,
    range: state.range
}))(ArticleList)