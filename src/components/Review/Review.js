import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';

export default class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            review: ''
        }
    }

    handleReview(val) {
        this.setState({
            review: val
        })
    }

    setEdit() {
        this.setState({
            editing: true
        })
    }

    update(id) {
        const { review } = this.state
        this.props.update(id, review)
        this.setState({
            editing: false,
            review: ''
        })
    }

    render() {
        const { review, user } = this.props
        console.log(user)
        return (
            <div>
                <Nav />
                Review
                <div>
                    {user.username === review.username ? (
                        <Link to={`/review/${review.id}`}>
                            <p>
                                <strong>{review.username}</strong>
                            </p>
                        </Link>
                    ) : (
                        <p>
                            <strong>{review.username}</strong>
                        </p>
                    )}
                </div>
                {user.username === review.username ? (
                    <div>
                        <button onClick={() => this.props.delete(review.id)}>
                          Delete
                        </button>
                        {this.state.editing ? (
                            <button onClick={() => this.update(review.id)}>
                              Save Changes
                            </button>
                        ) : (
                            <button onClick={() => this.setEdit()}>Edit</button>
                        )}
                    </div>
                ) : null}
                <Footer />
            </div>
        )
    }
 }