import React, { Component } from 'react'
import ReviewList from './ReviewList'
import axios from 'axios'
import { connect } from 'react-redux'
import './Review.scss'
import Picture from './review.jpg'

class ReviewPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            input: ''
        }

        this.deleteReview = this.deleteReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.postReview = this.postReview.bind(this)
    }

    handleInput(val) {
        this.setState({
            input: val
        })
    }

    componentDidMount() {
        axios.get('/api/reviews').then(res => {
            // console.log(res.data)
            this.setState({
                reviews: res.data
            })
        })
    }

    postReview() {
        const { input } = this.state
        if(this.props.user) {
        axios.post('/api/review', { review: input}).then(res => {
            this.setState({
                reviews: res.data
            })
            
        })
    } else {
        this.props.history.push('/dashboard')
    }
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
        const { user } = this.props
        console.log(user)
        return (
            <div>
                <div className='review-div'>
                    <div className='review-img-div'>
                        <img className='review-img' src={Picture} alt='img' />
                    </div>
                    <div>
                        {/* { user === review.username ? ( */}
                        <div className='text'>
                            <h3 style={{fontFamily:'cursive', color:'grey', marginTop:20}} >Submit Your Review</h3>
                            <p style={{color:'grey', marginLeft:100, marginRight:50, marginBottom:30}} >Your feedback is highly appreciated and will help us to improve our ability to serve you and other valuable customers.</p>
                            <div className='review-input'>
                                <textarea style={{width:300}}
                                    value={this.state.input}
                                    onChange={e => this.handleInput(e.target.value)}
                                    placeholder='Write your review'
                                />
                                <button className='submit-btn' onClick={this.postReview}>Submit</button>
                            </div>
                            
                        </div>
                        <div className='display-review'>
                            <ReviewList 
                                reviews={this.state.reviews}
                                user={this.props.user}
                                delete={this.deleteReview}
                                update={this.updateReview}
                            />
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}
const mapStateToProps = reduxState => {
    return {
      user: reduxState.username
    }     
}
export default connect(mapStateToProps)(ReviewPage)