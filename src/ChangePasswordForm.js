import React, { Component } from 'react'
import axios from 'axios'
import { Form } from 'semantic-ui-react'

class ChangePasswordForm extends Component {
  constructor (props) {
    super (props)
    this.state = {
      oldPw: '',
      newPw: ''
    }
    this.changePassword = this.changePassword.bind(this)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  changePassword () {
    axios({
      url: `https://wordsquish-api.herokuapp.com/change-password/${this.props.curUser.id}`,
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token token=${this.props.curUser.token}`
      },
      data: {
        'passwords': {
          'old': this.state.oldPw,
          'new': this.state.newPw
        }
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render () {
    const { oldPw, newPw } = this.state

    return (
      <Form onSubmit={this.changePassword}>
        <Form.Group>
          <Form.Input placeholder='Old Password' name='oldPw' value={oldPw} onChange={this.handleChange} />
          <Form.Input placeholder='New Password' name='newPw' value={newPw} onChange={this.handleChange} />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default ChangePasswordForm
