import React, { Component } from 'react'
import axios from 'axios'

export default class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cart: []
        }
        
        this.deleteCart = this.deleteCart.bind(this)
    }

    componentDidMount() {
        axios.get('/api/cart').then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

    deleteCart(id) {
        axios.delete(`/api/cart/${id}`).then(res => {
            this.setState({
                cart: res.data
            })
        })
    }

   subTotal = () => {
       const {cart} = this.state
       let total = 0
       cart.forEach(item => {
           total += Number(item.price)
       })
       return total.toFixed(2)
   }
    render() {
        // console.log(this.state.cart)
        const { cart } = this.state
        const mappedCart = cart.map(item => {
            console.log(item.service)
           return (
               <div>
               <h4>{item.service}</h4>
               <img src={`${item.img}` } className='card-img-top'/>
               <h4 style={{marginTop:'10px'}}>
                    ${item.price} 
                </h4>
                <button onClick={() => this.deleteCart(item.cart_id)}>Delete</button>
               </div>
           )

        })
        return (
            <div>
            <h1>Your Service Cart</h1>
            {mappedCart}
            <h5>SubTotal: ${this.subTotal()} </h5>
            <button>Checkout</button>
            </div>
        )
    }
}