import React, { Component } from 'react'
import ReviewList from './ReviewList'
import axios from 'axios'

class ReviewList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            input: ''
        }

        this.deleteReview = this.deleteReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
    }

    handleInput(val) {
        this.setState({
            input: val
        })
    }

    componentDidMount() {
        axios.get('/api/reviews').then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    postReview() {
        const { input } = this.state
        axios.post('/api/review', { review: input}).then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    deleteReview(id) {
        axios.delete(`/api/review/${id}`).then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    updateReview(id, review) {
        axios.put(`/api/review/${id}`, { review }).then(res => {
            this.setState({
                reviews: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <ReviewList 
                reviews={this.state.reviews}
                user={this.props.user}
                delete={this.deleteReview}
                update={this.updateReview}
                />
                <div>
                    <textarea
                        value={this.state.input}
                        onChange={e => this.handleInput(e.target.value)}
                        placeholder='Write your review'
                    />
                    <button onClick={() => this.postReview}>Submit</button>
                </div>
            </div>
        )
    }
}