import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import routes from './Routes/Routes'
import Nav from './components/Nav/Nav'
import { withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (

          <div className="App">
          <Nav location={this.props.location}/>
          <Footer location={this.props.location}/>
          <div className='routes'>{routes}</div>
          </div>
        
    );
  }
}

export default withRouter(App)
