import React, { Component } from "react";
import axios from "axios";
import { updateTotal } from '../../ducks/reducer'
import { connect } from 'react-redux'
import './Cart.scss'
import Checkout from '../Checkout/Checkout'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      subTotal: 0
    };

    this.deleteCart = this.deleteCart.bind(this);
    this.clearCart = this.clearCart.bind(this);
  }

  componentDidMount() {
    axios.get("/api/cart").then(res => {
      this.setState({
        cart: res.data
      });
    });
  }

  deleteCart(id) {
    axios.delete(`/api/cart/${id}`).then(res => {
      this.setState({
        cart: res.data
      });
    });
  }

  clearCart() {
    axios.delete(`/api/clearCart/${this.props.id}`).then(res => {
      this.setState({
        cart: []
      })
  }).catch((err) => {console.log(err)})
  }

  subTotal = () => {
    const { cart } = this.state;
    let total = 0;
    cart.forEach(item => {
      total += Number(item.price);
    });
    this.props.updateTotal(total.toFixed(2))
    return total.toFixed(2);
  }
  render() {
    const { username } = this.props
    const { cart } = this.state;
    const mappedCart = cart.map(item => {
      return (
        <div className='cart'>
          {username ?
          <div>
          <h4>{item.service}</h4>
          <img src={`${item.img}`} className="card-img-top" />
          <h4 style={{ marginTop: "10px" }}>${item.price}</h4>
          <button className='button' onClick={() => this.deleteCart(item.cart_id)}>Delete</button>
          </div> :
          null
          }
        </div>
      );
    });
    return (
      <div className='cart'>
        {username? 
        <div className='cart-div'>
        <h1>Your Service Cart</h1>
        {mappedCart}
        <h5>SubTotal: ${this.subTotal()} </h5>
        {this.subTotal() != 0.00 ?
        <button className='clear-btn' onClick={() => this.clearCart()}>Clear Cart</button> : null }
        {this.subTotal() != 0.00 ?
          <Checkout /> : null }
        {/* <button className='checkout-btn' onClick={() => this.props.history.push('/checkout')}>Checkout</button> */}
        </div> :
        <h3>Please login to view your cart</h3>
        }
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return {
    username: reduxState.username,
    id: reduxState.id
  }
}

export default connect(mapStateToProps, {updateTotal})(Cart)
