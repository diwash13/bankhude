import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import logo from '../Logo/logo.png'
import axios from 'axios'
import { connect } from "react-redux";
import { updateUser, clearUser } from '../../ducks/reducer'

class Nav extends Component {
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

    render() {
      const { username } = this.props;
    return (
        <div >
          <div className='subnav'>
            <img className='logo' src={logo} alt='logo'></img>
            <h1 style={{marginTop:40, fontFamily: 'cursive', color: 'grey', fontWeight:'bold'}}>Priyanka Skin Care</h1>
            {!username ? 
          <Link to='/dashboard' style={{marginRight:40, marginTop:20}}>LogIn / Register</Link> :
          <div >
            <h5 style={{marginRight:40, marginTop:20, fontFamily:'cursive', color: 'grey'}}>Welcome {username}</h5>
            <button className='button' style={{marginRight:40, marginTop:20}} onClick={this.logout}>Logout</button>
          </div>
          }
          </div>
            <ul className='nav' style={{ marginTop: 5, fontSize: '30px'}}>
              <Link to='/'><li>Home</li></Link>
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