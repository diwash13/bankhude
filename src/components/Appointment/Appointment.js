import React, { Component } from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'

class Appointment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Logo />
                <Nav />
                Book Yout Service
            </div>
        )
    }
}

export default Appointment