import React, { Component } from 'react'
import axios from 'axios'

import Button from 'components/Button'

class GoogleA extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      login : false
    }
    // this._handleLogin = this._handleLogin.bind(this)
  }

  componentDidMount = () => {
    if (this.props.location.search !== ''){
      let resToken = this.props.location.search
      let token = resToken.substring(7)
      let config = {
        headers : {
          'Authorization' : "bearer " + token,
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          'Access-Control-Expose-Headers': 'bearer'
        }
      }
      let data = {
        d : "test"
      }
      console.log("We are going to post!")
      axios.post('/auth/verify', data, config)
          .then(res=>{
            console.log(res)
            this.setState({ name : res.data.fname, login: res.data.login})
          })
          .catch(err=>{
            console.log(err)
          })
    }
  }



  componentDidUpdate = (prevProps) => {
  }


  render(){
    const { name , login } = this.state
    return(
      <div>
        <h4>Google Auth Page</h4>
        <a href="http://localhost:3001/auth/google">
          <Button name="Google" />
        </a>
        <Button name={name ? `Welcome!! ${name}` : "Not Login"} />
        {login &&
          <a href="http://localhost:3001/auth/logout">
            <Button name="Logout" />
          </a>

        }

      </div>
    )
  }
}

export default GoogleA
