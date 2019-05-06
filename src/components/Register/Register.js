import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { updateUser } from "./../../ducks/reducer"
import { ToastContainer, toast } from 'react-toastify';
// import '../Css/Dashboard.css'


class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      first_name: '',
      last_name: '',
      email: '',
      phone: ''
    }

    this.register = this.register.bind(this)
  }
  componentDidMount() {
    this.checkUser()
  }
  
  checkUser = async () => {
    const {id} = this.props
    if (!id) {
      try {
        let res = await axios.get("/api/current")
        this.props.updateUser(res.data)
        this.props.history.push('/private')
      } catch (err) {
      }
    } else {
      this.props.history.push('/private')
    }
  }
  handleChange(prop, val) {
    this.setState({
      [prop]: val
    })
  }
  async register() {
    let user = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone
    }
    try {
      const { username, password, first_name, last_name, email, phone } = this.state
            if(username && password && first_name, last_name, email, phone) {
      let res = await axios.post("/auth/register", user)
      this.props.updateUser(res.data)
      this.props.history.push("/private")
            } else {
              toast.error('Please fill out the registration form')
            }
    } catch (err) {
      toast.error("Choose a unique username")
    }
  }
  render() {
    const { username, password, first_name, last_name, email, phone } = this.state
    return (
      <div className='inner-container'>
        <div className='header'></div>
            <div className='box'>
            <div className='input-group'>
            <label>First Name</label>
            <input className='input'
                value={first_name}
                onChange={e => this.handleChange("first_name", e.target.value)}
                />
                <label>Last Name</label>
            <input className='input'
                value={last_name}
                onChange={e => this.handleChange("last_name", e.target.value)}
                />
            <label htmlFor='username'>Username</label>
                <input className='input'
                value={username}
                onChange={e => this.handleChange("username", e.target.value)}
                />
                <label>Email</label>
            <input className='input'
                value={email}
                onChange={e => this.handleChange("email", e.target.value)}
                />
                <label>Phone Number</label>
            <input className='input'
                value={phone}
                onChange={e => this.handleChange("phone", e.target.value)}
                />
            </div>

            <div className='input-group'>
             <label htmlFor='password'>Password</label>
                <input className='input'
                type="password"
                value={password}
                onChange={e => this.handleChange("password", e.target.value)}
                />
            </div>
        <button 
          type='button'
          className='login-btn'
          onClick={this.register}>Register</button>
      </div>
      <ToastContainer />
      </div>
    )
  }
}
const mapStateToProps = reduxState => {
  return {
    id: reduxState.id
  }
}
const mapDispatchToProps = {
  updateUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
