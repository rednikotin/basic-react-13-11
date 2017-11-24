import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, {DateUtils}  from 'react-day-picker';
import 'react-day-picker/lib/style.css';

class App extends Component {
    static defaultProps = {
        numberOfMonths: 2
    }

    state = {
        selected: null,
        from: undefined,
        to: undefined
    }

    handleSelect = selected => this.setState({ selected })

    handleDayClick = (day) => {
        const range = DateUtils.addDayToRange(day, this.state)
        this.setState(range)
    }

    render() {
        const {articles} = this.props
        const {selected, from, to} = this.state
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <UserForm />
                <Select options = {options} value = {selected} onChange = {this.handleSelect} multi />
                <p>
                    {!from && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from && to && `Selected from ${from.toLocaleDateString()} to ${to.toLocaleDateString()}`}
                </p>
                <DayPicker
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App