import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Detail from '../Detail/Detail'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

class Services extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        axios.get('/api/services').then(res => {
            this.setState({
                isLoaded: true,
                services: res.data
            })
        })
    }

    addToCart = (service_id) => {
        if (this.props.username) {
        axios.post(`/api/cart`,{ service_id:service_id}) 
        } else {
            this.props.history.push('/dashboard')
        }
    }
    

    render() {
        // console.log(this.state.services)
        const { isLoaded, services } = this.state
        const mappedServices = services.map(service => {
            return (
                
                <div className="card">
                <div className="img-container" onClick={() => console.log('u clicked me')}>
                    {/* key={service.service_id} */}
                    <Link to={`/detail/${service.service_id}`}>
                    <div>
                    <h4>{service.service}</h4>
                    <img src={`${service.img}` } className='card-img-top'/>
                    <h4 style={{marginTop:'10px'}}>
                    ${service.price} 
                    </h4>
                    </div>
                    </Link>
                    <button className='cart-btn'onClick={() => this.addToCart(service.service_id)}>
                    Add
                    </button> 
                    </div>
                </div>
                
            )
        })

        if(!isLoaded) {
            return <div>Hang Tight while we fetch your data...</div>
        } else {

            return (
                
                <div className="service-card">
                    Services
                    <div>
              <div className="services">{mappedServices}</div>
              
            </div>
            <footer className="footer">
            </footer>
                </div>
                
            
            )
        }
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Services)

