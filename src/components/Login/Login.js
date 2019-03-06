import React, { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { updateUser } from "./../../ducks/reducer"
// import '../Css/Dashboard.css'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
    }
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
  login = async () => {
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    try {
      let res = await axios.post("/auth/login", user)
      this.props.updateUser(res.data)
      this.props.history.push("/private")
    } catch (err) {
      alert("Incorrect username or password")
    }
  }
  render() {
    const { username, password } = this.state
    return (
      <div className='inner-container'>
        <div className='header'></div>
            <div className='box'>
            <div className='input-group'>
            <label htmlFor='username'>Username</label>
                <input className='input'
                value={username}
                onChange={e => this.handleChange("username", e.target.value)}
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
          onClick={this.login}>Login</button>
        </div>
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
)(Login)
