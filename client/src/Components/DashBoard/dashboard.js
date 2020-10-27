import React, { Component } from 'react'
import Youtube from "./youtube";
import Twitter from "./twitter";
import Reddit from './reddit';
import Medium from './medium';
import axios from 'axios';
import background from '../../Images/76.jpg'

export default class dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            accessToken: this.props.accessToken,
            _id: this.props.props._id,
            name: this.props.props.user
        }
    }
    componentDidMount() {
        if (this.state._id) {
            const { _id, name } = this.props.props
            axios.post('/api', { _id })
                .then(res => {
                    if (res.data) {
                        this.setState({
                            subReddits: res.data.reddit,
                            twitter: res.data.twitter,
                            youtube: res.data.youtube
                        })
                    }
                })
        }
    }
    componentDidUpdate(previousProps) {
        if (previousProps.props._id !== this.props.props._id) {
            const { _id, name } = this.props.props
            if (_id) {
                axios.post('/api', { _id })
                    .then(res => {
                        if (res.data) {
                            this.setState({
                                subReddits: res.data.reddit,
                                twitter: res.data.twitter,
                                youtube: res.data.youtube
                            })
                        }
                    })
            }
            this.setState({
                subReddits: '',
                twitter: '',
                youtube: ''
            })
        }
    }


    render() {
        if (this.state.subReddits) {
            const reddit = this.state.subReddits.map((item, index) => {
                return <Reddit subReddit={item} key={index} />
            })
            const twitter = this.state.twitter.map((item, index) => {
                return <Twitter list={item} key={index} />
            })
            var youtube = this.state.youtube
            youtube.sort(() => Math.random() - 0.5)
            youtube.length = 8;
            var youtubeTrimmed = youtube.map((item, index) => {
                return (
                    <Youtube accessToken={this.props.accessToken} videoId={item} />
                )
            })
            return (
                <div className="row">
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <h2 class="card-title">Twitter</h2>
                        {twitter}
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <h2 class="card-title">Reddit</h2>

                        {reddit}

                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <h2 class="card-title">Youtube</h2>
                        {youtubeTrimmed}
                    </div>


                    {/* <Medium /> */}
                </div>
            )
        }
        return (<>
            <h1 style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>Aglo</h1>
            <span style={{ display: 'flex', justifyContent: 'center' }}>Just another news aggregator</span>
            <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'contain', height: '630px' }}></div>
            <a href='https://www.freepik.com/vectors/background'>Background vector created by ikatod - www.freepik.com</a>
        </>)
    }
}
