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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // handleChange (event, formField) {
  //   event.preventDefault()
  //   this.setState({
  //     [formField]: event.target.value
  //   })
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit (event) {
    event.preventDefault()
    axios({
      url: 'http://localhost:4741/sign-in/',
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input placeholder='Username' name='username' value={username} onChange={this.handleChange} />
          <Form.Input placeholder='Password' name='password' value={password} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>

      // <form onSubmit={this.handleSubmit}>
      //   <input placeholder='username'
      //     value={this.state.username}
      //     onChange={(event) => this.handleChange(event, 'username')} />
      //   <input placeholder='password'
      //     value={this.state.password}
      //     onChange={(event) => this.handleChange(event, 'password')} />
      //   <button type='submit'>sign in</button>
      // </form>
    )
  }
}

export default SignInForm
