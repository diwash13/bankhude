import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Detail from '../Detail/Detail'
import { connect } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import Spinner from '../Spinner/Spinner'
// import alertify from 'alertifyjs'
import Snackbar from '../Snackbar/Snackbar'


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
                {/* <ToastContainer/> */}
                <div className="img-container">
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
                    {/* <Snackbar /> */}
                    Add
                    </button> 
                    </div>
                </div>
                
            )
        })

        if(!isLoaded) {
            // <div>Hang Tight while we fetch your data...</div>
            return <Spinner />
        } else {

            return (
                
                <div className="service-card">
                    <h3 style={{fontFamily:'cursive', color:'grey', marginTop:5}}>Services We Offer</h3>
                    <div>
              <div className="services">{mappedServices}</div>
              
            </div>
            {/* <footer className="footer">
            </footer> */}
                </div>
                
            
            )
        }
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}

export default connect(mapStateToProps)(Services)

