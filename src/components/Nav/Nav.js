import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import logo from '../Logo/logo.png'
import axios from 'axios'
import { connect } from "react-redux";
import { updateUser, clearUser } from '../../ducks/reducer'
// import { ToastContainer, toast } from 'react-toastify';

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }
    componentDidMount() {
      this.getUser();
    }
    getUser = async () => {
      const { id } = this.props;
      if (!id) {
        try {
          let res = await axios.get("/api/current");
          this.props.updateUser(res.data);
        } catch (err) {
          this.props.history.push("/");
        }
      }
    };
    logout = async () => {
      await axios.post("/auth/logout");
      this.props.clearUser();
      this.props.history.push("/");
    };

    toggle() {
      this.setState({
        show: !this.state.show
      })
    }

    render() {
      const { username } = this.props;
    return (
        <div >
          <div className='subnav'>
            <img className='logo' src={logo} alt='logo'></img>
            <h1>Priyanka Skin Care</h1>
            {!username ? 
          <Link to='/dashboard' style={{marginRight:40, marginTop:20}}>LogIn / Register</Link> :
          <div >
            <h5>Welcome {username.charAt(0).toUpperCase()+username.substr(1)}</h5>
            <button onClick={this.logout}>Logout</button>
          </div>
          }
          </div>
          <div>
          <div className='toggle' onClick={() => this.toggle()}>
            <i className="fa fa-bars"></i>
          </div>
            <ul className={ this.state.show ? 'nav show': 'nav'}>
              <Link to='/'><li>Home</li></Link>
              <Link to='/services'><li>Services</li></Link>
              <Link to='/about'><li>About Us</li></Link>
              <Link to='/contact'><li>Contact Us</li></Link>
              <Link to='/reviews'><li>Reviews</li></Link>
              <Link to='/cart'><li>Cart</li></Link>
            </ul>
            </div>
        </div>
    )
  // } else {
  //   return null

  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};
const mapDispatchToProps = {
  updateUser,
  clearUser
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav));



