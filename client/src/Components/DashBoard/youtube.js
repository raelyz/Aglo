import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class youtube extends Component {
    constructor() {
        super()
        this.state = {
            testing: ""
        }
    }


    render() {
        if (this.props.videoId) {
            const opts = { height: '340', width: '550' }
            return (
                <YouTube opts={opts} videoId={this.props.videoId} />
            )
        }
        return null
    }
}
