import React, { Component } from 'react'

export default class redditCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            preview: ''
        }
    }
    render() {
        if (this.props.data.thumbnail == 'self') {
            return (
                <a target="_blank" rel="external" href={`https://www.reddit.com${this.props.data.permalink}`} style={{ color: 'inherit' }}>
                    <div className="blog-card" >
                        <div className="meta">
                            <div className="photo" style={{ backgroundImage: `url(https://picsum.photos/id/${Math.pow(this.props.data.ups, 2)}/200/130)` }} />
                        </div>
                        <div className="description">
                            <h4>{this.props.data.title}</h4>
                            <p> Find out more...</p>
                        </div>
                    </div>
                </a >
            )
        }
        return (
            <a target="_blank" rel="external" href={`https://www.reddit.com${this.props.data.permalink}`} style={{ color: 'inherit' }}>
                <div className="blog-card" >
                    <div className="meta">
                        {this.props.data.thumbnail ? <div className="photo" style={{ backgroundImage: `url(${this.props.data.thumbnail})` }} /> : <div className="photo" style={{ backgroundImage: `url(${this.props.data.url_overridden_by_dest})` }} />}
                    </div>
                    <div className="description">
                        <h4>{this.props.data.title}</h4>
                        <p> Find out more...</p>
                    </div>
                </div>
            </a >
        )
    }
}

{/* <div class="blog-card">
    <div class="meta">
        <div class="photo" style={`background-image: ${this.props.data.thumbnail ? this.props.data.thumbnail : this.props.data.url_overridden_by_dest}`}></div>
    </div>
    <div class="description">
        <h1>Learning to Code</h1>
        <h2>Opening a door to the future</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        <p class="read-more">
            <a href="#">Read More</a>
        </p>
    </div>
</div> */}
