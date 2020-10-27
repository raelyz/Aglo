import React, { Component } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default class twitter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <TwitterTimelineEmbed

                sourceType='list'
                id={`${this.props.list}`}
                // screenName: `${this.props.account}`
                options={{
                    height: '340',
                    width: '550'
                }}
            />
        )
    }
}
