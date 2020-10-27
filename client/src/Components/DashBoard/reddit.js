import React, { Component } from 'react'
import RedditCard from './redditCard'

export default class Reddit extends Component {
    constructor() {
        super()
        this.state = {
            subreddits: ''
        }
    }

    componentDidMount() {
        fetch(`http://www.reddit.com/r/${this.props.subReddit}/new.json?sort=new`)
            .then(res => res.json())
            .then(res => this.setState({
                subreddits: [res.data.children[0], res.data.children[1], res.data.children[2]]
            }))

    }

    render() {
        if (this.state.subreddits.length > 0) {
            const reddit = this.state.subreddits.map((items, index) => {
                return <RedditCard data={items.data} key={index} />
            }
            )
            return (
                <>
                    { reddit}
                </>
            )
        }
        return null
    }
}
