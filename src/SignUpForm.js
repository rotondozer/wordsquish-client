import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class SignUpForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.signUp = this.signUp.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  signUp () {
    debugger
    axios({
      url: 'http://localhost:4741/sign-up',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        'credentials': {
          'email': this.state.username,
          'password': this.state.password,
          'password_confirmation': this.state.passwordConfirm
        }
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render () {
    const { username, password, passwordConfirm } = this.state
    return (
      <Form onSubmit={this.signUp}>
        <Form.Group>
          <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
          <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} type='password'/>
          <Form.Input placeholder='Confirm Password' name='passwordConfirm' value={passwordConfirm} onChange={this.handleChange} type='password'/>
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default SignUpForm
