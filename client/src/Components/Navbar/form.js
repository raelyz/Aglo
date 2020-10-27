import React, { Component } from 'react'

export default class form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form className="container" action="/" onSubmit={(e) => this.props.onClickHandler(e, this.props._id, this.props.name)}>
                <div className="row">
                    <div className="form-group col-md-4">
                        <label>Youtube Query</label>
                        <input type="text" className="form-control" name="youtubeQueries" placeholder="Enter Search Query" />
                        <small id="emailHelp" className="form-text text-muted">Add more queries to populate your feed</small>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Twitter List</label>
                        <input type="text" className="form-control" name="twitter" placeholder="Enter List Id, eg. 13613616137" />
                        <small id="emailHelp" className="form-text text-muted">Add more Twitter Widgets!</small>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Subreddits</label>
                        <input type="text" className="form-control" name="reddit" placeholder="Enter Subreddit, eg. Singapore to add the singapore subreddit to your feed" />
                        <small id="emailHelp" className="form-text text-muted">Add more subreddits to populate your feed</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}
