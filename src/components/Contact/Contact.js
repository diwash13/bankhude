import React from 'react'
import Map from '../Contact/map.png'

export default function Contact() {
    return (
        <div className='about-body'>
            
            
          <div className='map'>
            <img src={Map} alt='map'></img>
          </div>
          <div className='middle'>
            <h4>Hours of Operation</h4>
            <p>Everyday 8am-8pm</p>
            <h4>Additional Info</h4>
            <ul>
                <li>Accepts Walk-in:	Yes</li>
                <li>Accepts Credit Cards:	Yes</li>
                <li>Accepts Apple Pay:	Yes</li>
                <li>Accepts Bitcoin:	No</li>
                <li>Parking:	Street</li>
                <li>Bike Parking:	Yes</li>
                <li>WIFI access:	Yes</li>
                <li>Home Visit: Yes</li>
            </ul>
            </div>
          <div className='right-contact'>
          <h4>About Your Favorite Esthetician</h4>
            <ul>
                <li>Name: Priyanka Sharma</li>
                <li>E-mail: makeupbypri13@gmail.com</li>
                <li>Phone: 251-327-5585</li>
            </ul>
          </div>
            {/* <footer className='footer'>
            </footer> */}
        </div>
    )
}