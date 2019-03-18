import React from 'react'
import '../Footer/Footer.css'
import { withRouter } from 'react-router-dom'

function Footer(props) {
    if(props.location.pathname !== '/') {

        return (
            <div className='footer'>
                <h3>Connect With Us</h3>
                <a href="https://www.facebook.com/pri.a.ca" className="fa fa-facebook"></a>
                <a href="https://www.twitter.com/makeupbypri13" className="fa fa-twitter"></a>
                <a href="https://wwww.instagram.com/makeupbypri13" className="fa fa-instagram"></a>
            </div>
        )
    } else {
        return null
    }
}

export default withRouter(Footer)