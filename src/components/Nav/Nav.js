import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div>
          <ul className='nav'>
            <Link to='/private'><li>Home</li></Link>
            <Link to='/services'><li>Services</li></Link>
            <Link to='/about'><li>About Us</li></Link>
            <Link to='/contact'><li>Contact Us</li></Link>
            <Link to='/review'><li>Reviews</li></Link>
          </ul>
        </div>
    )
}