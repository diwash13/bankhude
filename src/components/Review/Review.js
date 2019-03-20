import React, { Component } from 'react'
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
        // console.log(user)
        return (
            <div>
                <div>
                    {user.username === review.username ? (
                        <Link to={`/review/${review.id}`}>
                            <p>
                                <strong style={{color:'green'}} >{review.username}</strong>
                            </p>
                        </Link>
                    ) : (
                        <p>
                            <strong style={{color:'grey'}}>{review.username}</strong>
                        </p>
                    )}
                    {this.state.editing ? (
                        <input
                            type='text'
                            value={this.state.review}
                            onChange={e => this.handleReview(e.target.value)}
                        />
                    ) : (
                        <p>{review.review}</p>
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
            </div>
        )
    }
 }