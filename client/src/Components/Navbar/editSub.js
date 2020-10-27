import React, { Component } from 'react';
import Form from './form';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class editSub extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postStatus: false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler(e, _id, name) {
        e.preventDefault()
        const youtubeQueries = e.target.youtubeQueries.value;
        const twitter = e.target.twitter.value;
        const reddit = e.target.reddit.value;
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtubeQueries}&key=${process.env.REACT_APP_YV3_KEY}`)
            .catch(err => console.log(err))
            .then(res => {
                const { items } = res.data;
                const youtube = items.map(items => {
                    return items.id.videoId
                })
                console.log(youtube)
                axios({
                    method: "POST",
                    url: "/api/add",
                    data: { user_id: _id, user_name: name, reddit, twitter, youtubeQueries, youtube },
                    withCredentials: true,
                    credentials: 'include',
                }).then((res) =>
                    this.setState({
                        postStatus: true
                    })

                )


            })
            .catch(err => console.log(err))
    }
    render() {
        if (this.state.postStatus) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <Form onClickHandler={this.onClickHandler} _id={this.props.props._id} name={this.props.props.user} />
        )
    }
}
