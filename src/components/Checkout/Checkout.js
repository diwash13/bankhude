import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { connect } from 'react-redux'
import Logo from '../Logo/logo.png'
// import { toast } from 'react-toastify';

class Checkout extends Component {

    onToken = (token) => { 
        token.card = void 0
        axios.post('/api/payment', {token, amount:Math.round(this.props.total*100)}).then(res => {
            console.log(res)
            axios.delete(`/api/clearCart/${this.props.id}`).then(res => {
                window.location.reload()
            }).catch((err) => {console.log(err)})
        })
    }


    render() {
        return (
            <StripeCheckout
                name="Priyanka Skin Care."
                description="Payment to Priyanka Skin Care"
                image={Logo}
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