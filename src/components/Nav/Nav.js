import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function Nav(props) {
  // if(props.location.pathname !=='/') {

    return (
        <div>
          <ul className='nav' style={{fontFamily:'Indie Flower', fontSize: '30px'}}>
            <Link to='/private'><li>Home</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
            <Link to='/reviews'><li>Reviews</li></Link>
            <Link to='/cart'><li>Cart</li></Link>
          </ul>
        </div>
    )
  // } else {
  //   return null

  }
// }

export default withRouter(Nav)