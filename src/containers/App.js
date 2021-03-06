import React, {Component} from 'react'

import Header from './Header'
import Main from './Main'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      user: ''
    }
    this.setUser = this.setUser.bind(this)
  }

  setUser = (user) => this.setState({ user })

  render() {
    return (
      <div>
        <Header curUser={this.state.user}/>
        <Main setUser={this.setUser} curUser={this.state.user}/>
      </div>
    )
  }
}

export default App
