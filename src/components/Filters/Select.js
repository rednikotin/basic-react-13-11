import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {idsFilter} from '../../AC'

class SelectFilter extends Component {
    static propTypes = {
        selected: PropTypes.array.isRequired,
        articles: PropTypes.array.isRequired,
        idsFilter: PropTypes.func
    }

    handleChange = selected => this.props.idsFilter(selected.map(item => item.value))

    render() {
        const { articles, selected } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            onChange={this.handleChange}
            multi
        />
    }
}

export default connect(state => ({
    selected: state.selected,
    articles: state.articles
}), { idsFilter })(SelectFilter)