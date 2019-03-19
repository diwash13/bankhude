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
            
            <div>
               <div>
                    <h3 style={{fontFamily:'cursive', color:'grey', fontWeight:'bold', marginTop:15}}>{service.service}</h3>
               </div> 
               <div className='service-div'>
                   <div className='img-div'>
                        <img  style={{height:300}}src={`${service.img}`} alt='service'/>
                   </div>
                   <div className='info-div'>{service.info}</div>
               </div>
               <div className='bottom-div'>
                   <div className='price-div'>
                       <h4>${service.price}</h4>
                    </div>
                   <div className='btn-div'>
                        <button className='back-btn' onClick={() => this.addToCart(service.service_id)}>Add to Cart</button>
                        <button className='back-btn' onClick={() => this.props.history.goBack()}>Back To Services</button>
                   </div>
               </div>
            </div>
        )
    }
}

export default Detail