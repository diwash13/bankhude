import React from 'react'
import Review from './Review'

export default function ReviewList(props) {
    const mappedReviews = props.reviews.map(review => {
        return (
            <Review
                key={review.review}
                review={review}
                user={props.user}
                delete={props.delete}
                update={props.update}
            />
        ) 
    })
    return <div>{mappedReviews}</div>
}