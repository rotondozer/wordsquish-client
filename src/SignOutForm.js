import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'semantic-ui-react'

class SignOutForm extends Component {

  signOut () {
    const user = this.props.curUser
    axios({
      url: `https://cms-express-api.herokuapp.com/sign-out/${user.id}`,
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => console.log(res))
      .then(() => this.props.setUser(''))
      .catch(err => console.log(err))
  }

  render () {
    return (
      <Button size='large' onClick={this.signOut.bind(this)}>Sign Out</Button>
    )
  }
}

export default SignOutForm
