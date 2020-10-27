import React, { Component } from 'react'
import { ReactTinyLink } from 'react-tiny-link'

export default class medium extends Component {
    render() {
        return (
            <div style={{ width: '400px', height: '300px' }}>
                <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={1}
                    minLine={1}
                    url="https://www.amazon.com/Steve-Madden-Mens-Jagwar-10-5/dp/B016X44MKA/ref=lp_18637582011_1_1?srs=18637582011&ie=UTF8&qid=1550721409&sr=8-1"
                />
            </div>
        )
    }
}
