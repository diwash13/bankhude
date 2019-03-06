import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateUser, clearUser } from '../../ducks/reducer'
import "./Private.css";
import { Logo } from "../Logo/Logo";
// import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

class Private extends Component {
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
      <div>
        <div className='logout'>
          <div className='logo'><Logo /></div>
          <h5>Welcome {username}</h5>
          <button className='button' onClick={this.logout}>Logout</button>
        </div>
        <Nav />
        <div>
          <div className='left'></div>
          <div className='right'></div>
        </div>
        <footer className='footer'>
          <Footer />
        </footer>
      </div>
    );
  }
}
const mapStateToProps = reduxState => {
  return reduxState;
};
const mapDispatchToProps = {
  updateUser,
  clearUser
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Private);
