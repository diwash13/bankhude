import React, { Component } from 'react'
import axios from 'axios'

export default class DetailReview extends Component {
    constructor(props) {
        super(props)

        this.state = {
            review: {}
        }
    }

    componentDidMount() {
        axios.get(`/api/review/${this.props.match.params.id}`).then(res => {
            this.setState({
                review: res.data
            })
        })
    }

    render() {
        const { review } = this.state
        return (
            <div>
                <button onClick={() => this.props.history.goBack()}>Back</button>
                <h2>Username: {review.username}</h2>
                <h3>Password: {review.password}</h3>
            </div>
        )
    }
}