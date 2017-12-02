import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class SignInForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  signIn () {
    axios({
      url: 'https://wordsquish-api.herokuapp.com/sign-in/',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        'credentials': {
          'email': this.state.username,
          'password': this.state.password
        }
      }
    })
      .then((response) => this.props.setUser(response.data.user))
      .catch((err) => console.log(err))
  }

  render () {
    const { username, password } = this.state

    return (
      <Form onSubmit={this.signIn}>
        <Form.Group>
          <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
          <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} type='password'/>
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default SignInForm
