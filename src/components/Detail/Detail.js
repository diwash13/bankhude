import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
          service: {}  
        }
    }

    componentDidMount() {
        axios.get(`/api/service/${this.props.match.params.id}`).then(res => {
            this.setState({
                service: res.data
            })
        })
    }

    addToCart =(service_id) => {
        axios.post(`/api/cart`,{ service_id:service_id})
    }

    render() {
        const { service } = this.state
        return (
            
            <div className='container py-5'>
            <div className='row'>
            <div className='.col-10.mx-auto.text-center.text-slanted.text-blue.my-5'>
                <h2>{service.service}</h2>
            </div>
            </div> <div className='row'>
               <div>
               <img src={`${service.img}` } className='img-fluid' alt='service'/>
               </div> 
               <h4 className='text-blue'>
               <strong>{service.price}</strong>
               </h4>
               <div>
               <p className='text-muted lead'>{service.info}</p>
               </div>
            </div>
                <button className='back-btn' onClick={() => this.addToCart(service.service_id)}>Add to Cart</button>
                <button className='back-btn' onClick={() => this.props.history.goBack()}>Back To Services</button>
            </div>
        )
    }
}

export default Detail