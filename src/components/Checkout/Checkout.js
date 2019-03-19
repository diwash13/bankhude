import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'

class Checkout extends Component {

    onToken = (token) => { 
        token.card = void 0
        axios.post('/api/payment', {token, amount:Math.round(this.props.total*100)}).then(res => {
            console.log(res)
            axios.delete(`/api/clearCart/${this.props.id}`).then(res => {
                console.log('yay')
            }).catch((err) => {console.log(err)})
        })
    }


    render() {
        return (
            <StripeCheckout
                name="Pri Skin Care."
                description="Payment to Pri Skin Care"
                image="http://via.placeholder.com/100x100"
                token= {this.onToken}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                amount={Math.round(this.props.total*100)}
            />
        )
    }
}

const mapStateToProps = reduxState => {
    return {
      total: reduxState.total,
      id: reduxState.id
  }
}

export default connect(mapStateToProps)(Checkout)